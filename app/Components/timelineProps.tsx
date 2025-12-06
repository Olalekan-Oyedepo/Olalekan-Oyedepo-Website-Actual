import { Reveal } from "../Helper";

interface TimelineItemProps {
  role: string;
  org: string;
  date: string;
  desc: string;
  delay: number;
}

export const TimelineItem: React.FC<TimelineItemProps> = ({ role, org, date, desc, delay }) => (
  <Reveal delay={delay}>
    <div className="relative group">
      <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-white bg-emerald-500 group-hover:scale-125 transition-transform duration-300 shadow-sm"></div>
      <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-600 transition-colors">{role}</h3>
      <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-2 mb-2">
        <span className="text-emerald-600 font-medium">{org}</span>
        <span className="hidden sm:inline text-slate-300">•</span>
        <span className="text-slate-400 text-sm">{date}</span>
      </div>
      <p className="text-slate-600 group-hover:text-slate-700 transition-colors">{desc}</p>
    </div>
  </Reveal>
);