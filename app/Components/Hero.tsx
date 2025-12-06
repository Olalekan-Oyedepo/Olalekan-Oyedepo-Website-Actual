import { ChevronRight } from "lucide-react";
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
    
    // Set time-based greeting
    const hour = new Date().getHours();
    if (hour < 12) setGreeting('Good Morning');
    else if (hour < 18) setGreeting('Good Afternoon');
    else setGreeting('Good Evening');

  }, []);


    return (
        <section id="home" className="relative overflow-hidden" style={{backgroundImage: 'url(https://www.strath.ac.uk/media/1newwebsite/departmentsubject/socialwork/ma-ti-TbudstOJSJg-unsplash.jpg)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        {/* <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-emerald-100 rounded-full blur-3xl opacity-50 animate-pulse"></div>
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-72 h-72 bg-blue-100 rounded-full blur-3xl opacity-50 animate-pulse delay-700"></div> */}
        <div className="absolute top-0 bottom-0 left-0 right-0 z-3 w-full h-full bg-gradient-to-b from-transparent to-black/60"></div>

        <div className="container mx-auto max-w-screen min-w-screen relative z-10 w-screen h-full pt-32 pb-20 md:pt-48 md:pb-32 px-6 backdrop-blur-xs bg-black/40">
          <Reveal>
            <div className="flex flex-col md:flex-row items-center md:items-start gap-12 max-w-5xl mx-auto">
              <div className="flex-1 text-center md:text-left">
                <span className="inline-block py-1 px-3 rounded-full bg-emerald-100 text-emerald-800 text-xs font-bold tracking-widest uppercase mb-4 shadow-sm">
                  {greeting}, I'm Oyedepo Olalekan
                </span>
                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                  Bridging Policy, <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-blue-600">
                    Research & Community.
                  </span>
                </h1>
                <p className="text-lg md:text-xl text-white mb-8 max-w-2xl leading-relaxed">
                  PhD Candidate exploring the intersection of charitable food aid and inequality. 
                  Advocating for marginalized voices through rigorous social research.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                  <div
                  onClick={() => {
                    scrollTo("research");
                  }}
                    className="px-8 py-3 bg-slate-900 text-white rounded-lg font-medium hover:bg-slate-800 transition-all hover:shadow-lg hover:-translate-y-1 flex items-center justify-center gap-2 group cursor-pointer"
                  >
                    Explore Research
                    <ChevronRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </div>
                  <div
                    onClick={() => {
                        scrollTo("contact");
                    }}
                    className="px-8 py-3 bg-white border border-slate-200 text-slate-900 rounded-lg font-medium hover:border-emerald-500 hover:text-emerald-600 transition-all hover:shadow-md flex items-center justify-center cursor-pointer"
                  >
                    Contact Me
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    );
}