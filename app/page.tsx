"use client";
import React, { useState, useEffect } from 'react';
import { 
  BookOpen, 
  Users, 
  Globe, 
  Menu, 
  X, 
  GraduationCap, 
  Briefcase, 
  ArrowUpRight, 
  Mail, 
  Linkedin,
  BarChart,
  Award,
  Mic2, 
} from 'lucide-react';
import { Reveal } from './Helper';
import Hero from './Components/Hero';
import { ServiceCard } from './Components/serviceCard';
import { FlipCard } from './Components/Flipcard';
import { TimelineItem } from './Components/timelineProps';

interface NavLink {
  name: string;
  id: string;
}

const Portfolio: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [linkcolor, setLinkColor] = useState<string>('text-white');



  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      if (window.scrollY > 50) {
        setLinkColor('text-slate-900');
      } else {
        setLinkColor('text-white');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  
  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks: NavLink[] = [
    { name: 'About', id: 'about' },
    { name: 'Research', id: 'research' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' },
  ];

  const projects = [
    {
      title: "Co-production in Scottish Policy",
      category: "Article",
      url: "https://www.strath.ac.uk/humanities/centreforhealthpolicy/ourblog/co-productioninscottishpolicyblogseptember2024/",
      description: "Contribution to the Centre for Health Policy blog regarding policy co-production.",
      color: "text-emerald-400"
    },
    {
      title: "The Hope Project Scotland",
      category: "Organization",
      url: "https://thehopeprojectscotland.org.uk/",
      description: "Supporting individuals and families affected by Sickle Cell Disease.",
      color: "text-blue-400"
    },
    {
      title: "Igbadun",
      category: "Social Enterprise",
      url: "https://www.igbadun.co.uk/",
      description: "A social enterprise initiative focused on community engagement and cultural connection.",
      color: "text-orange-400"
    },
    {
      title: "Gradel Institute of Charity",
      category: "Profile",
      url: "https://www.gradelinstituteofcharity.co.uk/olalekan-oyedepo",
      description: "Featured researcher profile highlighting contributions to the third sector.",
      color: "text-purple-400"
    },
    {
      title: "Anti-Racism Observatory Minutes",
      category: "Policy Document",
      url: "https://www.gov.scot/publications/future-anti-racism-observatory-for-scotland-design-advisory-group-minutes-28-august-2024/",
      description: "Minutes from the Future Anti-Racism Observatory for Scotland Design Advisory Group.",
      color: "text-red-400"
    },
    {
      title: "Design Advisory Group",
      category: "Government Group",
      url: "https://www.gov.scot/groups/future-anti-racism-observatory-for-scotland-design-advisory-group/",
      description: "Member of the Design Advisory Group for the Future Anti-Racism Observatory for Scotland.",
      color: "text-teal-400"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 font-sans selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden" style={{scrollBehavior: 'smooth'}}>
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className={`text-2xl font-bold tracking-tight ${linkcolor} md:text-slate-900 cursor-pointer`} onClick={() => scrollTo('home')}>
            Oyedepo<span className="text-emerald-600">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className={`text-sm font-medium ${linkcolor} hover:text-emerald-600 transition-colors uppercase tracking-wider`}
              >
                {link.name}
              </button>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button className={`md:hidden ${linkcolor} md:text-slate-900`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg py-4 flex flex-col items-center space-y-4 border-t border-slate-100 animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              <button
                key={link.name}
                onClick={() => scrollTo(link.id)}
                className="text-lg font-medium text-slate-800 hover:text-emerald-600"
              >
                {link.name}
              </button>
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-4xl">
          <div className="flex flex-col gap-10">
            <Reveal>
              <div>
                <h2 className="text-3xl font-bold text-slate-900 mb-6 flex items-center gap-3">
                  <Users className="text-emerald-600" />
                  About Olalekan
                </h2>
                <div className="flex flex-col md:flex-row">
                  <div style={{ backgroundImage: "url(https://images.squarespace-cdn.com/content/v1/64e756776b2a1767f13006f5/9c3ad62b-e242-4d9c-a527-653d90beda17/Olalekan__%281%29.jpg?format=2500w)", backgroundSize: "cover", backgroundPosition: "center" }} className="user_dp w-60 h-60 md:w-80 md:h-80 rounded-full bg-cover bg-center my-6 md:my-auto mx-auto ">
                </div>
                  <div className="prose prose-lg text-slate-600 leading-relaxed text-justify md:w-1/2"> 
                  <p className="mb-4">
                    Olalekan (Lekan) Oyedepo is a PhD candidate in Education and Social Sciences at the 
                    University of the West of Scotland. With a unique academic background bridging Engineering 
                    (BEng) and Applied Social Science (MSc), Lekan brings a methodical yet deeply empathetic 
                    approach to solving complex social problems.
                  </p>
                  <p className="mb-4">
                    His lived experience with the UK Immigration and Asylum system has profoundly shaped his 
                    perspective, fueling a passion for social justice and community engagement. He serves as a 
                    bridge between marginalized communities, healthcare providers, and policymakers.
                  </p>
                  <p>
                    Beyond academia, he is an active community representative on the Scottish Paediatric & 
                    Adult Haemoglobinopathies Network and a driving force behind youth engagement in social issues.
                  </p>
                </div>
                </div>
              </div>
            </Reveal>

            {/* Education Grid */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Reveal delay={200}>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <GraduationCap className="text-emerald-600 mb-4" size={32} />
                  <h3 className="text-xl font-bold text-slate-900">PhD Candidate</h3>
                  <p className="text-slate-500 text-sm mb-2">University of the West of Scotland</p>
                  <p className="text-slate-600">Researching charitable food aid and growing inequalities in the UK.</p>
                </div>
              </Reveal>
              <Reveal delay={400}>
                <div className="p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 h-full">
                  <GraduationCap className="text-blue-600 mb-4" size={32} />
                  <h3 className="text-xl font-bold text-slate-900">MSc Applied Social Science</h3>
                  <p className="text-slate-500 text-sm mb-2">Previous Education</p>
                  <p className="text-slate-600">Also holds a BEng in Telecommunications and Electronics Engineering.</p>
                </div>
              </Reveal>
            </div>
          </div>
        </div>
      </section>


      <section id="services" className="py-20 bg-slate-50 relative overflow-hidden">
        {/* <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-emerald-500"></div> */}
        <div className="container mx-auto px-6 max-w-6xl">
             <Reveal>
                <div className="text-center mb-16">
                    <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Expertise</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Professional Services</h2>
                    <p className="text-slate-600 max-w-2xl mx-auto">
                        Delivering evidence-based insights and strategic guidance for organizations committed to social change.
                    </p>
                </div>
             </Reveal>

             <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                <ServiceCard 
                    icon={<BarChart size={24} />}
                    title="Policy Analysis"
                    desc="Rigorous social research and evaluation of policy frameworks concerning inequality and welfare."
                    delay={100}
                />
                <ServiceCard 
                    icon={<Users size={24} />}
                    title="Community Strategy"
                    desc="Designing engagement initiatives to ensure marginalized voices are heard in decision-making."
                    delay={200}
                />
                <ServiceCard 
                    icon={<Award size={24} />}
                    title="DEI Consulting"
                    desc="Advising on Diversity, Equity, and Inclusion strategies using Anti-Racism Observatory insights."
                    delay={300}
                />
                 <ServiceCard 
                    icon={<Mic2 size={24} />}
                    title="Keynote Speaking"
                    desc="Delivering impactful talks on social justice, health inequalities, and the asylum system."
                    delay={400}
                />
             </div>
        </div>
      </section>

      {/* Research & Advocacy Areas - FLIP SECTION */}
      <section id="research" className="py-20 bg-white">
        <div className="container mx-auto px-6 max-w-6xl">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Focus Areas</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-3 gap-8 h-80">
            <FlipCard 
              delay={0}
              icon={<BookOpen size={32} />}
              title="Food Aid & Inequality"
              shortDesc="Charitable food provision patterns."
              fullDesc="Examining the relationship between charitable food aid provision and socioeconomic inequalities, investigating how provision patterns respond to social disparities."
              colorClass="bg-emerald-600"
            />
            <FlipCard
              delay={150}
              icon={<Users size={32} />}
              title="Sickle Cell Advocacy"
              shortDesc="Project Coordinator for The Hope Project."
              fullDesc="Advocating for people with Sickle-cell disease, coordinating research initiatives, and liaising with healthcare providers and government bodies to improve patient outcomes."
              colorClass="bg-blue-600"
            />
            <FlipCard 
              delay={300}
              icon={<Globe size={32} />}
              title="Community Research"
              shortDesc="Tackling sensitive social issues."
              fullDesc="Experience as a Peer Researcher in the MyVoice Project, collaborating with Queen Margaret University to tackle issues like female genital mutilation through community-based research."
              colorClass="bg-indigo-600"
            />
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 bg-white translate-y-96 md:translate-y-0 md:mt-0 mt-80">
        <div className="container mx-auto px-6 max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900 mb-12 flex items-center gap-3">
              <Briefcase className="text-emerald-600" />
              Professional Journey
            </h2>
          </Reveal>
          
          <div className="space-y-12 border-l-2 border-slate-200 pl-8 ml-4">
            <TimelineItem 
              delay={0}
              role="PhD Researcher"
              org="University of the West of Scotland"
              date="Present"
              desc="Leading research on charitable food aid and inequality mechanisms in the UK."
            />
            <TimelineItem
              delay={200}
              role="Project Coordinator"
              org="The Hope Project Scotland"
              date="Ongoing"
              desc="Coordinating research initiatives, advocating for Sickle-cell patients, and managing stakeholder relationships."
            />
            <TimelineItem 
              delay={400}
              role="Community Representative"
              org="Scottish Paediatric & Adult Haemoglobinopathies Network"
              date="Ongoing"
              desc="Providing crucial community input to shape healthcare policies and protocols."
            />
            <TimelineItem 
              delay={600}
              role="Peer Researcher"
              org="MyVoice Project (Queen Margaret University)"
              date="Past"
              desc="Collaborated on research regarding sensitive social issues and community health."
            />
          </div>
        </div>
      </section>

      {/* Publications / Projects Links */}
      <section id="projects" className=" relative py-20 bg-slate-900 text-white translate-y-96 md:translate-y-0" style={{backgroundImage: 'url(https://pub-5cffb33c273f48f58febecc7e7badd2f.r2.dev/Gemini_Generated_Image_q89uymq89uymq89u.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black/70"></div>
        <div className="container mx-auto px-6 max-w-6xl z-10">
          <Reveal>
            <h2 className="text-3xl font-bold mb-12 text-center md:text-left">Featured Projects & Publications</h2>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Reveal key={index} delay={index * 100}>
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-slate-800 rounded-2xl hover:bg-slate-750 transition-all border border-slate-700 hover:border-slate-500 h-full flex flex-col transform hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className={`${project.color} text-xs font-bold uppercase tracking-wider bg-slate-900/50 px-2 py-1 rounded`}>
                      {project.category}
                    </span>
                    <ArrowUpRight className="text-slate-500 group-hover:text-white transition-colors" size={20} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 group-hover:text-emerald-300 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-400 text-sm leading-relaxed mt-auto">
                    {project.description}
                  </p>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id='contact' className="bg-white border-t border-slate-100 pt-16 pb-8 translate-y-96 md:translate-y-0">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="text-2xl font-bold tracking-tight text-slate-900 mb-4 md:mb-0">
                    Oyedepo<span className="text-emerald-600">.</span>
                </div>
                <div className="text-slate-500 text-sm text-center md:text-right">
                    <p className="mb-2">PhD Researcher & Social Entrepreneur</p>
                    <p>Glasgow, Scotland</p>
                </div>
            </div>
            
            <div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
                <p>&copy; {new Date().getFullYear()} Oyedepo Olalekan. All rights reserved.</p>
            
                <div className="flex items-center justify-center gap-6 mt-5 md:mt-0">
                  <Reveal delay={100}>
                    <a href="https://www.linkedin.com/in/olalekan-oyedepo-994b3899/" target="_blank" rel="noopener noreferrer">
                      <SocialIcon icon={<Linkedin size={20} />} />
                    </a>
                  </Reveal>
                  <Reveal delay={200}>
                    <a href="mailto:olale202@gmail.com">
                      <SocialIcon icon={<Mail size={20} />} />
                    </a>
                  </Reveal>
                </div>
            </div>
        </div>
      </footer>
    </div>
  );
};






interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => (
  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-slate-100 text-slate-600 hover:bg-emerald-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md">
    {icon}
  </div>
);

export default Portfolio;