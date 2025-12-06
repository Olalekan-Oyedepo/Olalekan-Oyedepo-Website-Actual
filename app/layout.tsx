import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const SITE_URL = "https://www.olalekanoyedepo.com/"; 
const NAME = "Oyedepo Olalekan";
const ROLE = "PhD Candidate & Social Policy Researcher";
const DESCRIPTION = "PhD candidate at UWS researching charitable food aid and inequalities. Project Coordinator for The Hope Project Scotland and advocate for Sickle-cell disease awareness.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  
  title: {
    default: `${NAME} | ${ROLE}`,
    template: `%s | ${NAME}`, 
  },
  
  description: DESCRIPTION,

  keywords: [
    "Oyedepo Olalekan",
    "Lekan Oyedepo",
    "Social Justice Researcher",
    "Food Aid Inequality UK",
    "University of the West of Scotland",
    "The Hope Project Scotland",
    "Sickle-cell advocacy",
    "Social Policy Scotland",
    "Migrant health research",
  ],
  
  // 5. OPEN GRAPH (For LinkedIn/Twitter/Facebook cards)
  openGraph: {
    title: `${NAME} - ${ROLE}`,
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: NAME,
    locale: "en_GB",
    type: "profile",
    images: [
      {
        url: "https://images.squarespace-cdn.com/content/v1/64e756776b2a1767f13006f5/9c3ad62b-e242-4d9c-a527-653d90beda17/Olalekan__%281%29.jpg",
        width: 1200,
        height: 630,
        alt: NAME,
      },
    ],
  },
  
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

// 8. JSON-LD SCHEMA (The "Knowledge Graph" Generator)
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  alternateName: "Lekan Oyedepo",
  url: SITE_URL,
  jobTitle: ["PhD Candidate", "Project Coordinator"],
  affiliation: [
    {
      "@type": "Organization",
      name: "University of the West of Scotland",
    },
    {
      "@type": "Organization",
      name: "The Hope Project Scotland",
    },
  ],
  alumniOf: [
    {
      "@type": "CollegeOrUniversity",
      name: "University of the West of Scotland", // PhD (Current)
    },
  ],
  knowsAbout: [
    "Social Justice",
    "Charitable Food Aid",
    "Socioeconomic Inequalities",
    "Sickle-cell Disease",
    "Community Advocacy",
  ],
  description: DESCRIPTION,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}