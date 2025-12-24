export const projects = [
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



  export interface GalleryItem {
    id: number;
    src: string;
    alt: string;
    caption: string;
  }


  export const galleryItems: GalleryItem[] = [
    {
      id: 1,
      src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1xw5tCjpyNeLRXzVP_r1DGoqjNXRhzLcXA&s",
      alt: "Speaking at Policy Conference",
      caption: "Keynote: Policy & Inequality 2024"
    },
    {
      id: 2,
      src: "https://media.licdn.com/dms/image/v2/D4E03AQF0eQZIHVMlUg/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1715635759964?e=1767830400&v=beta&t=nOXFnPVwaqdTe-Q01P0DR40Mea_ooARSMlE_JfeQJKo",
      alt: "Community Workshop Group",
      caption: "Community Engagement Workshop"
    },
    {
      id: 3,
      src: "https://pub-5cffb33c273f48f58febecc7e7badd2f.r2.dev/Gemini_Generated_Image_q89uymq89uymq89u.png",
      alt: "Research Interview",
      caption: "Fieldwork & Interviews"
    },
    {
      id: 4,
      src: "https://www.strath.ac.uk/media/1newwebsite/departmentsubject/socialwork/ma-ti-TbudstOJSJg-unsplash.jpg",
      alt: "University Campus",
      caption: "University of the West of Scotland"
    },
    {
      id: 5,
      src: "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop",
      alt: "Team Meeting",
      caption: "Strategic Planning Session"
    },
    {
      id: 6,
      src: "https://www.strath.ac.uk/media/1newwebsite/departmentsubject/socialwork/ma-ti-TbudstOJSJg-unsplash.jpg",
      alt: "Community Advocacy",
      caption: "Advocacy & Outreach"
    }
  ];



    export const articles = [
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
