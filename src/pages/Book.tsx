import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useEffect } from "react";
import { Snackbar, Alert } from "@mui/material";
import {
  CheckCircle,
  ArrowRight,
  ArrowLeft,
  MapPin,
  Home as HomeIcon,
  Calendar,
  User,
  PawPrint,
  Car,
  Sparkles,
  Flame,
  Layers,
  Bed,
  Shirt,
  Microwave,
  Square,
  ChevronDown,
  Sofa,
  Building2,
  Star as Stairs,
} from "lucide-react";
import postalCodes from "../data/postalcode.json";
import pricing from "../data/pricing.json";
import extras from "../data/extras.json";
import AddonCard from "../components/booking/AddonCard";
import { track, trackCustom } from "../lib/metaPixel";
import { getAttribution, getMetaCookies } from "../lib/utm";

// Import service-specific extras
const regularCleaningExtras = [
  {
    id: "interior_exterior_window",
    name: "Interior & Exterior Window",
    price: 45,
    icon: "Window",
    description: "Complete window cleaning inside and out",
  },
  {
    id: "fridge_cleanout",
    name: "Fridge Cleanout",
    price: 40,
    icon: "Microwave",
    description: "Deep clean and organize your refrigerator",
  },
  {
    id: "bbq_oven_deep",
    name: "BBQ & Oven Deep Cleaning",
    price: 120,
    icon: "Flame",
    description: "Professional deep cleaning for BBQ and oven",
  },
  {
    id: "gas_stove_rangehood",
    name: "Gas Stove Top & Rangehood",
    price: 60,
    icon: "Layers",
    description: "Thorough cleaning of gas appliances",
  },
  {
    id: "organizing",
    name: "Organizing",
    price: 50,
    icon: "Square",
    description: "Professional organizing services",
  },
  {
    id: "deep_clean_addon",
    name: "Deep Clean Add-on",
    price: 80,
    icon: "Sparkles",
    description: "Extra deep cleaning attention",
  },
];

const endOfLeaseExtras = [
  {
    id: "carpet_steam",
    name: "Carpet Steam Cleaning",
    price: 80,
    icon: "Layers",
    description: "Professional carpet deep cleaning",
  },
  {
    id: "balcony_garage",
    name: "Balcony/Garage Cleaning",
    price: 60,
    icon: "Building",
    description: "Additional outdoor space cleaning",
  },
  {
    id: "exterior_window",
    name: "Exterior Window Cleaning",
    price: 50,
    icon: "Window",
    description: "Outside window cleaning service",
  },
  {
    id: "inside_fridge",
    name: "Inside Fridge Cleaning",
    price: 50,
    icon: "Microwave",
    description: "Complete refrigerator interior cleaning",
  },
  {
    id: "washing_machine",
    name: "Inside Washing Machine Cleaning",
    price: 35,
    icon: "Layers",
    description: "Deep clean washing machine interior",
  },
  {
    id: "dishwasher_cleaning",
    name: "Inside Dishwasher Cleaning",
    price: 35,
    icon: "ScanLine",
    description: "Deep clean dishwasher interior",
  },
  {
    id: "dryer_cleaning",
    name: "Inside Dryer Cleaning",
    price: 35,
    icon: "Flame",
    description: "Professional dryer interior cleaning",
  },
  {
    id: "upholstery_clean",
    name: "Upholstery Cleaning",
    price: 60,
    icon: "Sofa",
    description: "Sofa and furniture fabric cleaning",
  },
  {
    id: "wall_spot",
    name: "Wall Spot Cleaning",
    price: 30,
    icon: "Layers",
    description: "Remove marks and spots from walls",
  },
  {
    id: "blind_cleaning",
    name: "Blind Cleaning",
    price: 25,
    icon: "Window",
    description: "Professional blind cleaning service",
  },
  {
    id: "flight_stairs",
    name: "Flight of Stairs",
    price: 35,
    icon: "Stairs",
    description: "Complete staircase cleaning",
  },
];

const springCleaningExtras = [
  {
    id: "oven_deep_clean",
    name: "Oven Deep Clean",
    price: 70,
    icon: "Flame",
    description: "Complete oven degreasing and sanitization",
  },
  {
    id: "carpet_steam_clean",
    name: "Carpet Steam Clean",
    price: 80,
    icon: "Layers",
    description: "Professional carpet deep cleaning",
  },
  {
    id: "upholstery_care",
    name: "Upholstery Care",
    price: 60,
    icon: "Sofa",
    description: "Sofa and furniture fabric cleaning",
  },
  {
    id: "mattress_cleaning",
    name: "Mattress Cleaning",
    price: 50,
    icon: "Bed",
    description: "Deep mattress cleaning and sanitization",
  },
  {
    id: "window_cleaning_spring",
    name: "Window Cleaning",
    price: 45,
    icon: "Window",
    description: "Internal window cleaning and polishing",
  },
  {
    id: "inside_fridge_spring",
    name: "Inside Fridge Clean",
    price: 40,
    icon: "Microwave",
    description: "Complete refrigerator cleaning",
  },
  {
    id: "gas_stove_spring",
    name: "Gas Stove Tops & Rangehoods",
    price: 60,
    icon: "Flame",
    description: "Professional appliance cleaning",
  },
  {
    id: "blinds_cleaning_spring",
    name: "Blinds Cleaning",
    price: 25,
    icon: "Window",
    description: "Professional blind cleaning",
  },
  {
    id: "wall_spot_spring",
    name: "Wall Spot Cleaning",
    price: 30,
    icon: "Layers",
    description: "Remove wall marks and spots",
  },
];

const customCleaningExtras = [
  {
    id: "oven_deep_clean_custom",
    name: "Oven Deep Clean",
    price: 70,
    icon: "Flame",
    description: "Complete oven degreasing and sanitization",
  },
  {
    id: "carpet_steam_custom",
    name: "Carpet Steam Cleaning",
    price: 80,
    icon: "Layers",
    description: "Professional carpet deep cleaning",
  },
  {
    id: "upholstery_custom",
    name: "Upholstery Cleaning",
    price: 60,
    icon: "Sofa",
    description: "Sofa and furniture fabric cleaning",
  },
  {
    id: "window_cleaning_custom",
    name: "Window Cleaning",
    price: 45,
    icon: "Window",
    description: "Internal window cleaning and polishing",
  },
  {
    id: "bbq_cleaning_custom",
    name: "BBQ Deep Clean",
    price: 65,
    icon: "Flame",
    description: "Complete BBQ restoration and cleaning",
  },
  {
    id: "appliance_clean_custom",
    name: "Appliance Cleaning",
    price: 60,
    icon: "Microwave",
    description: "Microwave, fridge and dishwasher cleaning",
  },
  {
    id: "staircase_with_carpet",
    name: "Staircase with Carpet",
    price: 35,
    icon: "Stairs",
    description: "Complete staircase cleaning including carpet",
  },
  {
    id: "staircase_without_carpet",
    name: "Staircase without Carpet",
    price: 20,
    icon: "Stairs",
    description: "Staircase cleaning for hard surfaces only",
  },
  {
    id: "commercial_specs_custom",
    name: "Commercial Specs",
    price: 120,
    icon: "Building2",
    description: "Specialized commercial space cleaning",
  },
];
const WEB_APP_URL = `https://script.google.com/macros/s/AKfycbw_FY321a0qBIzyRMtTztQX2EoUMn_w_0yJrkPhpZ3BRuawirJe6HbOimwuGXVwB0SZ/exec`;

// Email configuration
const ENQUIRY_EMAIL = 'wipelycleaning@gmail.com';

// Maps the ?service= URL query @param (set by every service page's "Book Now"
// link) to the internal serviceType used throughout the booking form/pricing
// logic, plus (for the six specialised Custom Cleaning services, which the
// pricing model represents as add-ons within `custom_cleaning` rather than
// standalone service types) the specific extra to pre-select so the customer
// doesn't have to find and re-select it themselves.
const SERVICE_PARAM_CONFIG: Record<
  string,
  { serviceType: string; extraId?: string }
> = {
  "regular-house-cleaning": { serviceType: "regular_cleaning" },
  "end-of-lease-cleaning": { serviceType: "end_of_lease" },
  "hourly-spring-cleaning": { serviceType: "spring_cleaning" },
  "custom-cleaning": { serviceType: "custom_cleaning" },
  "carpet-cleaning": {
    serviceType: "custom_cleaning",
    extraId: "carpet_steam_custom",
  },
  "upholstery-cleaning": {
    serviceType: "custom_cleaning",
    extraId: "upholstery_custom",
  },
  "oven-cleaning": {
    serviceType: "custom_cleaning",
    extraId: "oven_deep_clean_custom",
  },
  "bbq-cleaning": {
    serviceType: "custom_cleaning",
    extraId: "bbq_cleaning_custom",
  },
  "staircase-cleaning": {
    serviceType: "custom_cleaning",
    extraId: "staircase_without_carpet",
  },
  "commercial-cleaning": {
    serviceType: "custom_cleaning",
    extraId: "commercial_specs_custom",
  },
};

interface FormData {
  serviceType: string;
  frequency: string;
  bedrooms: number;
  bathrooms: number;
  kitchens: number;
  livingrooms: number;
  postalCode: string;
  preferredDate: string;
  preferredTime: string;
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
  serviceType: yup.string().required("Service type is required"),
  frequency: yup.string().required("Frequency is required"),
  bedrooms: yup
    .number()
    .min(0, "Bedrooms must be 0 or more")
    .required("Bedrooms is required"),
  bathrooms: yup
    .number()
    .min(0, "Bathrooms must be 0 or more")
    .required("Bathrooms is required"),
  kitchens: yup
    .number()
    .min(0, "Kitchens must be 0 or more")
    .required("Kitchens is required"),
  livingrooms: yup
    .number()
    .min(0, "Living rooms must be 0 or more")
    .required("Living rooms is required"),
  postalCode: yup.string().required("Postal code is required"),
  preferredDate: yup.string().required("Please select a preferred date"),
  preferredTime: yup.string().required("Please select a preferred time"),
  firstName: yup
    .string()
    .required("First name is required")
    .min(2, "First name must be at least 2 characters"),
  lastName: yup
    .string()
    .required("Last name is required")
    .min(2, "Last name must be at least 2 characters"),
  email: yup
    .string()
    .required("Email is required")
    .email("Please enter a valid email address"),
  phone: yup
    .string()
    .required("Phone number is required")
    .matches(
      /^(\+61|0)[2-9]\d{8}$/,
      "Please enter a valid Australian phone number (e.g., 0412345678 or +61412345678)",
    ),
  address: yup
    .string()
    .required("Address is required")
    .min(10, "Please enter a complete address"),
  hasPets: yup.boolean(),
  hasParking: yup.boolean(),
  notes: yup.string(),
  extras: yup.array().of(yup.string()),
});

const Book: React.FC = () => {
  const [searchParams] = useSearchParams();
  // undefined for a missing/unrecognized param -> falls back to normal (all-services) behaviour
  const servicePreset = SERVICE_PARAM_CONFIG[searchParams.get("service") || ""];
  const preselectedServiceType = servicePreset?.serviceType;
  const preselectedExtraId = servicePreset?.extraId;

  const [currentStep, setCurrentStep] = useState(1);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [selectedExtras, setSelectedExtras] = useState<string[]>(
    preselectedExtraId ? [preselectedExtraId] : [],
  );
  const [postalCodeValid, setPostalCodeValid] = useState<boolean | null>(null);
  const [bedroomDropdownOpen, setBedroomDropdownOpen] = useState(false);
  const [bathroomDropdownOpen, setBathroomDropdownOpen] = useState(false);
  const [kitchenDropdownOpen, setKitchenDropdownOpen] = useState(false);
  const [livingroomDropdownOpen, setLivingroomDropdownOpen] = useState(false);
  const [carpetDropdownOpen, setCarpetDropdownOpen] = useState(false);
  const [showCarpetDetails, setShowCarpetDetails] = useState(
    preselectedExtraId === "carpet_steam_custom",
  );
  const [submitting, setSubmitting] = useState(false);
  const [snackbarOpen, setSnackbarOpen] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState("");
  const [snackbarSeverity, setSnackbarSeverity] = useState<"success" | "error">(
    "success",
  );
  const [selectedHours, setSelectedHours] = useState(2); // Default to 2 hours
  const [selectedCarpets, setSelectedCarpets] = useState(1); // Default to 1 carpet
  const [selectedBalconyType, setSelectedBalconyType] = useState<1 | 2>(1);

  const [showBalconyDetails, setShowBalconyDetails] = useState(false);

  const [showWindowDetails, setShowWindowDetails] = useState(false);
  const [selectedWindows, setSelectedWindows] = useState(1);
  const [windowDropdownOpen, setWindowDropdownOpen] = useState(false);

  const [showUpholsteryDetails, setShowUpholsteryDetails] = useState(false);
  const [selectedSofaType, setSelectedSofaType] = useState<2 | 3>(2);

  const [showWallSpotDetails, setShowWallSpotDetails] = useState(false);
  const [selectedWallSpot, setSelectedWallSpot] = useState("per_wall");

  const [showBlindDetails, setShowBlindDetails] = useState(false);
  const [selectedBlinds, setSelectedBlinds] = useState(1);
  const [blindDropdownOpen, setBlindDropdownOpen] = useState(false);

  const [showStairsDetails, setShowStairsDetails] = useState(false);
  const [selectedStairsType, setSelectedStairsType] = useState<1 | 2>(1);

  const getCarpetPrice = (carpets: number) => {
    return 80 + Math.max(0, carpets - 1) * 50;
  };

  const getBalconyPrice = () => {
    return selectedBalconyType === 1 ? 60 : 80;
  };

  const getWindowPrice = (windows: number) => {
    return windows * 8;
  };
  const getUpholsteryPrice = () => {
    return selectedSofaType === 2 ? 60 : 80;
  };
  const getWallSpotPrice = () => {
    switch (selectedWallSpot) {
      case "per_wall":
        return 25;
      case "two_walls":
        return 50;
      case "one_bedroom":
        return 120;
      case "two_bedrooms":
        return 200;
      case "three_bedrooms":
        return 250;
      case "four_bedrooms":
        return 300;
      default:
        return 25;
    }
  };

  const getBlindPrice = (blinds: number) => {
    if (blinds === 1) return 25;
    if (blinds === 2) return 40;

    return 60 + (blinds - 3) * 20;
  };

  const getStairsPrice = () => {
    return selectedStairsType === 1 ? 35 : 60;
  };

  const {
    register,
    handleSubmit,
    watch,
    setValue,
    trigger,
    formState: { errors, touchedFields, isValid },
  } = useForm<FormData>({
    resolver: yupResolver(validationSchema),
    mode: "onBlur",
    defaultValues: {
      serviceType: preselectedServiceType || "regular_cleaning",
      frequency: "bi-weekly", // This will be overridden for non-regular services
      bedrooms: 0,
      bathrooms: 0,
      kitchens: 0,
      livingrooms: 0,
      hasPets: false,
      hasParking: true,
      preferredDate: "",
      preferredTime: "",
      extras: preselectedExtraId ? [preselectedExtraId] : [],
    },
  });

  const watchedValues = watch();

  // Handle Custom Cleaning selection
  useEffect(() => {
    if (watchedValues.serviceType === "custom_cleaning") {
      setValue("bedrooms", 0);
      setValue("bathrooms", 0);
      setValue("kitchens", 0);
      setValue("livingrooms", 0);
    }

    // Set frequency based on service type
    if (watchedValues.serviceType === "regular_cleaning") {
      setValue("frequency", "bi-weekly");
    } else {
      // For all other service types, set frequency to one-time
      setValue("frequency", "one-time");
    }
  }, [watchedValues.serviceType, setValue]);

  const steps = [
    { number: 1, title: "Service", icon: HomeIcon },
    { number: 2, title: "Property", icon: MapPin },
    { number: 3, title: "Date & Time", icon: Calendar },
    { number: 4, title: "Extras", icon: Sparkles },
    { number: 5, title: "Details", icon: User },
    { number: 6, title: "Review", icon: CheckCircle },
  ];
  const TOTAL_STEPS = steps.length;

  const allServiceTypes = [
    {
      value: "regular_cleaning",
      label: "Regular House Cleaning",
      icon: HomeIcon,
    },
    {
      value: "end_of_lease",
      label: "End of Lease Cleaning",
      icon: CheckCircle,
    },
    {
      value: "spring_cleaning",
      label: "One-off Spring Cleaning",
      icon: Sparkles,
    },
    { value: "custom_cleaning", label: "Custom Cleaning", icon: Square },
  ];

  // Arriving via a service-page "Book Now" link (?service=...) locks the booking
  // page to that single service instead of showing all 4 options.
  const serviceTypes = preselectedServiceType
    ? allServiceTypes.filter(
        (service) => service.value === preselectedServiceType,
      )
    : allServiceTypes;

  const frequencyOptions = [
    { value: "weekly", label: "Weekly", popular: false },
    { value: "bi-weekly", label: "Bi-weekly", popular: true },
    { value: "monthly", label: "Monthly", popular: false },
  ];

  const extrasWithIcons = extras.map((extra) => ({
    ...extra,
    iconComponent: getIconComponent(extra.icon),
  }));

  // Get service-specific extras
  const getServiceExtras = () => {
    switch (watchedValues.serviceType) {
      case "regular_cleaning":
        return regularCleaningExtras.map((extra) => ({
          ...extra,
          iconComponent: getIconComponent(extra.icon),
        }));
      case "end_of_lease":
        return endOfLeaseExtras.map((extra) => ({
          ...extra,
          iconComponent: getIconComponent(extra.icon),
        }));
      case "spring_cleaning":
        return springCleaningExtras.map((extra) => ({
          ...extra,
          iconComponent: getIconComponent(extra.icon),
        }));
      case "custom_cleaning":
        return customCleaningExtras.map((extra) => ({
          ...extra,
          iconComponent: getIconComponent(extra.icon),
        }));
      default:
        return extrasWithIcons;
    }
  };

  const currentServiceExtras = getServiceExtras();

  function getIconComponent(iconName: string) {
    const iconMap: {
      [key: string]: React.ComponentType<{ className?: string }>;
    } = {
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
      Square: Square,
    };
    return iconMap[iconName] || Sparkles;
  }
  const getExtraPrice = (extraId: string, defaultPrice: number) => {
    switch (extraId) {
      case "carpet_steam":
        return getCarpetPrice(selectedCarpets);

      case "balcony_garage":
        return getBalconyPrice();

      case "exterior_window":
        return getWindowPrice(selectedWindows);

      case "upholstery_clean":
        return getUpholsteryPrice();

      case "wall_spot":
        return getWallSpotPrice();

      case "blind_cleaning":
        return getBlindPrice(selectedBlinds);

      case "flight_stairs":
        return getStairsPrice();

      default:
        return defaultPrice;
    }
  };

  const CustomDropdown = ({
    label,
    value,
    onChange,
    options,
    isOpen,
    setIsOpen,
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
            <ChevronDown
              className={`w-5 h-5 text-gray-400 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            />
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
                  className={`w-full px-3 py-2 text-left hover:bg-[#059669] hover:text-white transition-colors duration-200 ${
                    value === option
                      ? "bg-[#059669] text-white"
                      : "text-gray-900"
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
  const getPropertyPricing = () => {
    const serviceType = watchedValues.serviceType as keyof typeof pricing;
    const servicePricing = pricing[serviceType];

    if (!servicePricing) {
      return {
        bedrooms: 0,
        bathrooms: 0,
        kitchens: 0,
        livingrooms: 0,
      };
    }

    return {
      bedrooms: servicePricing.per_bedroom || 0,
      bathrooms: servicePricing.per_bathroom || 0,
      kitchens: servicePricing.per_kitchen || 0,
      livingrooms: servicePricing.per_livingroom || 0,
    };
  };
  const propertyPricing = getPropertyPricing();
  const calculatePrice = () => {
    const serviceType = watchedValues.serviceType as keyof typeof pricing;
    const bedrooms = Number(watchedValues.bedrooms) || 0;
    const bathrooms = Number(watchedValues.bathrooms) || 0;
    const kitchens = Number(watchedValues.kitchens) || 0;
    const livingrooms = Number(watchedValues.livingrooms) || 0;

    // Special pricing for spring cleaning (hourly)
    if (serviceType === "spring_cleaning") {
      // All hours are $50 each
      const basePrice = selectedHours * 50;

      // Add extras price
      const extrasPrice = selectedExtras.reduce((total, extraId) => {
        const extra = currentServiceExtras.find((e) => e.id === extraId);
        return total + (extra?.price || 0);
      }, 0);

      return basePrice + extrasPrice;
    }

    // Special pricing for custom cleaning with carpet steam cleaning
    if (serviceType === "custom_cleaning") {
      const servicePricing = pricing[serviceType];
      if (!servicePricing) return 0;

      let basePrice = servicePricing.base_price;
      basePrice +=
        bedrooms * servicePricing.per_bedroom +
        bathrooms * servicePricing.per_bathroom +
        kitchens * servicePricing.per_kitchen +
        livingrooms * servicePricing.per_livingroom;

      // Calculate extras price with special carpet pricing
      const extrasPrice = selectedExtras.reduce((total, extraId) => {
        const extra = currentServiceExtras.find((e) => e.id === extraId);
        if (extraId === "carpet_steam" || extraId === "carpet_steam_custom") {
          // Custom carpet pricing: 1 carpet = $80, 2 carpets = $150, 3+ carpets = $200
          return total + getCarpetPrice(selectedCarpets);
        }
        if (extraId === "balcony_garage") {
          total += getBalconyPrice();
        }
        if (extraId === "exterior_window") {
          total += getWindowPrice(selectedWindows);
        }
        if (extraId === "wall_spot") {
          total += getWallSpotPrice();
        }
        if (extraId === "blind_cleaning") {
          total += getBlindPrice(selectedBlinds);
        }
        if (extraId === "flight_stairs") {
          total += getStairsPrice();
        }
        return total + (extra?.price || 0);
      }, 0);

      return basePrice + extrasPrice;
    }

    const servicePricing = pricing[serviceType];
    if (!servicePricing) return 0;

    // Base price calculation for other services
    let basePrice = servicePricing.base_price;
    basePrice +=
      bedrooms * servicePricing.per_bedroom +
      bathrooms * servicePricing.per_bathroom +
      kitchens * servicePricing.per_kitchen +
      livingrooms * servicePricing.per_livingroom;

    // Add extras price
    const extrasPrice = selectedExtras.reduce((total, extraId) => {
      const extra = currentServiceExtras.find((e) => e.id === extraId);
      return total + (extra?.price || 0);
    }, 0);

    return basePrice + extrasPrice;
  };

  // Shared params for every Meta Pixel event fired during the booking flow,
  // so InitiateCheckout / the review step / the final conversion all report
  // the same service name, price and currency consistently.
  const getBookingEventParams = () => {
    const label =
      allServiceTypes.find((s) => s.value === watchedValues.serviceType)?.label ||
      watchedValues.serviceType;
    return {
      content_name: label,
      content_ids: [watchedValues.serviceType],
      content_category: 'cleaning_service',
      content_type: 'product',
      value: calculatePrice(),
      currency: 'AUD',
      num_items: 1,
    };
  };

  const handleExtraToggle = (extraId: string) => {
    // Carpet
    if (extraId === "carpet_steam" || extraId === "carpet_steam_custom") {
      if (selectedExtras.includes(extraId)) {
        setShowCarpetDetails((prev) => !prev);
        return;
      }

      const newExtras = [...selectedExtras, extraId];
      setSelectedExtras(newExtras);
      setValue("extras", newExtras);
      setShowCarpetDetails(true);
      return;
    }

    // Balcony
    if (extraId === "balcony_garage") {
      if (selectedExtras.includes(extraId)) {
        setShowBalconyDetails((prev) => !prev);
        return;
      }

      const newExtras = [...selectedExtras, extraId];
      setSelectedExtras(newExtras);
      setValue("extras", newExtras);

      setShowBalconyDetails(true);
      return;
    }
    if (extraId === "exterior_window") {
      if (selectedExtras.includes(extraId)) {
        setShowWindowDetails((prev) => !prev);
        return;
      }

      const newExtras = [...selectedExtras, extraId];
      setSelectedExtras(newExtras);
      setValue("extras", newExtras);

      setShowWindowDetails(true);
      return;
    }
    if (extraId === "upholstery_clean") {
      if (selectedExtras.includes(extraId)) {
        setShowUpholsteryDetails((prev) => !prev);
        return;
      }

      const newExtras = [...selectedExtras, extraId];
      setSelectedExtras(newExtras);
      setValue("extras", newExtras);

      setShowUpholsteryDetails(true);
      return;
    }
    if (extraId === "wall_spot") {
      if (selectedExtras.includes(extraId)) {
        setShowWallSpotDetails((prev) => !prev);
        return;
      }

      const newExtras = [...selectedExtras, extraId];
      setSelectedExtras(newExtras);
      setValue("extras", newExtras);

      setShowWallSpotDetails(true);
      return;
    }
    if (extraId === "blind_cleaning") {
      if (selectedExtras.includes(extraId)) {
        setShowBlindDetails((prev) => !prev);
        return;
      }

      const newExtras = [...selectedExtras, extraId];
      setSelectedExtras(newExtras);
      setValue("extras", newExtras);

      setShowBlindDetails(true);
      return;
    }
    if (extraId === "flight_stairs") {
      if (selectedExtras.includes(extraId)) {
        setShowStairsDetails((prev) => !prev);
        return;
      }

      const newExtras = [...selectedExtras, extraId];
      setSelectedExtras(newExtras);
      setValue("extras", newExtras);

      setShowStairsDetails(true);
      return;
    }
    // Other add-ons
    const newExtras = selectedExtras.includes(extraId)
      ? selectedExtras.filter((id) => id !== extraId)
      : [...selectedExtras, extraId];

    setSelectedExtras(newExtras);
    setValue("extras", newExtras);
  };

  const onSubmit = async (data: FormData) => {
    setSubmitting(true);
    setSnackbarOpen(false); // Close any existing snackbar

    const attribution = getAttribution();
    const { fbc, fbp } = getMetaCookies();

    const formData = {
      ...data,
      // Address fields - multiple formats for compatibility
      address: data.address || "",
      propertyAddress: data.address || "",
      serviceLocation: data.address || "",
      customerAddress: data.address || "",
      cleaningAddress: data.address || "",
      extras: selectedExtras,
      selectedExtras: selectedExtras,
      carpetQuantity: selectedCarpets,
      springCleaningHours: selectedHours,
      estimatedPrice: calculatePrice(),
      submittedAt: new Date().toISOString(),
      source: "wipely-booking-form",
      enquiryEmail: ENQUIRY_EMAIL,
      // Additional debugging fields
      formType: "booking-request",
      addressProvided: data.address ? "yes" : "no",
    };

    console.log("=== FORM SUBMISSION DEBUG ===");
    console.log("Raw form data:", data);
    console.log("Address value:", data.address);
    console.log("Complete form data being submitted:", formData);
    console.log("=== END DEBUG ===");

    try {
      const fd = new FormData();
      Object.entries(formData).forEach(([k, v]) => {
        if (Array.isArray(v)) {
          fd.append(k, JSON.stringify(v));
        } else {
          fd.append(k, String(v ?? ""));
        }
      });

      console.log("=== FORMDATA ENTRIES ===");
      for (const [key, value] of fd.entries()) {
        console.log(`${key}: ${value}`);
      }
      console.log("=== END FORMDATA ===");

      const res = await fetch(WEB_APP_URL, {
        method: "POST",
        body: fd,
      });

      const response = await res.json();
      console.log("=== SERVER RESPONSE ===");
      console.log("Response:", response);
      console.log("=== END RESPONSE ===");
      if (response.success) {
        // Primary conversion: Schedule is Meta's standard event for "a person
        // booked an appointment for a service" - it's recognised by Ads
        // Manager immediately, with value/currency for ROAS optimisation.
        // CompleteBooking is a matching custom event so a per-service Custom
        // Conversion can be built in Events Manager if needed.
        track('Schedule', getBookingEventParams());
        trackCustom('CompleteBooking', getBookingEventParams());
        setIsSubmitted(true);
      } else {
        setSnackbarSeverity("error");
        setSnackbarMessage(response.error || "Submission failed");
        setSnackbarOpen(true);
      }
    } catch (error) {
      console.error("Submission error:", error);
      setSnackbarSeverity("error");
      setSnackbarMessage(
        error instanceof Error
          ? error.message
          : "There was a problem sending your inquiry. Please try again.",
      );
      setSnackbarOpen(true);
    } finally {
      setSubmitting(false);
    }
  };

  const nextStep = async () => {
    if (currentStep >= TOTAL_STEPS) return;

    // Step 2 (Property): require a valid postal code, and at least one room
    // selected for service types that are billed per-room.
    if (currentStep === 2) {
      if (!watchedValues.postalCode || postalCodeValid !== true) {
        return;
      }
      if (
        watchedValues.serviceType !== "custom_cleaning" &&
        watchedValues.serviceType !== "spring_cleaning" &&
        watchedValues.bedrooms === 0 &&
        watchedValues.bathrooms === 0
      ) {
        alert(
          "For this service type, at least one bedroom or bathroom must be selected.",
        );
        return;
      }
    }

    // Step 3 (Date & Time): require both fields before continuing.
    if (currentStep === 3) {
      const valid = await trigger(["preferredDate", "preferredTime"]);
      if (!valid) return;
    }

    // Step 5 (Details): require valid contact details before the review step.
    if (currentStep === 5) {
      const valid = await trigger([
        "firstName",
        "lastName",
        "email",
        "phone",
        "address",
      ]);
      if (!valid) return;
    }

    // Meta Pixel: mark booking-funnel progress once each step is confirmed
    // (not on every field change), so events fire once per booking attempt.
    if (currentStep === 1) {
      trackCustom('SelectBookingService', getBookingEventParams());
    }
    if (currentStep === 4) {
      track('InitiateCheckout', getBookingEventParams());
    }
    if (currentStep === 5) {
      trackCustom('ReachedBookingReview', getBookingEventParams());
    }

    setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const TIME_SLOT_LABELS: Record<string, string> = {
    morning: "Morning (8am – 11am)",
    midday: "Midday (11am – 2pm)",
    afternoon: "Afternoon (2pm – 5pm)",
  };

  const renderBookingSummary = () => (
    <>
      {/* Service */}
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
          Service
        </p>
        <p className="font-semibold text-gray-900">
          {serviceTypes.find((s) => s.value === watchedValues.serviceType)
            ?.label ||
            allServiceTypes.find((s) => s.value === watchedValues.serviceType)
              ?.label}
        </p>
      </div>

      <hr />

      {/* Date & Time */}
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500 mb-1">
          Date & Time
        </p>
        {watchedValues.preferredDate && watchedValues.preferredTime ? (
          <>
            <p className="font-semibold text-gray-900">
              {new Date(
                watchedValues.preferredDate + "T00:00:00",
              ).toLocaleDateString("en-AU", {
                weekday: "short",
                day: "numeric",
                month: "short",
                year: "numeric",
              })}
            </p>
            <p className="text-sm text-gray-500">
              {TIME_SLOT_LABELS[watchedValues.preferredTime]}
            </p>
          </>
        ) : (
          <p className="text-sm text-gray-500">Not selected yet</p>
        )}
      </div>

      <hr />

      {/* Property Details */}
      {watchedValues.serviceType !== "spring_cleaning" && (
        <>
          <div>
            <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">
              Property Details
            </p>

            <div className="space-y-3">
              {/* Bedrooms */}
              <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🛏️</div>
                  <div>
                    <p className="font-medium text-gray-900">Bedrooms</p>
                    <p className="text-sm text-gray-500">
                      {Number(watchedValues.bedrooms) || 0} × $
                      {propertyPricing.bedrooms}
                    </p>
                  </div>
                </div>
                <p className="font-bold text-gray-900">
                  $
                  {(Number(watchedValues.bedrooms) || 0) *
                    (propertyPricing.bedrooms || 0)}
                </p>
              </div>

              {/* Bathrooms */}
              <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🛁</div>
                  <div>
                    <p className="font-medium text-gray-900">Bathrooms</p>
                    <p className="text-sm text-gray-500">
                      {Number(watchedValues.bathrooms) || 0} × $
                      {propertyPricing.bathrooms}
                    </p>
                  </div>
                </div>
                <p className="font-bold text-gray-900">
                  $
                  {(Number(watchedValues.bathrooms) || 0) *
                    (propertyPricing.bathrooms || 0)}
                </p>
              </div>

              {/* Kitchen */}
              <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🍳</div>
                  <div>
                    <p className="font-medium text-gray-900">Kitchen</p>
                    <p className="text-sm text-gray-500">
                      {Number(watchedValues.kitchens) || 0} × $
                      {propertyPricing.kitchens}
                    </p>
                  </div>
                </div>
                <p className="font-bold text-gray-900">
                  $
                  {(Number(watchedValues.kitchens) || 0) *
                    (propertyPricing.kitchens || 0)}
                </p>
              </div>

              {/* Living Room */}
              <div className="flex items-center justify-between bg-gray-50 rounded-xl p-4">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🛋️</div>
                  <div>
                    <p className="font-medium text-gray-900">Living Room</p>
                    <p className="text-sm text-gray-500">
                      {Number(watchedValues.livingrooms) || 0} × $
                      {propertyPricing.livingrooms}
                    </p>
                  </div>
                </div>
                <p className="font-bold text-gray-900">
                  $
                  {(Number(watchedValues.livingrooms) || 0) *
                    (propertyPricing.livingrooms || 0)}
                </p>
              </div>
            </div>
          </div>

          <hr />
        </>
      )}

      {/* Add-ons */}
      <div>
        <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">
          Selected Add-ons
        </p>

        {selectedExtras.length === 0 ? (
          <p className="text-sm text-gray-500">No add-ons selected</p>
        ) : (
          currentServiceExtras
            .filter((extra) => selectedExtras.includes(extra.id))
            .map((extra) => (
              <div
                key={extra.id}
                className="flex justify-between items-center py-2 border-b last:border-b-0"
              >
                <span className="text-gray-700">{extra.name}</span>
                <span className="font-semibold text-emerald-600">
                  ${getExtraPrice(extra.id, extra.price)}
                </span>
              </div>
            ))
        )}
      </div>

      <hr />

      {/* Total */}
      <div className="bg-emerald-50 rounded-xl p-5">
        <div className="flex justify-between items-center">
          <span className="font-semibold text-gray-700 text-lg">
            Estimated Total
          </span>
          <span className="text-4xl font-extrabold text-emerald-600">
            ${calculatePrice()}
          </span>
        </div>
        <p className="text-xs text-gray-500 mt-2">
          Final pricing may vary depending on property condition.
        </p>
      </div>

      {/* Features */}
      <div className="space-y-3 text-sm">
        <div className="flex items-center gap-2">
          🛡️ <span>Fully Insured Professionals</span>
        </div>
        <div className="flex items-center gap-2">
          🌱 <span>Eco-Friendly Cleaning Products</span>
        </div>
        <div className="flex items-center gap-2">
          ⭐ <span>100% Satisfaction Guarantee</span>
        </div>
        <div className="flex items-center gap-2">
          💳 <span>No Hidden Charges</span>
        </div>
      </div>
    </>
  );

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
              Thank you for choosing Wipely! We'll contact you within 24 hours
              to confirm your booking and arrange the perfect time for your
              clean.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/")}
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
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Header */}
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="mb-10">
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-700 px-4 py-2 rounded-full text-sm font-semibold mb-4">
              🧹 Melbourne's Trusted Cleaning Service
            </div>

            <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
              Book Your Cleaning
            </h1>

            <p className="mt-4 text-lg text-gray-600">
              Book professional cleaning services in just a few minutes. Fast
              online booking, transparent pricing, and trusted cleaners across
              Melbourne.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mt-6">
              <div className="flex items-center gap-2 bg-white border rounded-full px-4 py-2 shadow-sm">
                ⭐⭐⭐⭐⭐
                <span className="text-sm font-medium">
                  Trusted by Happy Customers
                </span>
              </div>

              <div className="flex items-center gap-2 bg-white border rounded-full px-4 py-2 shadow-sm">
                🛡️
                <span className="text-sm font-medium">Fully Insured</span>
              </div>

              <div className="flex items-center gap-2 bg-white border rounded-full px-4 py-2 shadow-sm">
                🌱
                <span className="text-sm font-medium">
                  Eco-Friendly Products
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Progress Steps */}
        <div className="mb-8 md:mb-12">
          <div className="flex items-center">
            {steps.map((step, index) => (
              <div
                key={step.number}
                className="flex items-center flex-1 last:flex-none"
              >
                <div className="flex items-center">
                  <div
                    className={`flex items-center justify-center w-8 h-8 md:w-12 md:h-12 rounded-full border-2 flex-shrink-0 transition-all duration-300 ${
                      currentStep >= step.number
                        ? "bg-emerald-600 border-emerald-600 text-white"
                        : "bg-white border-gray-300 text-gray-400"
                    }`}
                  >
                    <step.icon className="w-3.5 h-3.5 md:w-5 md:h-5" />
                  </div>
                  <div className="ml-3 hidden md:block">
                    <div
                      className={`text-sm font-medium ${
                        currentStep >= step.number
                          ? "text-emerald-600"
                          : "text-gray-400"
                      }`}
                    >
                      Step {step.number}
                    </div>
                    <div
                      className={`text-xs ${
                        currentStep >= step.number
                          ? "text-gray-900"
                          : "text-gray-400"
                      }`}
                    >
                      {step.title}
                    </div>
                  </div>
                </div>
                {index < steps.length - 1 && (
                  <div
                    className={`flex-1 h-0.5 mx-1.5 md:mx-4 transition-colors duration-300 ${
                      currentStep > step.number
                        ? "bg-emerald-600"
                        : "bg-gray-300"
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <p className="mt-3 text-center text-sm font-medium text-gray-600 md:hidden">
            Step {currentStep} of {TOTAL_STEPS}:{" "}
            <span className="text-emerald-600">
              {steps[currentStep - 1].title}
            </span>
          </p>
        </div>

        {/* Compact mobile total bar - keeps the running price visible while the
            full summary (desktop sidebar) is hidden on small screens */}
        <div className="lg:hidden mb-6 bg-emerald-600 text-white rounded-xl px-5 py-3 flex items-center justify-between shadow-md">
          <span className="text-sm font-medium">Estimated Total</span>
          <span className="text-xl font-bold">${calculatePrice()}</span>
        </div>

        {/* Submission is triggered explicitly by the "Confirm Booking" button's
            onClick (below), never by native form submission - this guarantees
            a stray Enter keypress or the step-navigation "Continue" button can
            never send the booking early. */}
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="grid lg:grid-cols-[1fr_380px] gap-8 items-start">
            <div className="bg-white rounded-2xl shadow-lg p-6 sm:p-8">
              {/* Step 1: Service */}
              {currentStep === 1 && (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    Choose Your Service
                  </h2>
                  <p className="text-gray-500 mb-6">
                    {preselectedServiceType
                      ? "We've pre-selected the service you were viewing."
                      : "Pick the cleaning service you need."}
                  </p>

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
                            {...register("serviceType")}
                            className="hidden"
                          />
                          <div
                            className={`p-4 border-2 rounded-lg transition-all duration-200 ${
                              watchedValues.serviceType === service.value
                                ? "border-emerald-500 bg-emerald-50"
                                : "border-gray-200 hover:border-emerald-300"
                            }`}
                          >
                            <div className="flex items-center space-x-3">
                              <service.icon className="w-5 h-5 text-emerald-600" />
                              <span className="font-medium text-gray-900">
                                {service.label}
                              </span>
                            </div>
                          </div>
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Frequency */}
                  {watchedValues.serviceType === "regular_cleaning" && (
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
                              {...register("frequency")}
                              className="hidden"
                            />
                            <div
                              className={`p-4 border-2 rounded-lg text-center transition-all duration-200 ${
                                watchedValues.frequency === freq.value
                                  ? "border-emerald-500 bg-emerald-50"
                                  : "border-gray-200 hover:border-emerald-300"
                              }`}
                            >
                              <span className="font-medium text-gray-900">
                                {freq.label}
                              </span>
                              {freq.popular && (
                                <span className="block text-xs text-emerald-600 mt-1">
                                  Most Popular
                                </span>
                              )}
                            </div>
                          </label>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Hidden frequency field for non-regular services */}
                  {watchedValues.serviceType !== "regular_cleaning" && (
                    <input
                      type="hidden"
                      {...register("frequency")}
                      value="one-time"
                    />
                  )}

                  {/* Hourly Selection for Spring Cleaning */}
                  {watchedValues.serviceType === "spring_cleaning" && (
                    <div className="mb-6">
                      <label className="block text-sm font-medium text-gray-700 mb-3">
                        How many hours would you like a cleaner?
                      </label>
                      <div className="relative">
                        <select
                          value={selectedHours}
                          onChange={(e) =>
                            setSelectedHours(Number(e.target.value))
                          }
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
                        {selectedHours} hour{selectedHours > 1 ? "s" : ""}: Your
                        rate is ${selectedHours * 50}
                      </p>
                    </div>
                  )}
                </motion.div>
              )}

              {/* Step 2: Property */}
              {currentStep === 2 && (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    Tell Us About Your Property
                  </h2>
                  <p className="text-gray-500 mb-6">
                    Only the details relevant to your selected service are shown
                    below.
                  </p>

                  {/* Bedrooms & Bathrooms - Hidden for Spring Cleaning */}
                  {watchedValues.serviceType !== "spring_cleaning" && (
                    <div className="mb-6">
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                        <CustomDropdown
                          label="Bedrooms"
                          value={watchedValues.bedrooms}
                          onChange={(value) => setValue("bedrooms", value)}
                          options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                          isOpen={bedroomDropdownOpen}
                          setIsOpen={setBedroomDropdownOpen}
                        />
                        <CustomDropdown
                          label="Bathrooms"
                          value={watchedValues.bathrooms}
                          onChange={(value) => setValue("bathrooms", value)}
                          options={[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                          isOpen={bathroomDropdownOpen}
                          setIsOpen={setBathroomDropdownOpen}
                        />
                        <CustomDropdown
                          label="Kitchens"
                          value={watchedValues.kitchens}
                          onChange={(value) => setValue("kitchens", value)}
                          options={[0, 1, 2, 3, 4, 5]}
                          isOpen={kitchenDropdownOpen}
                          setIsOpen={setKitchenDropdownOpen}
                        />
                        <CustomDropdown
                          label="Living Rooms"
                          value={watchedValues.livingrooms}
                          onChange={(value) => setValue("livingrooms", value)}
                          options={[0, 1, 2, 3, 4, 5]}
                          isOpen={livingroomDropdownOpen}
                          setIsOpen={setLivingroomDropdownOpen}
                        />
                      </div>

                      {watchedValues.serviceType !== "custom_cleaning" &&
                        watchedValues.bedrooms === 0 &&
                        watchedValues.bathrooms === 0 &&
                        watchedValues.kitchens === 0 &&
                        watchedValues.livingrooms === 0 && (
                          <div className="mt-4 p-3 bg-red-50 border border-red-200 rounded-lg">
                            <p className="text-red-600 text-sm">
                              For this service type, at least one room must be
                              selected.
                            </p>
                          </div>
                        )}
                    </div>
                  )}

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Postal Code
                    </label>
                    <input
                      type="text"
                      {...register("postalCode", {
                        validate: validatePostalCode,
                      })}
                      onChange={(e) => {
                        setValue("postalCode", e.target.value);
                        if (e.target.value.length === 4) {
                          validatePostalCode(e.target.value);
                        }
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200"
                      placeholder="e.g., 3000"
                    />
                    {postalCodeValid === false && (
                      <p className="mt-2 text-red-600 text-sm">
                        Sorry, we don't service this area yet. We're expanding
                        soon!
                      </p>
                    )}
                    {postalCodeValid === true && (
                      <p className="mt-2 text-emerald-600 text-sm">
                        Great! We service your area.
                      </p>
                    )}
                    {errors.postalCode && (
                      <p className="mt-2 text-red-600 text-sm">
                        {errors.postalCode.message}
                      </p>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <label className="flex items-center space-x-3 cursor-pointer">
                      <input
                        type="checkbox"
                        {...register("hasPets")}
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
                        {...register("hasParking")}
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

              {/* Step 3: Date & Time */}
              {currentStep === 3 && (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    Choose Date & Time
                  </h2>
                  <p className="text-gray-500 mb-6">
                    Let us know when you'd like your clean.
                  </p>

                  <div className="mb-8">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Select Date
                    </label>
                    <input
                      type="date"
                      min={new Date().toISOString().split("T")[0]}
                      {...register("preferredDate")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200"
                    />
                    {errors.preferredDate && (
                      <p className="mt-2 text-red-600 text-sm">
                        {errors.preferredDate.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-3">
                      Select Preferred Time
                    </label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                      {[
                        {
                          value: "morning",
                          label: "Morning",
                          hint: "8am – 11am",
                        },
                        {
                          value: "midday",
                          label: "Midday",
                          hint: "11am – 2pm",
                        },
                        {
                          value: "afternoon",
                          label: "Afternoon",
                          hint: "2pm – 5pm",
                        },
                      ].map((slot) => (
                        <label key={slot.value} className="cursor-pointer">
                          <input
                            type="radio"
                            value={slot.value}
                            {...register("preferredTime")}
                            className="hidden"
                          />
                          <div
                            className={`p-4 border-2 rounded-lg text-center transition-all duration-200 ${
                              watchedValues.preferredTime === slot.value
                                ? "border-emerald-500 bg-emerald-50"
                                : "border-gray-200 hover:border-emerald-300"
                            }`}
                          >
                            <span className="block font-medium text-gray-900">
                              {slot.label}
                            </span>
                            <span className="block text-xs text-gray-500 mt-1">
                              {slot.hint}
                            </span>
                          </div>
                        </label>
                      ))}
                    </div>
                    {errors.preferredTime && (
                      <p className="mt-2 text-red-600 text-sm">
                        {errors.preferredTime.message}
                      </p>
                    )}
                  </div>

                  {watchedValues.preferredDate &&
                    watchedValues.preferredTime && (
                      <div className="mt-6 p-4 bg-emerald-50 border border-emerald-100 rounded-lg flex items-center gap-3">
                        <Calendar className="w-5 h-5 text-emerald-600 flex-shrink-0" />
                        <p className="text-sm text-gray-700">
                          Your clean is scheduled for{" "}
                          <span className="font-semibold text-gray-900">
                            {new Date(
                              watchedValues.preferredDate + "T00:00:00",
                            ).toLocaleDateString("en-AU", {
                              weekday: "long",
                              day: "numeric",
                              month: "long",
                              year: "numeric",
                            })}
                          </span>{" "}
                          (
                          {
                            {
                              morning: "Morning, 8am – 11am",
                              midday: "Midday, 11am – 2pm",
                              afternoon: "Afternoon, 2pm – 5pm",
                            }[watchedValues.preferredTime]
                          }
                          )
                        </p>
                      </div>
                    )}
                </motion.div>
              )}

              {/* Step 4: Extras */}
              {currentStep === 4 && (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-6">
                    Optional Add-ons
                  </h2>
                  <p className="text-gray-600 mb-6">
                    {watchedValues.serviceType === "regular_cleaning" &&
                      "Customize your regular cleaning at checkout:"}
                    {watchedValues.serviceType === "end_of_lease" &&
                      "Enhance your bond clean with these additional services:"}
                    {watchedValues.serviceType === "spring_cleaning" &&
                      "Customize your spring clean at checkout:"}
                    {watchedValues.serviceType === "custom_cleaning" &&
                      "Select any additional services you'd like to include:"}
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {currentServiceExtras.map((extra) => (
                      <div key={extra.id}>
                        <AddonCard
                          checked={selectedExtras.includes(extra.id)}
                          name={extra.name}
                          description={extra.description}
                          icon={extra.iconComponent}
                          price={`$${getExtraPrice(extra.id, extra.price)}`}
                          onClick={() => handleExtraToggle(extra.id)}
                        />

                        {/* Carpet Quantity Selection - Appears directly below carpet add-on */}
                        {(extra.id === "carpet_steam" ||
                          extra.id === "carpet_steam_custom") &&
                          selectedExtras.includes(extra.id) &&
                          showCarpetDetails && (
                            <div className="mt-4 p-6 bg-emerald-50 rounded-lg border border-emerald-200">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Carpet Steam Cleaning Details
                              </h3>
                              <label className="block text-sm font-medium text-gray-700 mb-2">
                                How many carpets would you like cleaned?
                              </label>
                              <div className="relative mb-4">
                                <CustomDropdown
                                  label="Number of Carpets"
                                  value={selectedCarpets}
                                  onChange={(value) => {
                                    setSelectedCarpets(value);
                                    setShowCarpetDetails(false);
                                  }}
                                  options={[1, 2, 3, 4, 5]}
                                  isOpen={carpetDropdownOpen}
                                  setIsOpen={setCarpetDropdownOpen}
                                />
                              </div>
                              <p className="text-sm text-gray-600 mb-2">
                                Carpet Steam Cleaning: First carpet $80, each
                                additional carpet +$50.
                              </p>
                              <p className="text-sm font-semibold text-emerald-600">
                                {selectedCarpets} carpet
                                {selectedCarpets > 1 ? "s" : ""}: Your rate is $
                                {getCarpetPrice(selectedCarpets)}
                              </p>
                            </div>
                          )}
                        {extra.id === "balcony_garage" &&
                          selectedExtras.includes("balcony_garage") &&
                          showBalconyDetails && (
                            <div className="mt-4 p-6 bg-emerald-50 rounded-lg border border-emerald-200">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Balcony Cleaning Details
                              </h3>

                              <div className="space-y-3">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedBalconyType(1);
                                    setShowBalconyDetails(false);
                                  }}
                                  className={`w-full p-4 rounded-lg border-2 text-left transition ${
                                    selectedBalconyType === 1
                                      ? "border-emerald-500 bg-emerald-100"
                                      : "border-gray-300"
                                  }`}
                                >
                                  <div className="font-semibold">
                                    Up to 12 m²
                                  </div>
                                  <div className="text-emerald-600 font-bold">
                                    $60
                                  </div>
                                </button>

                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedBalconyType(2);
                                    setShowBalconyDetails(false);
                                  }}
                                  className={`w-full p-4 rounded-lg border-2 text-left transition ${
                                    selectedBalconyType === 2
                                      ? "border-emerald-500 bg-emerald-100"
                                      : "border-gray-300"
                                  }`}
                                >
                                  <div className="font-semibold">
                                    More than 12 m²
                                  </div>
                                  <div className="text-emerald-600 font-bold">
                                    $80
                                  </div>
                                </button>
                              </div>
                            </div>
                          )}
                        {extra.id === "exterior_window" &&
                          selectedExtras.includes("exterior_window") &&
                          showWindowDetails && (
                            <div className="mt-4 p-6 bg-emerald-50 rounded-lg border border-emerald-200">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Exterior Window Cleaning Details
                              </h3>

                              <CustomDropdown
                                label="Number of Windows"
                                value={selectedWindows}
                                onChange={(value) => {
                                  setSelectedWindows(value);
                                  setShowWindowDetails(false);
                                }}
                                options={[
                                  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14,
                                  15, 16, 17, 18, 19, 20,
                                ]}
                                isOpen={windowDropdownOpen}
                                setIsOpen={setWindowDropdownOpen}
                              />

                              <p className="mt-3 text-sm text-gray-600">
                                $8 per window
                              </p>

                              <p className="mt-2 text-emerald-600 font-semibold">
                                {selectedWindows} window
                                {selectedWindows > 1 ? "s" : ""}: $
                                {getWindowPrice(selectedWindows)}
                              </p>
                            </div>
                          )}
                        {extra.id === "upholstery_clean" &&
                          selectedExtras.includes("upholstery_clean") &&
                          showUpholsteryDetails && (
                            <div className="mt-4 p-6 bg-emerald-50 rounded-lg border border-emerald-200">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Upholstery Cleaning Details
                              </h3>

                              <div className="space-y-3">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedSofaType(2);
                                    setShowUpholsteryDetails(false);
                                  }}
                                  className={`w-full p-4 rounded-lg border-2 text-left transition ${
                                    selectedSofaType === 2
                                      ? "border-emerald-500 bg-emerald-100"
                                      : "border-gray-300"
                                  }`}
                                >
                                  <div className="font-semibold">
                                    2 Seat Sofa
                                  </div>

                                  <div className="text-emerald-600 font-bold">
                                    $60
                                  </div>
                                </button>

                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedSofaType(3);
                                    setShowUpholsteryDetails(false);
                                  }}
                                  className={`w-full p-4 rounded-lg border-2 text-left transition ${
                                    selectedSofaType === 3
                                      ? "border-emerald-500 bg-emerald-100"
                                      : "border-gray-300"
                                  }`}
                                >
                                  <div className="font-semibold">
                                    3 Seat Sofa
                                  </div>

                                  <div className="text-emerald-600 font-bold">
                                    $80
                                  </div>
                                </button>
                              </div>
                            </div>
                          )}
                        {extra.id === "wall_spot" &&
                          selectedExtras.includes("wall_spot") &&
                          showWallSpotDetails && (
                            <div className="mt-4 p-6 bg-emerald-50 rounded-lg border border-emerald-200">
                              <h3 className="text-lg font-semibold mb-4">
                                Wall Spot Cleaning Details
                              </h3>

                              <div className="space-y-3">
                                {[
                                  {
                                    value: "per_wall",
                                    label: "Per Wall",
                                    price: 25,
                                  },
                                  {
                                    value: "two_walls",
                                    label: "2 Walls",
                                    price: 50,
                                  },
                                  {
                                    value: "one_bedroom",
                                    label: "1 Bedroom",
                                    price: 120,
                                  },
                                  {
                                    value: "two_bedrooms",
                                    label: "2 Bedrooms",
                                    price: 200,
                                  },
                                  {
                                    value: "three_bedrooms",
                                    label: "3 Bedrooms",
                                    price: 250,
                                  },
                                  {
                                    value: "four_bedrooms",
                                    label: "4 Bedrooms",
                                    price: 300,
                                  },
                                ].map((option) => (
                                  <button
                                    key={option.value}
                                    type="button"
                                    onClick={() => {
                                      setSelectedWallSpot(option.value);
                                      setShowWallSpotDetails(false);
                                    }}
                                    className={`w-full p-4 rounded-lg border-2 text-left transition ${
                                      selectedWallSpot === option.value
                                        ? "border-emerald-500 bg-emerald-100"
                                        : "border-gray-300"
                                    }`}
                                  >
                                    <div className="flex justify-between">
                                      <span className="font-medium">
                                        {option.label}
                                      </span>

                                      <span className="font-bold text-emerald-600">
                                        ${option.price}
                                      </span>
                                    </div>
                                  </button>
                                ))}
                              </div>
                            </div>
                          )}
                        {extra.id === "blind_cleaning" &&
                          selectedExtras.includes("blind_cleaning") &&
                          showBlindDetails && (
                            <div className="mt-4 p-6 bg-emerald-50 rounded-lg border border-emerald-200">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Blind Cleaning Details
                              </h3>

                              <CustomDropdown
                                label="Number of Blinds"
                                value={selectedBlinds}
                                onChange={(value) => {
                                  setSelectedBlinds(value);
                                  setShowBlindDetails(false);
                                }}
                                options={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
                                isOpen={blindDropdownOpen}
                                setIsOpen={setBlindDropdownOpen}
                              />

                              <p className="mt-4 text-sm text-gray-600">
                                1 Blind = $25, 2 Blinds = $40, 3 Blinds = $60
                              </p>

                              <p className="text-sm font-semibold text-emerald-600 mt-2">
                                {selectedBlinds} Blind
                                {selectedBlinds > 1 ? "s" : ""}: $
                                {getBlindPrice(selectedBlinds)}
                              </p>

                              <p className="mt-2 text-sm text-gray-600">
                                <strong>Note:</strong> Add{" "}
                                <span className="font-semibold text-emerald-600">
                                  $20
                                </span>{" "}
                                for each additional blind after the first three.
                              </p>
                            </div>
                          )}
                        {extra.id === "flight_stairs" &&
                          selectedExtras.includes("flight_stairs") &&
                          showStairsDetails && (
                            <div className="mt-4 p-6 bg-emerald-50 rounded-lg border border-emerald-200">
                              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                                Flight of Stairs Details
                              </h3>

                              <div className="space-y-3">
                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedStairsType(1);
                                    setShowStairsDetails(false);
                                  }}
                                  className={`w-full p-4 rounded-lg border-2 text-left transition ${
                                    selectedStairsType === 1
                                      ? "border-emerald-500 bg-emerald-100"
                                      : "border-gray-300"
                                  }`}
                                >
                                  <div className="flex justify-between items-center">
                                    <span className="font-semibold">
                                      Vacuum Only
                                    </span>

                                    <span className="font-bold text-emerald-600">
                                      $35
                                    </span>
                                  </div>
                                </button>

                                <button
                                  type="button"
                                  onClick={() => {
                                    setSelectedStairsType(2);
                                    setShowStairsDetails(false);
                                  }}
                                  className={`w-full p-4 rounded-lg border-2 text-left transition ${
                                    selectedStairsType === 2
                                      ? "border-emerald-500 bg-emerald-100"
                                      : "border-gray-300"
                                  }`}
                                >
                                  <div className="flex justify-between items-center">
                                    <span className="font-semibold">
                                      Vacuum + Carpet Steam Clean
                                    </span>

                                    <span className="font-bold text-emerald-600">
                                      $60
                                    </span>
                                  </div>
                                </button>
                              </div>
                            </div>
                          )}
                        {/* Carpet Quantity Selection for Custom Cleaning */}
                      </div>
                    ))}
                  </div>
                </motion.div>
              )}

              {/* Step 5: Details */}
              {currentStep === 5 && (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    Your Details
                  </h2>
                  <p className="text-gray-500 mb-6">
                    We'll use these details to confirm and arrange your clean.
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        First Name
                      </label>
                      <input
                        type="text"
                        {...register("firstName")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200"
                        placeholder="Enter your first name"
                      />
                      {errors.firstName && touchedFields.firstName && (
                        <p className="mt-1 text-red-600 text-sm">
                          {errors.firstName.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Last Name
                      </label>
                      <input
                        type="text"
                        {...register("lastName")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200"
                        placeholder="Enter your last name"
                      />
                      {errors.lastName && touchedFields.lastName && (
                        <p className="mt-1 text-red-600 text-sm">
                          {errors.lastName.message}
                        </p>
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
                        {...register("email")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200"
                        placeholder="your.email@example.com"
                      />
                      {errors.email && touchedFields.email && (
                        <p className="mt-1 text-red-600 text-sm">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        {...register("phone")}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200"
                        placeholder="0412 345 678"
                      />
                      {errors.phone && touchedFields.phone && (
                        <p className="mt-1 text-red-600 text-sm">
                          {errors.phone.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Property Address
                    </label>
                    <input
                      type="text"
                      {...register("address")}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200"
                      placeholder="Enter your full address (e.g., 123 Collins Street, Melbourne VIC 3000)"
                    />
                    {errors.address && touchedFields.address && (
                      <p className="mt-1 text-red-600 text-sm">
                        {errors.address.message}
                      </p>
                    )}
                  </div>

                  <div className="mb-2">
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Additional Notes (Optional)
                    </label>
                    <textarea
                      {...register("notes")}
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-emerald-600 focus:border-emerald-600 transition-colors duration-200"
                      placeholder="Any special instructions or requests..."
                    />
                  </div>
                </motion.div>
              )}

              {/* Step 6: Review */}
              {currentStep === 6 && (
                <motion.div
                  initial={{ x: 50, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <h2 className="text-2xl font-bold text-gray-900 mb-1">
                    Review & Confirm
                  </h2>
                  <p className="text-gray-500 mb-6">
                    Please check the details below before confirming your
                    booking.
                  </p>

                  <div className="bg-gray-50 rounded-xl p-6 mb-6">
                    <p className="text-xs uppercase tracking-wide text-gray-500 mb-3">
                      Contact Details
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
                      <div>
                        <p className="text-gray-500">Name</p>
                        <p className="font-medium text-gray-900">
                          {watchedValues.firstName} {watchedValues.lastName}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Email</p>
                        <p className="font-medium text-gray-900">
                          {watchedValues.email}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Phone</p>
                        <p className="font-medium text-gray-900">
                          {watchedValues.phone}
                        </p>
                      </div>
                      <div>
                        <p className="text-gray-500">Address</p>
                        <p className="font-medium text-gray-900">
                          {watchedValues.address}
                        </p>
                      </div>
                      {watchedValues.notes && (
                        <div className="sm:col-span-2">
                          <p className="text-gray-500">Notes</p>
                          <p className="font-medium text-gray-900">
                            {watchedValues.notes}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Full summary, shown as the main content on Review (and always in
                    the sidebar on desktop) so mobile users see it here too. */}
                  <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden lg:hidden">
                    <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 p-6 text-white">
                      <h3 className="text-2xl font-bold">🧾 Booking Summary</h3>
                      <p className="text-emerald-100 text-sm mt-1">
                        Review your booking before checkout
                      </p>
                    </div>
                    <div className="p-6 space-y-6">
                      {renderBookingSummary()}
                    </div>
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

                <div>
                  {currentStep < TOTAL_STEPS ? (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={nextStep}
                      disabled={
                        (currentStep === 2 && postalCodeValid !== true) ||
                        (currentStep === 3 &&
                          (!watchedValues.preferredDate ||
                            !watchedValues.preferredTime))
                      }
                      className={`btn-primary flex items-center ${
                        (currentStep === 2 && postalCodeValid !== true) ||
                        (currentStep === 3 &&
                          (!watchedValues.preferredDate ||
                            !watchedValues.preferredTime))
                          ? "opacity-50 cursor-not-allowed"
                          : ""
                      }`}
                    >
                      Continue
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </motion.button>
                  ) : (
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="button"
                      onClick={handleSubmit(onSubmit)}
                      disabled={submitting}
                      className={`btn-primary flex items-center ${!isValid || submitting ? "opacity-50 cursor-not-allowed" : ""}`}
                    >
                      {submitting ? "Submitting…" : "Confirm Booking"}
                      <CheckCircle className="w-4 h-4 ml-2" />
                    </motion.button>
                  )}
                </div>
              </div>
            </div>

            {/* Persistent Booking Summary sidebar (desktop only - mobile sees the
              compact total bar above, plus the full summary on the Review step) */}
            <aside className="hidden lg:block sticky top-24">
              <div className="bg-white rounded-2xl shadow-xl border border-gray-200 overflow-hidden">
                <div className="bg-gradient-to-r from-emerald-600 via-emerald-500 to-teal-500 p-6 text-white">
                  <h3 className="text-2xl font-bold">🧾 Booking Summary</h3>
                  <p className="text-emerald-100 text-sm mt-1">
                    Review your booking before checkout
                  </p>
                </div>
                <div className="p-6 space-y-6">{renderBookingSummary()}</div>
              </div>
            </aside>
          </div>
        </form>
      </div>
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={() => setSnackbarOpen(false)}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        <Alert
          onClose={() => setSnackbarOpen(false)}
          severity={snackbarSeverity}
          sx={{ width: "100%" }}
        >
          {snackbarMessage}
        </Alert>
      </Snackbar>
    </div>
  );
};

export default Book;
