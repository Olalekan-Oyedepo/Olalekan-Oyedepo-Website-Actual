"use client";
import React, { useState, useEffect } from 'react';
import Link from 'next/link';
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
  ArrowUp,
  Moon,
  Sun,
  HeartPulse,
  Camera // Added Camera icon
} from 'lucide-react';
import { Reveal } from './Helper';
import Hero from './Components/Hero';
import { ServiceCard } from './Components/serviceCard';
import { FlipCard } from './Components/Flipcard';
import { TimelineItem } from './Components/timelineProps';

interface NavLink {
  name: string;
  id?: string;
  href?: string;
}

const Portfolio: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [linkcolor, setLinkColor] = useState<string>('text-white');
  const [showBackToTop, setShowBackToTop] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    // Check local storage for theme preference
    const isDark = localStorage.getItem('theme') === 'dark';
    setDarkMode(isDark);
    if (isDark) {
      document.documentElement.classList.add('dark');
    }
  }, []);

  const toggleTheme = () => {
    const newMode = !darkMode;
    setDarkMode(newMode);
    if (newMode) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      setShowBackToTop(window.scrollY > 400);
      
      if (window.scrollY > 50) {
        // In dark mode, text should be white when scrolled
        setLinkColor('text-slate-900 dark:text-white');
      } else {
        setLinkColor('text-white');
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [darkMode]);

  const scrollTo = (id: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks: NavLink[] = [
    { name: 'About', id: 'about' },
    { name: 'Experience', id: 'experience' },
    { name: 'Projects', id: 'projects' }, 
    { name: 'Services', id: 'services' },
    { name: 'Research', id: 'research' },
    { name: 'Gallery', href: '/gallery' },
    { name: 'Blog', href: '/blog' },
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
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans selection:bg-emerald-200 selection:text-emerald-900 overflow-x-hidden transition-colors duration-300">
      
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 dark:bg-slate-950/90 backdrop-blur-md shadow-sm py-4' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <div className={`text-2xl font-bold tracking-tight ${linkcolor} cursor-pointer`} onClick={() => scrollTo('home')}>
            <span className='hidden md:inline-flex'>Olalekan</span> Oyedepo<span className="text-emerald-600">.</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-6">
            {navLinks.map((link) => (
              link.href ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className={`text-sm font-medium ${linkcolor} hover:text-emerald-500 transition-colors uppercasekq tracking-wider`}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => link.id && scrollTo(link.id)}
                  className={`text-sm font-medium ${linkcolor} hover:text-emerald-500 transition-colors uppercase tracking-wider`}
                >
                  {link.name}
                </button>
              )
            ))}
            
            {/* Dark Mode Toggle */}
            <button 
              onClick={toggleTheme} 
              className={`p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 transition-colors ${linkcolor}`}
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden flex items-center gap-4">
            <button 
                onClick={toggleTheme} 
                className={`p-2 rounded-full ${linkcolor}`}
              >
                {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>
            <button className={`${linkcolor}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Nav Overlay */}
        {isMenuOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-lg py-4 flex flex-col items-center space-y-4 border-t border-slate-100 dark:border-slate-800 animate-in slide-in-from-top-5">
            {navLinks.map((link) => (
              link.href ? (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-emerald-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ) : (
                <button
                  key={link.name}
                  onClick={() => {
                    link.id && scrollTo(link.id);
                    setIsMenuOpen(false);
                  }}
                  className="text-lg font-medium text-slate-800 dark:text-slate-200 hover:text-emerald-600"
                >
                  {link.name}
                </button>
              )
            ))}
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <section id="about" className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 max-w-5xl">
          <div className="flex flex-col md:flex-row gap-12 items-center">
             <div className="w-full md:w-1/3">
                 <div style={{ backgroundImage: "url(https://images.squarespace-cdn.com/content/v1/64e756776b2a1767f13006f5/9c3ad62b-e242-4d9c-a527-653d90beda17/Olalekan__%281%29.jpg?format=2500w)", backgroundSize: "cover", backgroundPosition: "center" }} className="user_dp w-64 h-64 md:w-80 md:h-80 rounded-full mx-auto shadow-xl dark:border-4 border-white dark:border-slate-800"></div>
             </div>
             
             <div className="w-full md:w-2/3">
                <Reveal>
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6 flex items-center gap-3">
                    <Users className="text-emerald-600" />
                    About Olalekan
                    </h2>
                    <div className="prose prose-lg dark:prose-invert text-slate-600 dark:text-slate-300 leading-relaxed text-justify"> 
                    <p className="mb-4">
                        Olalekan (Lekan) Oyedepo is a <strong>Social Researcher</strong> and PhD candidate in Education and Social Sciences at the 
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
                </Reveal>

                 {/* Education Grid */}
                <div className="grid sm:grid-cols-2 gap-4 mt-8">
                <Reveal delay={200}>
                    <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all">
                    <GraduationCap className="text-emerald-600 mb-3" size={28} />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">PhD Candidate</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">University of the West of Scotland</p>
                    </div>
                </Reveal>
                <Reveal delay={400}>
                    <div className="p-5 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-100 dark:border-slate-800 hover:shadow-md transition-all">
                    <GraduationCap className="text-blue-600 mb-3" size={28} />
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white">MSc Applied Social Science</h3>
                    <p className="text-slate-500 dark:text-slate-400 text-sm">Previous Education</p>
                    </div>
                </Reveal>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* Experience Timeline */}
      <section id="experience" className="py-20 bg-white dark:bg-slate-950">
        <div className="container mx-auto px-6 max-w-4xl">
          <Reveal>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 flex items-center gap-3">
              <Briefcase className="text-emerald-600" />
              Professional Journey
            </h2>
          </Reveal>
          
          <div className="space-y-12 border-l-2 border-slate-200 dark:border-slate-800 pl-8 ml-4">
            <TimelineItem 
              delay={0}
              role="PhD Researcher" // KEPT as requested
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

      {/* Projects & Publications */}
      <section id="projects" className="py-20 bg-slate-50 dark:bg-slate-900 relative">
        <div className="container mx-auto px-6 max-w-6xl z-10">
          <Reveal>
            <div className="text-center mb-16">
                 <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Portfolio</span>
                 <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">Featured Projects & Publications</h2>
            </div>
          </Reveal>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Reveal key={index} delay={index * 100}>
                <a 
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group p-6 bg-white dark:bg-slate-800 rounded-2xl shadow-sm hover:shadow-xl transition-all border border-slate-100 dark:border-slate-700 hover:border-emerald-500/30 h-full flex flex-col transform hover:-translate-y-1"
                >
                  <div className="flex justify-between items-start mb-4">
                    <span className={`${project.color} text-xs font-bold uppercase tracking-wider bg-slate-100 dark:bg-slate-950 px-2 py-1 rounded`}>
                      {project.category}
                    </span>
                    <ArrowUpRight className="text-slate-400 group-hover:text-emerald-500 transition-colors" size={20} />
                  </div>
                  <h3 className="text-lg font-bold mb-3 text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-slate-500 dark:text-slate-400 text-sm leading-relaxed mt-auto">
                    {project.description}
                  </p>
                </a>
              </Reveal>
            ))}
             {/* Link to Blog Page for Articles */}
             <Reveal delay={600}>
                <Link 
                    href="/blog"
                    className="group p-6 bg-emerald-600 rounded-2xl shadow-md hover:bg-emerald-700 transition-all h-full flex flex-col items-center justify-center text-center text-white cursor-pointer"
                >
                    <BookOpen size={40} className="mb-4 text-emerald-200" />
                    <h3 className="text-xl font-bold mb-2">Read More Articles</h3>
                    <p className="text-emerald-100 text-sm">Visit the blog for full thoughts and publications</p>
                </Link>
             </Reveal>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 bg-white dark:bg-slate-950 relative overflow-hidden">
        <div className="container mx-auto px-6 max-w-6xl">
             <Reveal>
                <div className="text-center mb-16">
                    <span className="text-emerald-600 font-bold tracking-widest uppercase text-sm">Expertise</span>
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mt-2 mb-4">Professional Services</h2>
                    <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
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

      {/* Research & Advocacy Areas */}
      <section id="research" className="py-20 bg-slate-50 dark:bg-slate-900">
        <div className="container mx-auto px-6 max-w-6xl">
          <Reveal>
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Other Research Areas</h2>
            </div>
          </Reveal>

          <div className="grid md:grid-cols-2 gap-8 h-auto md:h-80 max-w-4xl mx-auto">
            <FlipCard 
              delay={0}
              icon={<BookOpen size={32} />}
              title="Food Aid & Inequality"
              shortDesc="Charitable food provision patterns."
              fullDesc="Examining the relationship between charitable food aid provision and socioeconomic inequalities, investigating how provision patterns respond to social disparities."
              colorClass="bg-emerald-600"
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

      {/* Sickle Cell Section */}
      <section id="sickle-cell" className="py-20 bg-slate-900 text-white relative overflow-hidden" style={{backgroundImage: 'url(https://pub-5cffb33c273f48f58febecc7e7badd2f.r2.dev/Gemini_Generated_Image_q89uymq89uymq89u.png)', backgroundSize: 'cover', backgroundPosition: 'center'}}>
        <div className="absolute bg-gradient-to-t from-black/80 via-black/60 to-black/40 dark:from-black dark:via-black/80 dark:to-black/40 top-0 left-0 bottom-0 right-0 w-full h-full"></div>
        
        <div className="container mx-auto px-6 max-w-6xl relative z-10">
            <Reveal>
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="w-full md:w-1/2">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-300 text-sm font-semibold mb-6">
                            <HeartPulse size={16} />
                            <span>Advocacy & Leadership</span>
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">Sickle Cell Advocacy & The Hope Project</h2>
                        <p className="text-slate-300 text-lg leading-relaxed mb-6">
                            As the <strong>Project Coordinator for The Hope Project Scotland</strong>, I lead initiatives supporting individuals and families affected by Sickle Cell Disease. 
                        </p>
                        <ul className="space-y-4 mb-8">
                            <li className="flex items-start gap-3">
                                <div className="mt-1 min-w-[20px]"><Users className="text-emerald-400" size={20} /></div>
                                <span className="text-slate-300">Coordinating research initiatives to improve patient outcomes.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 min-w-[20px]"><Briefcase className="text-emerald-400" size={20} /></div>
                                <span className="text-slate-300">Liaising with healthcare providers and government bodies to shape policies.</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-1 min-w-[20px]"><Globe className="text-emerald-400" size={20} /></div>
                                <span className="text-slate-300">Advocating for greater awareness and reduced stigma in Scotland.</span>
                            </li>
                        </ul>
                        <a 
                            href="https://thehopeprojectscotland.org.uk/" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-2 px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg transition-all shadow-lg hover:shadow-emerald-500/30"
                        >
                            Visit The Hope Project <ArrowUpRight size={18} />
                        </a>
                    </div>
                    <div className="w-full md:w-1/2">
                         {/* Visual representation */}
                         <div className="relative bg-slate-800 p-8 rounded-3xl border border-slate-700 shadow-2xl">
                             <h3 className="text-2xl font-bold mb-4">Impact Highlights</h3>
                             <div className="grid gap-4">
                                 <div className="bg-slate-900/50 p-4 rounded-xl border-l-4 border-blue-500">
                                     <div className="text-2xl font-bold text-blue-400">Community</div>
                                     <div className="text-sm text-slate-400">Representative on Scottish Paediatric & Adult Haemoglobinopathies Network</div>
                                 </div>
                                 <div className="bg-slate-900/50 p-4 rounded-xl border-l-4 border-purple-500">
                                     <div className="text-2xl font-bold text-purple-400">Support</div>
                                     <div className="text-sm text-slate-400">Direct support for families navigating the health system.</div>
                                 </div>
                             </div>
                         </div>
                    </div>
                </div>
            </Reveal>
        </div>
      </section>

      {/* NEW: Explore More (Gallery & Blog Teasers) */}
      <section className="py-20 bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800">
        <div className="container mx-auto px-6 max-w-6xl">
            <Reveal>
                <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">Explore More</h2>
                    <p className="text-slate-600 dark:text-slate-400">Dive deeper into my writings and community engagements.</p>
                </div>
            </Reveal>

            <div className="grid md:grid-cols-2 gap-8">
                {/* Blog Teaser */}
                <Reveal delay={100}>
                    <Link href="/blog">
                        <div className="relative group overflow-hidden rounded-2xl bg-white dark:bg-slate-800 border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all h-64 md:h-80 flex flex-col justify-center items-center text-center p-8 cursor-pointer">
                            <div className="absolute inset-0 bg-emerald-600/5 group-hover:bg-emerald-600/10 transition-colors"></div>
                            <div className="bg-emerald-100 dark:bg-slate-700 p-4 rounded-full text-emerald-600 dark:text-emerald-400 mb-4 group-hover:scale-110 transition-transform">
                                <BookOpen size={32} />
                            </div>
                            <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">Read the Blog</h3>
                            <p className="text-slate-600 dark:text-slate-400 mb-6 max-w-sm">Insights on social policy, inequality, and research methodology.</p>
                            <span className="text-emerald-600 dark:text-emerald-400 font-bold flex items-center gap-2 group-hover:gap-3 transition-all">
                                View Articles <ArrowUpRight size={18} />
                            </span>
                        </div>
                    </Link>
                </Reveal>

                {/* Gallery Teaser */}
                <Reveal delay={200}>
                     <Link href="/gallery">
                        <div className="relative group overflow-hidden rounded-2xl bg-slate-900 border border-slate-800 shadow-sm hover:shadow-xl transition-all h-64 md:h-80 cursor-pointer">
                            {/* Background Image Collage Effect */}
                            <div className="absolute inset-0 opacity-60 group-hover:opacity-40 transition-opacity bg-[url('https://images.unsplash.com/photo-1531482615713-2afd69097998?q=80&w=800&auto=format&fit=crop')] bg-cover bg-center group-hover:scale-105 duration-700"></div>
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
                            
                            <div className="absolute bottom-0 left-0 right-0 p-8 text-center flex flex-col items-center">
                                 <div className="bg-white/20 p-3 rounded-full mb-3 backdrop-blur-md">
                                     <Camera size={24} className="text-white" />
                                 </div>
                                 <h3 className="text-2xl font-bold text-white mb-2">Photo Gallery</h3>
                                 <p className="text-slate-300 mb-6">Moments from conferences, fieldwork, and events.</p>
                                 <span className="inline-flex items-center gap-2 px-6 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-semibold group-hover:bg-emerald-400 group-hover:text-white transition-all">
                                     View Gallery <ArrowUpRight size={18} />
                                 </span>
                            </div>
                        </div>
                     </Link>
                </Reveal>
            </div>
        </div>
      </section>

      {/* Footer */}
      <footer id='contact' className="bg-slate-50 dark:bg-slate-900 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
        <div className="container mx-auto px-6">
            <div className="flex flex-col md:flex-row justify-between items-center mb-8">
                <div className="text-2xl font-bold tracking-tight text-slate-900 dark:text-white mb-4 md:mb-0">
                    Olalekan Oyedepo<span className="text-emerald-600">.</span>
                </div>
                <div className="text-slate-500 dark:text-slate-400 text-sm text-center md:text-right">
                    <p className="mb-2">Social Researcher & Social Entrepreneur</p>
                    <p>Glasgow, Scotland</p>
                </div>
            </div>
            
            <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
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

      {/* Back to Top Button */}
      {showBackToTop && (
        <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 p-3 bg-emerald-600 text-white rounded-full shadow-lg hover:bg-emerald-700 hover:-translate-y-1 transition-all z-50 animate-in fade-in"
            aria-label="Back to top"
        >
            <ArrowUp size={24} />
        </button>
      )}

    </div>
  );
};

interface SocialIconProps {
  icon: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ icon }) => (
  <div className="w-10 h-10 flex items-center justify-center rounded-full bg-white dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:bg-emerald-600 dark:hover:bg-emerald-600 hover:text-white hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md border border-slate-200 dark:border-slate-700">
    {icon}
  </div>
);

export default Portfolio;