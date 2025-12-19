"use client";
import Link from 'next/link';
import { ArrowLeft, BookOpen, ArrowUpRight } from 'lucide-react';

export default function Blog() {
  const articles = [
    {
      title: "Co-production in Scottish Policy",
      date: "September 2024",
      url: "https://www.strath.ac.uk/humanities/centreforhealthpolicy/ourblog/co-productioninscottishpolicyblogseptember2024/",
      excerpt: "Contribution to the Centre for Health Policy blog regarding policy co-production. Discussing the nuances of involving community voices in high-level decision making.",
      tags: ["Policy", "Scotland", "Research"]
    },
    // Add more articles here
    {
        title: "Understanding Food Aid Inequalities",
        date: "Coming Soon",
        url: "#",
        excerpt: "An upcoming deep dive into the mechanisms of charitable food aid in the UK and its socioeconomic implications.",
        tags: ["Food Aid", "Inequality"]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300">
      <nav className="p-6">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-emerald-600 transition-colors font-medium">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </nav>

      <main className="container mx-auto px-6 max-w-4xl py-12">
        <header className="mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Writings & Thoughts</h1>
            <p className="text-xl text-slate-600 dark:text-slate-400">Exploring social justice, policy, and community engagement.</p>
        </header>

        <div className="grid gap-8">
          {articles.map((article, idx) => (
            <article key={idx} className="bg-white dark:bg-slate-800 p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-700 hover:shadow-lg transition-all">
              <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-2 mb-3">
                      {article.tags.map(tag => (
                          <span key={tag} className="px-3 py-1 bg-slate-100 dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-xs font-bold uppercase tracking-wider rounded-full">{tag}</span>
                      ))}
                  </div>
                  <span className="text-slate-400 text-sm">{article.date}</span>
              </div>
              <h2 className="text-2xl font-bold mb-3 text-slate-900 dark:text-white hover:text-emerald-600 transition-colors">
                  <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
              </h2>
              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">{article.excerpt}</p>
              <a href={article.url} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-emerald-600 font-medium hover:underline">
                  Read Full Article <ArrowUpRight size={16} />
              </a>
            </article>
          ))}
        </div>
      </main>
    </div>
  );
}