import { Reveal } from "../Helper";

interface ServiceCardProps {
    icon: React.ReactNode;
    title: string;
    desc: string;
    delay?: number;
}

export const ServiceCard: React.FC<ServiceCardProps> = ({ icon, title, desc, delay = 0 }) => (
    <Reveal delay={delay}>
        <div className="p-6 bg-white rounded-xl shadow-sm border border-slate-100 hover:shadow-lg hover:-translate-y-2 transition-all duration-300 h-full">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-600 rounded-lg flex items-center justify-center mb-4">
                {icon}
            </div>
            <h3 className="text-lg font-bold text-slate-900 mb-2">{title}</h3>
            <p className="text-slate-500 text-sm leading-relaxed">{desc}</p>
        </div>
    </Reveal>
);