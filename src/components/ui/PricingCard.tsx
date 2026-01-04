import { Check } from 'lucide-react';
import Button from './Button';

interface PricingCardProps {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  cta: string;
  highlighted?: boolean;
  onCtaClick?: () => void;
}

export default function PricingCard({
  name,
  price,
  period,
  description,
  features,
  cta,
  highlighted = false,
  onCtaClick,
}: PricingCardProps) {
  return (
    <div className={`relative rounded-2xl p-8 ${
      highlighted 
        ? 'bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600 text-white shadow-2xl shadow-purple-500/50 scale-105 border-4 border-purple-300 ring-4 ring-purple-300/30' 
        : 'bg-white dark:bg-gray-800 shadow-lg border-2 border-purple-100 dark:border-purple-900/30 hover:border-purple-300 dark:hover:border-purple-500'
    } transition-all duration-300 hover:shadow-2xl hover:scale-[1.02]`}>
      {highlighted && (
        <div className="absolute -top-5 left-1/2 -translate-x-1/2">
          <span className="bg-gradient-to-r from-orange-400 to-pink-500 text-white px-6 py-2 rounded-full text-sm font-bold shadow-lg shadow-pink-500/50 animate-pulse">
            Best Value
          </span>
        </div>
      )}
      
      <div className="text-center mb-8">
        <h3 className={`text-2xl font-bold mb-2 ${highlighted ? 'text-white' : 'text-gray-900 dark:text-white'}`}>
          {name}
        </h3>
        <div className="flex items-baseline justify-center gap-2 mb-2">
          <span className={`text-5xl font-bold ${highlighted ? 'text-white' : 'text-primary-600'}`}>
            {price}
          </span>
          <span className={`text-lg ${highlighted ? 'text-primary-100' : 'text-gray-600 dark:text-gray-400'}`}>
            {period}
          </span>
        </div>
        <p className={`text-sm ${highlighted ? 'text-primary-100' : 'text-gray-600 dark:text-gray-400'}`}>
          {description}
        </p>
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start gap-3">
            <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${highlighted ? 'text-primary-200' : 'text-accent-500'}`} />
            <span className={`text-sm ${highlighted ? 'text-primary-50' : 'text-gray-700 dark:text-gray-300'}`}>
              {feature}
            </span>
          </li>
        ))}
      </ul>

      <Button
        variant={highlighted ? 'secondary' : 'primary'}
        className="w-full"
        onClick={onCtaClick}
      >
        {cta}
      </Button>
    </div>
  );
}
