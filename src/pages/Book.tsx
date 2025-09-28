import { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useEffect } from 'react';
import { Snackbar, Alert } from '@mui/material';
import { CheckCircle, ArrowRight, ArrowLeft, MapPin, Home as HomeIcon, Calendar, User, Phone, Mail, MessageSquare, PawPrint, Car, Sparkles, Flame, Layers, Bed, Shirt, Microwave, Square, ChevronDown, Sofa, Building2, Star as Stairs } from 'lucide-react';
import postalCodes from '../data/postalcode.json';
import pricing from '../data/pricing.json';
import extras from '../data/extras.json';

// Import service-specific extras
const regularCleaningExtras = [
  { id: "interior_exterior_window", name: "Interior & Exterior Window", price: 45, icon: "Window", description: "Complete window cleaning inside and out" },
  { id: "fridge_cleanout", name: "Fridge Cleanout", price: 40, icon: "Microwave", description: "Deep clean and organize your refrigerator" },
  { id: "bbq_oven_deep", name: "BBQ & Oven Deep Cleaning", price: 120, icon: "Flame", description: "Professional deep cleaning for BBQ and oven" },
  { id: "gas_stove_rangehood", name: "Gas Stove Top & Rangehood", price: 60, icon: "Layers", description: "Thorough cleaning of gas appliances" },
  { id: "organizing", name: "Organizing", price: 50, icon: "Square", description: "Professional organizing services" },
  { id: "deep_clean_addon", name: "Deep Clean Add-on", price: 80, icon: "Sparkles", description: "Extra deep cleaning attention" }
];

const endOfLeaseExtras = [
  { id: "carpet_steam", name: "Carpet Steam Cleaning", price: 80, icon: "Layers", description: "Professional carpet deep cleaning" },
  { id: "balcony_garage", name: "Balcony/Garage Cleaning", price: 60, icon: "Building", description: "Additional outdoor space cleaning" },
  { id: "exterior_window", name: "Exterior Window Cleaning", price: 50, icon: "Window", description: "Outside window cleaning service" },
  { id: "inside_fridge", name: "Inside Fridge Cleaning", price: 40, icon: "Microwave", description: "Complete refrigerator interior cleaning" },
  { id: "washing_machine", name: "Inside Washing Machine Cleaning", price: 35, icon: "Layers", description: "Deep clean washing machine interior" },
  { id: "dryer_cleaning", name: "Inside Dryer Cleaning", price: 35, icon: "Flame", description: "Professional dryer interior cleaning" },
  { id: "upholstery_clean", name: "Upholstery Cleaning", price: 60, icon: "Sofa", description: "Sofa and furniture fabric cleaning" },
  { id: "wall_spot", name: "Wall Spot Cleaning", price: 30, icon: "Layers", description: "Remove marks and spots from walls" },
  { id: "blind_cleaning", name: "Blind Cleaning", price: 25, icon: "Window", description: "Professional blind cleaning service" },
  { id: "flight_stairs", name: "Flight of Stairs", price: 35, icon: "Stairs", description: "Complete staircase cleaning" }
];

const springCleaningExtras = [
  { id: "oven_deep_clean", name: "Oven Deep Clean", price: 70, icon: "Flame", description: "Complete oven degreasing and sanitization" },
  { id: "carpet_steam_clean", name: "Carpet Steam Clean", price: 80, icon: "Layers", description: "Professional carpet deep cleaning" },
  { id: "upholstery_care", name: "Upholstery Care", price: 60, icon: "Sofa", description: "Sofa and furniture fabric cleaning" },
  { id: "mattress_cleaning", name: "Mattress Cleaning", price: 50, icon: "Bed", description: "Deep mattress cleaning and sanitization" },
  { id: "window_cleaning_spring", name: "Window Cleaning", price: 45, icon: "Window", description: "Internal window cleaning and polishing" },
  { id: "inside_fridge_spring", name: "Inside Fridge Clean", price: 40, icon: "Microwave", description: "Complete refrigerator cleaning" },
  { id: "gas_stove_spring", name: "Gas Stove Tops & Rangehoods", price: 60, icon: "Flame", description: "Professional appliance cleaning" },
  { id: "blinds_cleaning_spring", name: "Blinds Cleaning", price: 25, icon: "Window", description: "Professional blind cleaning" },
  { id: "wall_spot_spring", name: "Wall Spot Cleaning", price: 30, icon: "Layers", description: "Remove wall marks and spots" }
];

const customCleaningExtras = [
  { id: "oven_deep_clean_custom", name: "Oven Deep Clean", price: 70, icon: "Flame", description: "Complete oven degreasing and sanitization" },
  { id: "carpet_steam_custom", name: "Carpet Steam Cleaning", price: 80, icon: "Layers", description: "Professional carpet deep cleaning" },
  { id: "upholstery_custom", name: "Upholstery Cleaning", price: 60, icon: "Sofa", description: "Sofa and furniture fabric cleaning" },
  { id: "window_cleaning_custom", name: "Window Cleaning", price: 45, icon: "Window", description: "Internal window cleaning and polishing" },
  { id: "bbq_cleaning_custom", name: "BBQ Deep Clean", price: 65, icon: "Flame", description: "Complete BBQ restoration and cleaning" },
  { id: "appliance_clean_custom", name: "Appliance Cleaning", price: 60, icon: "Microwave", description: "Microwave, fridge and dishwasher cleaning" },
  { id: "staircase_with_carpet", name: "Staircase with Carpet", price: 35, icon: "Stairs", description: "Complete staircase cleaning including carpet" },
  { id: "staircase_without_carpet", name: "Staircase without Carpet", price: 20, icon: "Stairs", description: "Staircase cleaning for hard surfaces only" },
  { id: "commercial_specs_custom", name: "Commercial Specs", price: 120, icon: "Building2", description: "Specialized commercial space cleaning" }
];
const WEB_APP_URL = `https://script.google.com/macros/s/AKfycbyFbdI8ATphbbINJiLHfPeX0a5GniO7V845aiA-_0orRr2BUYuDlS_NUFC5qozZKYqR/exec`;

// Email configuration
const ENQUIRY_EMAIL = 'wipelycleaning25@gmail.com';

interface FormData {
  serviceType: string;
  frequency: string;
  bedrooms: number;
  bathrooms: number;
  kitchens: number;
  livingrooms: number;
  postalCode: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  address: string;
  hasPets: boolean;
  hasParking: boolean;
  notes: string;
  extras: string[];
}

// Validation schema
const validationSchema = yup.object().shape({
  serviceType: yup.string().required('Service type is required'),
  frequency: yup.string().required('Frequency is required'),
  bedrooms: yup.number().min(0, 'Bedrooms must be 0 or more').required('Bedrooms is required'),
  bathrooms: yup.number().min(0, 'Bathrooms must be 0 or more').required('Bathrooms is required'),
  kitchens: yup.number().min(0, 'Kitchens must be 0 or more').required('Kitchens is required'),
  livingrooms: yup.number().min(0, 'Living rooms must be 0 or more').required('Living rooms is required'),
  postalCode: yup.string().required('Postal code is required'),
  firstName: yup
    .string()
    .required('First name is required')
    .min(2, 'First name must be at least 2 characters'),
  lastName: yup
    .string()
    .required('Last name is required')
    .min(2, 'Last name must be at least 2 characters'),
  email: yup
    .string()
    .required('Email is required')
    .email('Please enter a valid email address'),
  phone: yup
    .string()
    .required('Phone number is required')
    .matches(
      /^(\+61|0)[2-9]\d{8}$/,
      'Please enter a valid Australian phone number (e.g., 0412345678 or +61412345678)'
    ),
  address: yup
    .string()
    .required('Address is required')
    .min(10, 'Please enter a complete address'),
  hasPets: yup.boolean(),
  hasParking: yup.boolean(),
  notes: yup.string(),
  extras: yup.array().of(yup.string())
});

const Book: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedExtras, setSelectedExtras] = useState<string[]>([]);
  const [postalCodeValid, setPostalCodeValid] = useState<boolean | null>(null);
  const [bedroomDropdownOpen, setBedroomDropdownOpen] = useState(false);
  const [bathroomDropdownOpen, setBathroomDropdownOpen] = useState(false);
  const [kitchenDropdownOpen, setKitchenDropdownOpen] = useState(false);
  const [livingroomDropdownOpen, setLivingroomDropdownOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState('');
  const [snackbarSeverity, setSnackbarSeverity] = useState<'success' | 'error'>('success')
  const [selectedHours, setSelectedHours] = useState(2); // Default to 2 hours
  const [selectedCarpets, setSelectedCarpets] = useState(1); // Default to 1 carpet
  const { register, handleSubmit, watch, setValue, formState: { errors, touchedFields, isValid } } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    mode: 'onBlur',
    defaultValues: {
      serviceType: 'regular_cleaning',
      frequency: 'bi-weekly', // This will be overridden for non-regular services
      bedrooms: 0,
      bathrooms: 0,
      kitchens: 0,
      livingrooms: 0,
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
      setValue('kitchens', 0);
      setValue('livingrooms', 0);
    }
    
    // Set frequency based on service type
    if (watchedValues.serviceType === 'regular_cleaning') {
      setValue('frequency', 'bi-weekly');
    } else {
      // For all other service types, set frequency to one-time
      setValue('frequency', 'one-time');
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

  // Get service-specific extras
  const getServiceExtras = () => {
    switch (watchedValues.serviceType) {
      case 'regular_cleaning':
        return regularCleaningExtras.map(extra => ({
          ...extra,
          iconComponent: getIconComponent(extra.icon)
        }));
      case 'end_of_lease':
        return endOfLeaseExtras.map(extra => ({
          ...extra,
          iconComponent: getIconComponent(extra.icon)
        }));
      case 'spring_cleaning':
        return springCleaningExtras.map(extra => ({
          ...extra,
          iconComponent: getIconComponent(extra.icon)
        }));
      case 'custom_cleaning':
        return customCleaningExtras.map(extra => ({
          ...extra,
          iconComponent: getIconComponent(extra.icon)
        }));
      default:
        return extrasWithIcons;
    }
  };

  const currentServiceExtras = getServiceExtras();

  function getIconComponent(iconName: string) {
    const iconMap: { [key: string]: any } = {
      Flame: Flame,
      Layers: Layers,
      Sofa: Sofa,
      Bed: Bed,
      Window: Square,
      Grill: Flame,
      Microwave: Microwave,
      Stairs: Stairs,
      Building: Building2,
      Shirt: Shirt,
      Square: Square
    };
    return iconMap[iconName] || Sparkles;
  }

  const CustomDropdown = ({
    label,
    value,
    onChange,
    options,
    isOpen,
    setIsOpen
  }: {
    label: string;
    value: number;
    onChange: (value: number) => void;
    options: number[];
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
  }) => {
    return (
      <div className="relative">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          {label}
        </label>
        <div className="relative">
          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#059669] focus:border-[#059669] transition-colors duration-200 bg-white text-left flex items-center justify-between"
          >
            <span>{value}</span>
            <ChevronDown className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {isOpen && (
            <div className="absolute z-10 w-full mt-1 bg-white border border-gray-300 rounded-lg shadow-lg max-h-60 overflow-auto">
              {options.map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => {
                    onChange(option);
                    setIsOpen(false);
                  }}
                  className={`w-full px-3 py-2 text-left hover:bg-[#059669] hover:text-white transition-colors duration-200 ${value === option ? 'bg-[#059669] text-white' : 'text-gray-900'
                    }`}
                >
                  {option}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  const validatePostalCode = (code: string) => {
    const isValid = postalCodes.includes(code);
    setPostalCodeValid(isValid);
    return isValid;
  };

  const calculatePrice = () => {
    const serviceType = watchedValues.serviceType as keyof typeof pricing;
    const bedrooms = Number(watchedValues.bedrooms) || 0;
    const bathrooms = Number(watchedValues.bathrooms) || 0;
    const kitchens = Number(watchedValues.kitchens) || 0;
    const livingrooms = Number(watchedValues.livingrooms) || 0;

    // Special pricing for spring cleaning (hourly)
    if (serviceType === 'spring_cleaning') {
      // All hours are $50 each
      const basePrice = selectedHours * 50;
      
      // Add extras price
      const extrasPrice = selectedExtras.reduce((total, extraId) => {
        const extra = currentServiceExtras.find(e => e.id === extraId);
        return total + (extra?.price || 0);
      }, 0);

      return basePrice + extrasPrice;
    }

    // Special pricing for custom cleaning with carpet steam cleaning
    if (serviceType === 'custom_cleaning') {
      const servicePricing = pricing[serviceType];
      if (!servicePricing) return 0;
      
      let basePrice = servicePricing.base_price;
      basePrice += (bedrooms * servicePricing.per_bedroom) + 
                   (bathrooms * servicePricing.per_bathroom) + 
                   (kitchens * servicePricing.per_kitchen) + 
                   (livingrooms * servicePricing.per_livingroom);

      // Calculate extras price with special carpet pricing
      const extrasPrice = selectedExtras.reduce((total, extraId) => {
        const extra = currentServiceExtras.find(e => e.id === extraId);
        if (extraId === 'carpet_steam' || extraId === 'carpet_steam_custom') {
          // Custom carpet pricing: 1 carpet = $80, 2 carpets = $150, 3+ carpets = $200
          const carpetPrice = selectedCarpets === 1 ? 80 : selectedCarpets === 2 ? 150 : 200;
          return total + carpetPrice;
        }
        return total + (extra?.price || 0);
      }, 0);

      return basePrice + extrasPrice;
    }

    const servicePricing = pricing[serviceType];
    if (!servicePricing) return 0;

    // Base price calculation for other services
    let basePrice = servicePricing.base_price;
    basePrice += (bedrooms * servicePricing.per_bedroom) + 
                 (bathrooms * servicePricing.per_bathroom) + 
                 (kitchens * servicePricing.per_kitchen) + 
                 (livingrooms * servicePricing.per_livingroom);

    // Add extras price
    const extrasPrice = selectedExtras.reduce((total, extraId) => {
      const extra = currentServiceExtras.find(e => e.id === extraId);
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
    setSubmitting(true);
    setSnackbarOpen(false); // Close any existing snackbar

    const formData = {
      ...data,
      // Address fields - multiple formats for compatibility
      address: data.address || '',
      propertyAddress: data.address || '',
      serviceLocation: data.address || '',
      customerAddress: data.address || '',
      cleaningAddress: data.address || '',
      extras: selectedExtras,
      selectedExtras: selectedExtras,
      carpetQuantity: selectedCarpets,
      springCleaningHours: selectedHours,
      estimatedPrice: calculatePrice(),
      submittedAt: new Date().toISOString(),
      source: 'wipely-booking-form',
      enquiryEmail: ENQUIRY_EMAIL,
      // Additional debugging fields
      formType: 'booking-request',
      addressProvided: data.address ? 'yes' : 'no'
    };

    console.log('=== FORM SUBMISSION DEBUG ===');
    console.log('Raw form data:', data);
    console.log('Address value:', data.address);
    console.log('Complete form data being submitted:', formData);
    console.log('=== END DEBUG ===');

    try {
      const fd = new FormData();
      Object.entries(formData).forEach(([k, v]) => {
        if (Array.isArray(v)) {
          fd.append(k, JSON.stringify(v));
        } else {
          fd.append(k, String(v ?? ''));
        }
      });

      console.log('=== FORMDATA ENTRIES ===');
      for (let [key, value] of fd.entries()) {
        console.log(`${key}: ${value}`);
      }
      console.log('=== END FORMDATA ===');

      const res = await fetch(WEB_APP_URL, {
        method: 'POST',
        body: fd,
      });

      const response = await res.json();
      console.log('=== SERVER RESPONSE ===');
      console.log('Response:', response);
      console.log('=== END RESPONSE ===');
      if (response.success) {
        setIsSubmitted(true);
      } else {
        setSnackbarSeverity('error');
        setSnackbarMessage(response.error || 'Submission failed');
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error('Submission error:', error);
      setSnackbarSeverity('error');
      setSnackbarMessage(
        error instanceof Error
          ? error.message
          : 'There was a problem sending your inquiry. Please try again.'
      );
      setSnackbarOpen(true);
    } finally {
      setSubmitting(false);
    }
  };



  const nextStep = () => {
    if (currentStep < 4) {
      // Validation for step 2 - require valid postal code
      if (currentStep === 2) {
        if (!watchedValues.postalCode || postalCodeValid !== true) {
          return; // Don't proceed if postal code is invalid or empty
        }
      }
      
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
    <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-sage-50">
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
            Get a personalized quote for your cleaning needs. No payment required ,  just tell us what you need!
          </p>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-12">
          <div className="flex justify-between items-center">
            {steps.map((step, index) => (
              <div key={step.number} className="flex items-center">
                <div className={`flex items-center justify-center w-12 h-12 rounded-full border-2 transition-all duration-300 ${currentStep >= step.number
                  ? 'bg-emerald-600 border-emerald-600 text-white'
                  : 'bg-white border-gray-300 text-gray-400'
                  }`}>
                  <step.icon className="w-5 h-5" />
                </div>
                <div className="ml-3 hidden md:block">
                  <div className={`text-sm font-medium ${currentStep >= step.number ? 'text-emerald-600' : 'text-gray-400'
                    }`}>
                    Step {step.number}
                  </div>
                  <div className={`text-xs ${currentStep >= step.number ? 'text-gray-900' : 'text-gray-400'
                    }`}>
                    {step.title}
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div className={`hidden md:block w-16 h-0.5 ml-6 ${currentStep > step.number ? 'bg-emerald-600' : 'bg-gray-300'
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
                        <div className={`p-4 border-2 rounded-lg transition-all duration-200 ${watchedValues.serviceType === service.value
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
                          <div className={`p-4 border-2 rounded-lg text-center transition-all duration-200 ${watchedValues.frequency === freq.value
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

                {/* Hidden frequency field for non-regular services */}
                {watchedValues.serviceType !== 'regular_cleaning' && (
                  <input
                    type="hidden"
                    {...register('frequency')}
                    value="one-time"
                  />
                )}

                {/* Hourly Selection for Spring Cleaning */}
                {watchedValues.serviceType === 'spring_cleaning' && (
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      How many hours would you like a cleaner?
                    </label>
                    <div className="relative">
                      <select
                        value={selectedHours}
                        onChange={(e) => setSelectedHours(Number(e.target.value))}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200 bg-white"
                      >
                        <option value={1}>1 hour</option>
                        <option value={2}>2 hours</option>
                        <option value={3}>3 hours</option>
                        <option value={4}>4 hours</option>
                        <option value={5}>5 hours</option>
                        <option value={6}>6 hours</option>
                        <option value={7}>7 hours</option>
                        <option value={8}>8 hours</option>
                      </select>
                    </div>
                    <p className="mt-2 text-sm text-gray-600">
                      One-Off Spring Cleaning is charged at $50/hour.
                    </p>
                    <p className="mt-2 text-sm font-semibold text-emerald-600">
                      {selectedHours} hour{selectedHours > 1 ? 's' : ''}: Your rate is ${selectedHours * 50}
                    </p>
                  </div>
                )}

                {/* Bedrooms & Bathrooms */}
                {/* Bedrooms & Bathrooms - Hidden for Spring Cleaning */}
                {watchedValues.serviceType !== 'spring_cleaning' && (
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <CustomDropdown
                      label="Bedrooms"
                      value={watchedValues.bedrooms}
                      onChange={(value) => setValue('bedrooms', value)}
                      options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                      isOpen={bedroomDropdownOpen}
                      setIsOpen={setBedroomDropdownOpen}
                    />
                    <CustomDropdown
                      label="Bathrooms"
                      value={watchedValues.bathrooms}
                      onChange={(value) => setValue('bathrooms', value)}
                      options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                      isOpen={bathroomDropdownOpen}
                      setIsOpen={setBathroomDropdownOpen}
                    />
                    <CustomDropdown
                      label="Kitchens"
                      value={watchedValues.kitchens}
                      onChange={(value) => setValue('kitchens', value)}
                      options={[0, 1, 2, 3, 4, 5]}
                      isOpen={kitchenDropdownOpen}
                      setIsOpen={setKitchenDropdownOpen}
                    />
                    <CustomDropdown
                      label="Living Rooms"
                      value={watchedValues.livingrooms}
                      onChange={(value) => setValue('livingrooms', value)}
                      options={[0, 1, 2, 3, 4, 5]}
                      isOpen={livingroomDropdownOpen}
                      setIsOpen={setLivingroomDropdownOpen}
                    />
                  </div>
                )}

                {/* Validation message for non-custom services */}
                {watchedValues.serviceType !== 'custom_cleaning' && watchedValues.serviceType !== 'spring_cleaning' && 
                 watchedValues.bedrooms === 0 && watchedValues.bathrooms === 0 && watchedValues.kitchens === 0 && watchedValues.livingrooms === 0 && (
                  <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                    <p className="text-red-600 text-sm">
                      For this service type, at least one room must be selected.
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
                      className="w-4 h-4 text-[#059669] border-gray-300 rounded accent-[#059669]"
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
                      className="w-4 h-4 text-[#059669] border-gray-300 rounded accent-[#059669]"
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
                  {watchedValues.serviceType === 'regular_cleaning' && "Customize your regular cleaning at checkout:"}
                  {watchedValues.serviceType === 'end_of_lease' && "Enhance your bond clean with these additional services:"}
                  {watchedValues.serviceType === 'spring_cleaning' && "Customize your spring clean at checkout:"}
                  {watchedValues.serviceType === 'custom_cleaning' && "Select any additional services you'd like to include:"}
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {currentServiceExtras.map((extra) => (
                    <div key={extra.id}>
                      <label className="cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedExtras.includes(extra.id)}
                          onChange={() => handleExtraToggle(extra.id)}
                          className="hidden"
                        />
                        <div className={`p-4 border-2 rounded-lg transition-all duration-200 ${selectedExtras.includes(extra.id)
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
                              {extra.id === 'carpet_steam' && selectedExtras.includes(extra.id)
                                ? `$${selectedCarpets === 1 ? 80 : selectedCarpets === 2 ? 150 : 200}`
                                : `$${extra.price}`
                              }
                            </div>
                          </div>
                        </div>
                      </label>
                      
                      {/* Carpet Quantity Selection - Appears directly below carpet add-on */}
                      {extra.id === 'carpet_steam' && 
                       selectedExtras.includes('carpet_steam') && (
                        <div className="mt-4 p-6 bg-emerald-50 rounded-lg border border-emerald-200">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Carpet Steam Cleaning Details
                          </h3>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            How many carpets would you like cleaned?
                          </label>
                          <div className="relative mb-4">
                            <select
                              value={selectedCarpets}
                              onChange={(e) => setSelectedCarpets(Number(e.target.value))}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200 bg-white"
                            >
                              <option value={1}>1 carpet</option>
                              <option value={2}>2 carpets</option>
                              <option value={3}>3 carpets</option>
                              <option value={4}>4 carpets</option>
                              <option value={5}>5 carpets</option>
                            </select>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            Carpet Steam Cleaning: 1 carpet - $80, 2 carpets - $150, 3+ carpets - $200
                          </p>
                          <p className="text-sm font-semibold text-emerald-600">
                            {selectedCarpets} carpet{selectedCarpets > 1 ? 's' : ''}: Your rate is ${selectedCarpets === 1 ? 80 : selectedCarpets === 2 ? 150 : 200}
                          </p>
                        </div>
                      )}
                      
                      {/* Carpet Quantity Selection for Custom Cleaning */}
                      {extra.id === 'carpet_steam_custom' && 
                       selectedExtras.includes('carpet_steam_custom') && (
                        <div className="mt-4 p-6 bg-emerald-50 rounded-lg border border-emerald-200">
                          <h3 className="text-lg font-semibold text-gray-900 mb-4">
                            Carpet Steam Cleaning Details
                          </h3>
                          <label className="block text-sm font-medium text-gray-700 mb-2">
                            How many carpets would you like cleaned?
                          </label>
                          <div className="relative mb-4">
                            <select
                              value={selectedCarpets}
                              onChange={(e) => setSelectedCarpets(Number(e.target.value))}
                              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200 bg-white"
                            >
                              <option value={1}>1 carpet</option>
                              <option value={2}>2 carpets</option>
                              <option value={3}>3 carpets</option>
                              <option value={4}>4 carpets</option>
                              <option value={5}>5 carpets</option>
                            </select>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">
                            Carpet Steam Cleaning: 1 carpet - $80, 2 carpets - $150, 3+ carpets - $200
                          </p>
                          <p className="text-sm font-semibold text-emerald-600">
                            {selectedCarpets} carpet{selectedCarpets > 1 ? 's' : ''}: Your rate is ${selectedCarpets === 1 ? 80 : selectedCarpets === 2 ? 150 : 200}
                          </p>
                        </div>
                      )}
                    </div>
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
                      {...register('firstName')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200"
                      placeholder="Enter your first name"
                    />
                    {errors.firstName && touchedFields.firstName && (
                      <p className="mt-1 text-red-600 text-sm">{errors.firstName.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Last Name
                    </label>
                    <input
                      type="text"
                      {...register('lastName')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200"
                      placeholder="Enter your last name"
                    />
                    {errors.lastName && touchedFields.lastName && (
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
                      {...register('email')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200"
                      placeholder="your.email@example.com"
                    />
                    {errors.email && touchedFields.email && (
                      <p className="mt-1 text-red-600 text-sm">{errors.email.message}</p>
                    )}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone
                    </label>
                    <input
                      type="tel"
                      {...register('phone')}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200"
                      placeholder="0412 345 678"
                    />
                    {errors.phone && touchedFields.phone && (
                      <p className="mt-1 text-red-600 text-sm">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Property Address
                  </label>
                  <input
                    type="text"
                    {...register('address')}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200"
                    placeholder="Enter your full address (e.g., 123 Collins Street, Melbourne VIC 3000)"
                  />
                  {errors.address && touchedFields.address && (
                    <p className="mt-1 text-red-600 text-sm">{errors.address.message}</p>
                  )}
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
                {watchedValues.serviceType && (
                  <div className="text-sm text-gray-600 mb-2">
                    Estimated Price
                  </div>
                )}
                {watchedValues.serviceType && (
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
                    className={`btn-primary flex items-center ${
                      currentStep === 2 && postalCodeValid !== true 
                        ? 'opacity-50 cursor-not-allowed' 
                        : ''
                    }`}
                  >
                    Next
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </motion.button>
                ) : (
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    disabled={submitting}
                    className={`btn-primary flex items-center ${(!isValid || submitting) ? 'opacity-50 cursor-not-allowed' : ''}`}
                  >
                    {submitting ? 'Submitting…' : 'Submit Request'}
                    <CheckCircle className="w-4 h-4 ml-2" />
                  </motion.button>
                )}
              </div>
            </div>
          </div>
        </form>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: '100%' }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Book;