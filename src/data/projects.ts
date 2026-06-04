export interface Project {
  title: string;
  category: string;
  summary: string;
  tools: string;
  image: string;
  link: string;
}

export const projects: Project[] = [
  {
    title: "Kavish Parmar Portfolio",
    category: "Personal Portfolio Website",
    summary:
      "My own portfolio site with a 3D character, smooth motion, and responsive storytelling.",
    tools: "React, GSAP, Three.js, Vite, TypeScript",
    image: "/images/kavish-parmar.png",
    link: "https://kavishparmar.vercel.app/",
  },
  {
    title: "Green Valley Coaching",
    category: "Education Institute Website",
    summary:
      "A clean institute website built to present classes, inquiries, and local search visibility.",
    tools: "React, Responsive Design, SEO, Vite",
    image: "/images/green-valley.png",
    link: "https://greenvalleycoachinginstitute.vercel.app/",
  },
  {
    title: "Yoga with Harshwardhan",
    category: "Yoga & Wellness Landing Page",
    summary:
      "A conversion-focused landing page for workshop signups and fast contact capture.",
    tools: "HTML, CSS, JavaScript, Google Forms Integration",
    image: "/images/yoga-with-harshwardhan.png",
    link: "https://kavishparmar.github.io/yogawithharshwardhan/",
  },
  {
    title: "Kiran Copper House",
    category: "Mobile Shop — Rajgarh, Dhar",
    summary:
      "A business website focused on trust, services, and simple discovery for customers.",
    tools: "React, Vite, SEO, Structured Data",
    image: "/images/kiran-copper-house.png",
    link: "https://kirancopperhouse.vercel.app/",
  },
  {
    title: "Kiran Copper House v2",
    category: "Mobile Shop — Redesigned Version",
    summary:
      "A refreshed second version with a cleaner experience and stronger analytics setup.",
    tools: "React, Vite, UX Revamp, Google Analytics",
    image: "/images/kiran-copper-house-v2.png",
    link: "https://kirancopperhouse2.vercel.app/",
  },
  {
    title: "Shubham Showroom",
    category: "Business Showroom Website",
    summary:
      "A responsive showroom site created to highlight products and make browsing easier.",
    tools: "React, Vite, Responsive UI",
    image: "/images/shubham_showroom.png",
    link: "https://shubhamshowroom.vercel.app/",
  },
];

