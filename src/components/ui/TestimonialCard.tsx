import { Star } from 'lucide-react';

interface TestimonialCardProps {
  name: string;
  role: string;
  content: string;
  rating: number;
  avatar: string;
}

export default function TestimonialCard({
  name,
  role,
  content,
  rating,
  avatar,
}: TestimonialCardProps) {
  return (
    <div className="group relative bg-white rounded-xl shadow-md p-6 hover:shadow-xl transition-all duration-300 border border-gray-200 hover:border-blue-300 hover:-translate-y-1">
      {/* Accent bar */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-purple-500 rounded-t-xl"></div>
      
      <div className="relative pt-2">
      <div className="flex items-center gap-4 mb-4">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg shadow-cyan-500/50 group-hover:scale-110 transition-transform duration-300">
          {avatar}
        </div>
        <div>
          <h4 className="font-semibold text-gray-900">{name}</h4>
          <p className="text-sm text-gray-600">{role}</p>
        </div>
      </div>
      
      <div className="flex gap-1 mb-3">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400 drop-shadow-[0_0_6px_rgba(250,204,21,0.6)]" />
        ))}
      </div>
      
      <p className="text-gray-700 italic leading-relaxed">"{content}"</p>
      </div>
    </div>
  );
}
