"use client";
import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ArrowLeft, ZoomIn, X } from 'lucide-react';
import { Reveal } from '../Helper';
import { GalleryItem, galleryItems } from '../variables';




export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<GalleryItem | null>(null);

  // Lock body scroll when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
        document.body.style.overflow = 'unset';
    };
  }, [selectedImage]);

  

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-900 text-slate-800 dark:text-slate-200 font-sans transition-colors duration-300">
      <nav className="p-6 sticky top-0 z-40 bg-slate-50/80 dark:bg-slate-900/80 backdrop-blur-md">
        <Link href="/" className="inline-flex items-center gap-2 text-slate-600 dark:text-slate-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors font-medium">
          <ArrowLeft size={20} /> Back to Home
        </Link>
      </nav>

      <main className="container mx-auto px-6 max-w-6xl py-8">
        <Reveal>
            <header className="mb-12 text-center">
                <h1 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-4">Gallery</h1>
                <p className="text-xl text-slate-600 dark:text-slate-400">Moments from community engagements, conferences, and fieldwork.</p>
            </header>
        </Reveal>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {galleryItems.map((item, index) => (
                <Reveal key={item.id} delay={index * 100}>
                    <div 
                        onClick={() => setSelectedImage(item)}
                        className="group relative aspect-square bg-slate-200 dark:bg-slate-800 rounded-2xl overflow-hidden shadow-sm border border-slate-100 dark:border-slate-700 cursor-pointer"
                    >
                        <img 
                            src={item.src} 
                            alt={item.alt} 
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                            loading="lazy"
                        />
                        
                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white p-4 text-center">
                            <ZoomIn className="mb-2 opacity-80" size={32} />
                            <p className="font-bold text-lg">{item.caption}</p>
                            <p className="text-sm text-slate-300">Click to View</p>
                        </div>
                    </div>
                </Reveal>
            ))}
        </div>
      </main>

      {selectedImage && (
        <div 
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4 animate-in fade-in duration-200"
            onClick={() => setSelectedImage(null)}
        >
            <button 
                className="absolute top-6 right-6 text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
                onClick={() => setSelectedImage(null)}
            >
                <X size={40} />
            </button>
            
            <div 
                className="max-w-5xl max-h-[90vh] flex flex-col items-center" 
                onClick={(e) => e.stopPropagation()}
            >
                <img 
                    src={selectedImage.src} 
                    alt={selectedImage.alt} 
                    className="max-w-full max-h-[80vh] rounded-lg shadow-2xl object-contain"
                />
                <div className="mt-4 text-center">
                    <h3 className="text-white text-xl font-bold">{selectedImage.caption}</h3>
                    <p className="text-slate-400 mt-1">{selectedImage.alt}</p>
                </div>
            </div>
        </div>
      )}
    </div>
  );
}