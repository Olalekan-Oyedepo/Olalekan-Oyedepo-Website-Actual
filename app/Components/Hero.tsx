import { ChevronRight, Linkedin, Mail } from "lucide-react";
import { Reveal } from "../Helper";
import { useEffect, useState } from "react";

const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

export default function Hero() {

  const [greeting, setGreeting] = useState('Hello');

  useEffect(() => {
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');
  }, []);

    return (
        <section id="home" className="relative overflow-hidden min-h-screen flex items-center" style={{backgroundImage: 'url(https://www.strath.ac.uk/media/1newwebsite/departmentsubject/socialwork/ma-ti-TbudstOJSJg-unsplash.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute top-0 bottom-0 left-0 right-0 z-3 w-full h-full bg-gradient-to-b from-black/60 to-black/90"></div>

        <div className="container mx-auto relative z-10 px-6 pt-20">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-5xl mx-auto">
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block py-1 px-3 rounded-full bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
                  {greeting}, I'm Oyedepo Olalekan
                </span>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Bridging Policy, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-blue-400">
                    Research & Community.
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-slate-200 mb-8 max-w-2xl leading-relaxed">
                  Social Researcher exploring the intersection of charitable food aid and inequality. 
                  Advocating for marginalized voices through rigorous social research.
                </p>
                

                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start items-center mb-8">
                  <div
                  onClick={() => scrollTo("projects")}
                    className="px-8 py-3 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 group cursor-pointer w-full sm:w-auto"
                  >
                    View Projects
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div
                    onClick={() => scrollTo("contact")}
                    className="px-8 py-3 bg-white/10 backdrop-blur-md border border-white/20 text-white rounded-full font-medium hover:bg-emerald-600 transition-all hover:shadow-md flex items-center justify-center cursor-pointer w-full sm:w-auto"
                  >
                    Contact Me
                  </div>
                </div>

                 {/* Visible Social Media Icons */}
                 <div className="flex items-center justify-center md:justify-start gap-4">
                    <a href="https://www.linkedin.com/in/olalekan-oyedepo-994b3899/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-emerald-600 hover:scale-105 transition-all text-white border border-white/10 text-sm font-medium">
                        <Linkedin size={18} /> LinkedIn
                    </a>
                    <a href="mailto:olale202@gmail.com" className="flex items-center gap-2 px-4 py-2 bg-white/10 rounded-full hover:bg-emerald-600 hover:scale-105 transition-all text-white border border-white/10 text-sm font-medium">
                        <Mail size={18} /> Email
                    </a>
                 </div>

              </div>
            </div>
          </Reveal>
        </div>
      </section>
    );
}