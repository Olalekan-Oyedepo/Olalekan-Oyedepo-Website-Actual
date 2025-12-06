import { useState } from "react";
import { Reveal } from "../Helper";
import { ChevronRight } from "lucide-react";

interface FlipCardProps {
  icon: React.ReactNode;
  title: string;
  shortDesc: string;
  fullDesc: string;
  colorClass: string;
  delay?: number;
}

export const FlipCard: React.FC<FlipCardProps> = ({ icon, title, shortDesc, fullDesc, colorClass, delay = 0 }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <Reveal delay={delay}>
      <div 
        className="group h-80 w-full [perspective:1000px] cursor-pointer"
        onClick={() => setIsFlipped(!isFlipped)}
      >
        <div className={`relative h-full w-full transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)] ${isFlipped ? '[transform:rotateY(180deg)]' : ''} shadow-sm hover:shadow-xl rounded-2xl`}>
          
          {/* Front of Card */}
          <div className="absolute inset-0 h-full w-full rounded-2xl bg-white p-8 [backface-visibility:hidden] border border-slate-100 flex flex-col items-center justify-center text-center">
            <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-white ${colorClass}`}>
              {icon}
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-3">{title}</h3>
            <p className="text-slate-500">{shortDesc}</p>
            <div className="mt-auto pt-6 text-slate-400 text-sm font-medium flex items-center gap-2">
              <span>Read Details</span>
              <ChevronRight size={14} />
            </div>
          </div>

          {/* Back of Card */}
          <div className={`absolute inset-0 h-full w-full rounded-2xl ${colorClass} p-8 text-white [transform:rotateY(180deg)] [backface-visibility:hidden] flex flex-col items-center justify-center text-center`}>
            <h3 className="text-xl font-bold mb-4">{title}</h3>
            <p className="text-white/90 leading-relaxed text-sm md:text-base">
              {fullDesc}
            </p>
          </div>
        </div>
      </div>
    </Reveal>
  );
};