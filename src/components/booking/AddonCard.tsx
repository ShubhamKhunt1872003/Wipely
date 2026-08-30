import React from "react";

interface AddonCardProps {
  checked: boolean;
  name: string;
  description: string;
  price: string;
  icon: React.ElementType;
  onClick: () => void;
}

const AddonCard: React.FC<AddonCardProps> = ({
  checked,
  name,
  description,
  price,
  icon: Icon,
  onClick,
}) => {
  return (
    <label className="cursor-pointer">

      <input
        type="checkbox"
        checked={checked}
        onChange={onClick}
        className="hidden"
      />

      <div
        className={`p-4 border-2 rounded-lg transition-all duration-200 ${
          checked
            ? "border-emerald-500 bg-emerald-50"
            : "border-gray-200 hover:border-emerald-300"
        }`}
      >
        <div className="flex items-center justify-between">

          <div className="flex items-center space-x-3">

            <Icon className="w-5 h-5 text-emerald-600" />

            <div>

              <div className="font-medium text-gray-900">
                {name}
              </div>

              <div className="text-sm text-gray-600">
                {description}
              </div>

            </div>

          </div>

          <div className="font-bold text-emerald-600">
            {price}
          </div>

        </div>
      </div>

    </label>
  );
};

export default AddonCard;