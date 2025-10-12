import { FileText, Github, Linkedin, Mail } from "lucide-react";

const profileData = {
	hero: {
		name: "Rahman Muhaemin",
		title: "Full-Stack Web Developer",
		contactButton: {
			text: "Contact Me",
			href: "#contact",
		},
		resumeButton: {
			text: "Resume",
			href: "/cv_fullstack_developer_rahman_muhaemin.pdf",
			icon: FileText,
		},
	},
	about: {
		title: "About Me",
		description:
			"Full-Stack Web Developer with 2 years of hands-on experience building scalable and efficient web applications, primarily using Go (Golang) for backend development. Proficient in both frontend and backend technologies, with a solid understanding of RESTful APIs, databases, and cloud-based deployment. Passionate about clean code, and performance optimization",
	},
	experience: {
		title: "Work Experience",
		items: [
			{
				company: "PT Semesta Arus Teknologi",
				duration: "Aug 2023 - Present",
				position: "Fullstack Developer",
				responsibilities: [
					"Developed and maintained responsive web applications using Golang on the backend and Sveltekit / React.js / Next.js on the frontend.",
          "Designed and implemented RESTful APIs for seamless integration between frontend and backend services.",
          "Built scalable and secure backend services using Go, with PostgreSQL/MySQL/MongoDB for data storage.",
          "Collaborated closely with UI/UX designers and product managers to implement features based on user needs and business requirements.",
          "Wrote clean, maintainable, and well-documented code following best practices and team guidelines.",
          "Deployed and monitored applications using Docker and Jenkins-based CI/CD pipelines on internal servers.",
          "Optimized performance and improved reliability across the full stack through debugging and refactoring.",
				],
			},
		],
	},
	projects: {
		title: "Projects",
		items: [
			{
				title: "Whatsapp Blaster",
				date: "Mar 2025 - Jul 2025",
				description:
					"Developed a production-ready WhatsApp blaster service for bulk messaging, featuring dual backends (Whatsmeow, ADB) for redundancy, a robust Go backend with RESTful APIs, and a multi-session architecture.",
				stacks: ["Go", "Whatsmeow", "ADB", "Docker", "Jenkins"],
				link: "#",
			},
      {
					title: "Getcontact Scraper",
					date: "Nov 2024 - Dec 2025",
					description:
						"Built an automated scraping system for Getcontact using Puppeteer, featuring a distributed Redis task queue, proxy rotation, and a realtime logging interface with Socket.IO.",
					stacks: ["Puppeteer", "Redis", "MongoDB", "Socket.IO"],
					link: "#",
				},
			{
				title: "Toolkit Hub",
				date: "Oct 2024 - Dec 2025",
				description:
					"A web-based platform with over 40 developer and productivity tools, built with Next.js and ShadcnUI for a fast and responsive frontend.",
				stacks: ["Next.js", "ShadcnUI"],
				link: "#",
			},
			{
				title: "Pinterest Scraper",
				date: "Jun 2025 - Jun 2025",
				description:
					"A high-performance, self-hosted scraping API built with TypeScript and Cheerio to extract and download Pinterest pins and boards without a headless browser.",
				stacks: ["TypeScript", "Cheerio"],
				link: "#",
			},
			{
				title: "HMPSSH",
				date: "Jan 2025 - Jan 2025",
				description:
					"A minimalist, practical, and portable terminal-based SSH connection management tool written in Go to simplify remote server access for developers and sysadmins.",
				stacks: ["Go"],
				link: "#",
			},
		],
	},
	skills: {
		title: "Skills",
		items: [
      "Golang",
      "Javascript",
      "Node.js",
      "Python",
      "MySQL",
      "PostgreSQL",
      "SQLite",
      "MongoDB",
      "Redis",
			"HTML",
			"CSS",
			"SASS",
			"Tailwind CSS",
			"Bootstrap",
			"JavaScript",
      "React & React Native",
      "Next.js",
      "SvelteKit",
      "Hono",
      "Bun",
		],
	},
	contact: {
		title: "Get in Touch",
		items: [
			{
				text: "Email",
				href: "mailto:rahmanmuhaemin@gmail.com",
				icon: Mail,
			},
			{
				text: "GitHub",
				href: "https://github.com/thxrhmn",
				icon: Github,
			},
			{
				text: "LinkedIn",
				href: "https://linkedin.com/in/rahman-muhaemin",
				icon: Linkedin,
			},
		],
	},
};

export default profileData;