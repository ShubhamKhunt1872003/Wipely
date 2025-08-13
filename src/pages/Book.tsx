import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { 
  CheckCircle, 
  ArrowRight, 
  ArrowLeft,
  MapPin,
  Home as HomeIcon,
  Calendar,
  User,
  Phone,
  Mail,
  MessageSquare,
  PawPrint,
  Car,
  Sparkles,
  Flame,
  Layers,
  Bed,
  Shirt,
  Microwave,
  Square
} from 'lucide-react';

import postalCodes from '../data/postalcode.json';
import pricing from '../data/pricing.json';
import extras from '../data/extras.json';

interface FormData {
  serviceType: string;
  frequency: string;
  bedrooms: number;
  bathrooms: number;
  postalCode: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  hasPets: boolean;
  hasParking: boolean;
  notes: string;
  extras: string[];
}

const Book: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [postalCodeValid, setPostalCodeValid] = useState<boolean | null>(null);

  const { register, handleSubmit, watch, setValue, formState: { errors } } = useForm<FormData>({
    defaultValues: {
      serviceType: 'regular_cleaning',
      frequency: 'bi-weekly',
      bedrooms: 2,
      bathrooms: 1,
      hasPets: false,
      hasParking: true,
      extras: []
    }
  });

  const watchedValues = watch();

  // Handle Custom Cleaning selection
  useEffect(() => {
    if (watchedValues.serviceType === 'custom_cleaning') {
      setValue('bedrooms', 0);
      setValue('bathrooms', 0);
    } else if (watchedValues.bedrooms === 0 && watchedValues.bathrooms === 0) {
      // For non-custom services, ensure at least one is not 0
      setValue('bedrooms', 2);
      setValue('bathrooms', 1);
    }
  }, [watchedValues.serviceType, setValue]);

  const steps = [
    { number: 1, title: "Service Details", icon: HomeIcon },
    { number: 2, title: "Location", icon: MapPin },
    { number: 3, title: "Add-ons", icon: Sparkles },
    { number: 4, title: "Contact Info", icon: User }
  ];

  const serviceTypes = [
    { value: 'regular_cleaning', label: 'Regular House Cleaning', icon: HomeIcon },
    { value: 'end_of_lease', label: 'End of Lease Cleaning', icon: CheckCircle },
    { value: 'spring_cleaning', label: 'One-off Spring Cleaning', icon: Sparkles },
    { value: 'custom_cleaning', label: 'Custom Cleaning', icon: Square }
  ];

  const frequencyOptions = [
    { value: 'weekly', label: 'Weekly', popular: false },
    { value: 'bi-weekly', label: 'Bi-weekly', popular: true },
    { value: 'monthly', label: 'Monthly', popular: false }
  ];

  const extrasWithIcons = extras.map(extra => ({
    ...extra,
    iconComponent: getIconComponent(extra.icon)
  }));

  function getIconComponent(iconName: string) {
    const iconMap: { [key: string]: any } = {
      ChefHat: Flame,
      Layers: Layers,
      Armchair: Square,
      Bed: Bed,
      Flame: Flame,
      Square: Square,
      Shirt: Shirt,
      Microwave: Microwave
    };
    return iconMap[iconName] || Sparkles;
  }

  const validatePostalCode = (code: string) => {
    const isValid = postalCodes.includes(code);
    setPostalCodeValid(isValid);
    return isValid;
  };

  const calculatePrice = () => {
    const serviceType = watchedValues.serviceType as keyof typeof pricing;
    const bedrooms = watchedValues.bedrooms || 2;
    const bathrooms = watchedValues.bathrooms || 1;

    const servicePricing = pricing[serviceType];

    // Type guard to check if servicePricing has base_price, per_bedroom, and per_bathroom
    function isStandardPricing(obj: any): obj is { base_price: number; per_bedroom: number; per_bathroom: number } {
      return (
        obj &&
        typeof obj.base_price === 'number' &&
        typeof obj.per_bedroom === 'number' &&
        typeof obj.per_bathroom === 'number'
      );
    }

    if (!isStandardPricing(servicePricing)) {
      return 0;
    }

    const basePrice = servicePricing.base_price +
                     (bedrooms * servicePricing.per_bedroom) +
                     (bathrooms * servicePricing.per_bathroom);

    const extrasPrice = selectedExtras.reduce((total, extraId) => {
      const extra = extras.find(e => e.id === extraId);
      return total + (extra?.price || 0);
    }, 0);

    return basePrice + extrasPrice;
  };

  const handleExtraToggle = (extraId: string) => {
    const newExtras = selectedExtras.includes(extraId)
      ? selectedExtras.filter(id => id !== extraId)
      : [...selectedExtras, extraId];
    
    setSelectedExtras(newExtras);
    setValue('extras', newExtras);
  };

  const onSubmit = async (data: FormData) => {
    // Simulate HubSpot form submission
    const formData = {
      ...data,
      extras: selectedExtras,
      estimatedPrice: calculatePrice(),
      submittedAt: new Date().toISOString()
    };

    try {
      // Here you would typically submit to HubSpot Forms API
      // For demo purposes, we'll just log and show success
      console.log('Form submitted:', formData);
      
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      setIsSubmitted(true);
    } catch (error) {
      console.error('Submission error:', error);
    }
  };

  const nextStep = () => {
    if (currentStep < 4) {
      // Validation for step 1 - ensure bedrooms and bathrooms are not both 0 for non-custom services
      if (currentStep === 1 && watchedValues.serviceType !== 'custom_cleaning') {
        if (watchedValues.bedrooms === 0 && watchedValues.bathrooms === 0) {
          alert('For this service type, at least one bedroom or bathroom must be selected.');
          return;
        }
      }
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  if (isSubmitted) {
    return (
      <div className="pt-16 min-h-screen bg-gradient-to-br from-emerald-50 to-sage-50 flex items-center justify-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="max-w-md mx-auto px-4 text-center"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-20 h-20 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle className="w-10 h-10 text-emerald-600" />
            </motion.div>
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Booking Request Received!
            </h2>
            <p className="text-gray-600 mb-6">
              Thank you for choosing Wipely! We'll contact you within 24 hours to confirm your booking and arrange the perfect time for your clean.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.location.href = '/'}
              className="btn-primary w-full"
            >
              Return to Home
            </motion.button>
          </div>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="pt-16 min-h-screen bg-gradient-to-br from-emerald-50 to-sage-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Book Your Clean
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Get a personalized quote for your cleaning needs. No payment required — just tell us what you need!
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${
                  currentStep >= step.number 
                    ? 'bg-emerald-600 border-emerald-600 text-white' 
                    : 'bg-white border-gray-300 text-gray-400'
                }`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="ml-3 hidden md:block">
                  <div className={`text-sm font-medium ${
                    currentStep >= step.number ? 'text-emerald-600' : 'text-gray-400'
                  }`}>
                    Step {step.number}
                  </div>
                  <div className={`text-xs ${
                    currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'
                  }`}>
                    {step.title}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden md:block w-16 h-0.5 ml-6 ${
                    currentStep > step.number ? 'bg-emerald-600' : 'bg-gray-300'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            {/* Step 1: Service Details */}
            {currentStep === 1 && (
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Service Details</h2>
                
                {/* Service Type */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-3">
                    What type of cleaning do you need?
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {serviceTypes.map((service) => (
                      <label key={service.value} className="cursor-pointer">
                        <input
                          type="radio"
                          value={service.value}
                          {...register('serviceType')}
                          className="hidden"
                        />
                        <div className={`p-4 border-2 rounded-lg transition-all duration-200 ${
                          watchedValues.serviceType === service.value
                            ? 'border-emerald-500 bg-emerald-50'
                            : 'border-gray-200 hover:border-emerald-300'
                        }`}>
                          <div className="flex items-center space-x-3">
                            <service.icon className="w-5 h-5 text-emerald-600" />
                            <span className="font-medium text-gray-900">{service.label}</span>
                          </div>
                        </div>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Frequency */}
                {watchedValues.serviceType === 'regular_cleaning' && (
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      How often would you like cleaning?
                    </label>
                    <div className="grid grid-cols-3 gap-4">
                      {frequencyOptions.map((freq) => (
                        <label key={freq.value} className="cursor-pointer">
                          <input
                            type="radio"
                            value={freq.value}
                            {...register('frequency')}
                            className="hidden"
                          />
                          <div className={`p-4 border-2 rounded-lg text-center transition-all duration-200 ${
                            watchedValues.frequency === freq.value
                              ? 'border-emerald-500 bg-emerald-50'
                              : 'border-gray-200 hover:border-emerald-300'
                          }`}>
                            <span className="font-medium text-gray-900">{freq.label}</span>
                            {freq.popular && (
                              <span className="block text-xs text-emerald-600 mt-1">Most Popular</span>
                            )}
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>
                )}

                {/* Bedrooms & Bathrooms */}
                <div className="grid grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bedrooms
                    </label>
                    <select
                      {...register('bedrooms', { valueAsNumber: true })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059669] focus:border-[#059669] transition-colors duration-200 appearance-none bg-white"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.5rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em'
                      }}
                    >
                      {[0,1,2,3,4,5,6,7,8,9,10].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Bathrooms
                    </label>
                    <select
                      {...register('bathrooms', { valueAsNumber: true })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059669] focus:border-[#059669] transition-colors duration-200 appearance-none bg-white"
                      style={{
                        backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                        backgroundPosition: 'right 0.5rem center',
                        backgroundRepeat: 'no-repeat',
                        backgroundSize: '1.5em 1.5em'
                      }}
                    >
                      {[0,1,2,3,4,5,6,7,8,9,10].map(num => (
                        <option key={num} value={num}>{num}</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                {/* Validation message for non-custom services */}
                {watchedValues.serviceType !== 'custom_cleaning' && watchedValues.bedrooms === 0 && watchedValues.bathrooms === 0 && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">
                      For this service type, at least one bedroom or bathroom must be selected.
                    </p>
                  </div>
                )}
              </motion.div>
            )}

            {/* Step 2: Location */}
            {currentStep === 2 && (
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Location</h2>
                
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Postal Code
                  </label>
                  <input
                    type="text"
                    {...register('postalCode', { 
                      validate: validatePostalCode
                    })}
                    onChange={(e) => {
                      setValue('postalCode', e.target.value);
                      if (e.target.value.length === 4) {
                        validatePostalCode(e.target.value);
                      }
                    }}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200"
                    placeholder="e.g., 3000"
                  />
                  {postalCodeValid === false && (
                    <p className="mt-2 text-red-600 text-sm">
                      Sorry, we don't service this area yet. We're expanding soon!
                    </p>
                  )}
                  {postalCodeValid === true && (
                    <p className="mt-2 text-emerald-600 text-sm">
                      Great! We service your area.
                    </p>
                  )}
                  {errors.postalCode && (
                    <p className="mt-2 text-red-600 text-sm">{errors.postalCode.message}</p>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register('hasPets')}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <div className="flex items-center space-x-2">
                      <PawPrint className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">I have pets</span>
                    </div>
                  </label>

                  <label className="flex items-center space-x-3 cursor-pointer">
                    <input
                      type="checkbox"
                      {...register('hasParking')}
                      className="w-4 h-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded"
                    />
                    <div className="flex items-center space-x-2">
                      <Car className="w-5 h-5 text-gray-600" />
                      <span className="text-gray-700">Parking available</span>
                    </div>
                  </label>
                </div>
              </motion.div>
            )}

            {/* Step 3: Add-ons */}
            {currentStep === 3 && (
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Optional Add-ons</h2>
                <p className="text-gray-600 mb-6">
                  Select any additional services you'd like to include:
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {extrasWithIcons.map((extra) => (
                    <label key={extra.id} className="cursor-pointer">
                      <input
                        type="checkbox"
                        checked={selectedExtras.includes(extra.id)}
                        onChange={() => handleExtraToggle(extra.id)}
                        className="hidden"
                      />
                      <div className={`p-4 border-2 rounded-lg transition-all duration-200 ${
                        selectedExtras.includes(extra.id)
                          ? 'border-emerald-500 bg-emerald-50'
                          : 'border-gray-200 hover:border-emerald-300'
                      }`}>
                        <div className="flex items-center justify-between">
                          <div className="flex items-center space-x-3">
                            <extra.iconComponent className="w-5 h-5 text-emerald-600" />
                            <div>
                              <div className="font-medium text-gray-900">{extra.name}</div>
                              <div className="text-sm text-gray-600">{extra.description}</div>
                            </div>
                          </div>
                          <div className="text-emerald-600 font-bold">
                            ${extra.price}
                          </div>
                        </div>
                      </div>
                    </label>
                  ))}
                </div>
              </motion.div>
            )}

            {/* Step 4: Contact Info */}
            {currentStep === 4 && (
              <motion.div
                initial={{ x: 50, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      First Name
                    </label>
                    <input
                      type="text"
                      {...register('firstName', { required: 'First name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200"
                    />
                    {errors.firstName && (
                      <p className="mt-1 text-red-600 text-sm">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      {...register('lastName', { required: 'Last name is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200"
                    />
                    {errors.lastName && (
                      <p className="mt-1 text-red-600 text-sm">{errors.lastName.message}</p>
                    )}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^\S+@\S+$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200"
                    />
                    {errors.email && (
                      <p className="mt-1 text-red-600 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      {...register('phone', { required: 'Phone number is required' })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-red-600 text-sm">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes (Optional)
                  </label>
                  <textarea
                    {...register('notes')}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200"
                    placeholder="Any special instructions or requests..."
                  />
                </div>
              </motion.div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between items-center pt-8">
              <div>
                {currentStep > 1 && (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={prevStep}
                    className="btn-secondary flex items-center"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Previous
                  </motion.button>
                )}
              </div>

              <div className="text-center">
                {watchedValues.serviceType && (watchedValues.serviceType === 'custom_cleaning' || (watchedValues.bedrooms > 0 || watchedValues.bathrooms > 0)) && (
                  <div className="text-sm text-gray-600 mb-2">
                    Estimated Price
                  </div>
                )}
                {(watchedValues.serviceType === 'custom_cleaning' || (watchedValues.bedrooms > 0 || watchedValues.bathrooms > 0)) && (
                  <div className="text-2xl font-bold text-emerald-600">
                    ${calculatePrice()}
                  </div>
                )}
              </div>

              <div>
                {currentStep < 4 ? (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="button"
                    onClick={nextStep}
                    disabled={currentStep === 2 && postalCodeValid !== true}
                    className="btn-primary disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="btn-primary flex items-center"
                  >
                    Submit Request
                    <CheckCircle className="w-4 h-4 ml-2" />
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Book;