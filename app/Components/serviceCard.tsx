import { Reveal } from "../Helper";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
    delay?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, desc, delay = 0 }) => (
    <Reveal delay={delay}>
        <div className="p-6 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 h-full group">
            <div className="w-12 h-12 bg-emerald-50 dark:bg-slate-700 text-emerald-600 dark:text-emerald-400 rounded-lg flex items-center justify-center mb-4 transition-colors">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white mb-2 transition-colors">{title}</h3>
            <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed transition-colors">{desc}</p>
        </div>
    </Reveal>
);