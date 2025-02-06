import { FileText, Github, Linkedin, Mail } from "lucide-react";

const profileData = {
	hero: {
		name: "Rahman Muhaemin",
		title: "Fullstack Developer",
		contactButton: {
			text: "Contact Me",
			href: "#contact",
		},
		resumeButton: {
			text: "Resume",
			href: "/rahman-muhaemin-resume.pdf",
			icon: FileText,
		},
	},
	about: {
		title: "About Me",
		description:
			"I'm a passionate fullstack developer with experience in building web applications. I specialize in React, Node.js, and TypeScript, and I love creating efficient, scalable, and user-friendly solutions. When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or enjoying a good cup of coffee.",
	},
	experience: {
		title: "Work Experience",
		items: [
			{
				company: "PT.Semesta Arus Teknologi",
				duration: "Aug 2023 - Present",
				position: "Fullstack Developer",
				responsibilities: [
					"Developing RESTful APIs using Golang Gin",
					"Migration from Python Flask to Golang Gin",
					"Using Apache Kafka as a message broker",
					"Implementing UI with SvelteKit",
					"Integrating Golang Gin API with SvelteKit",
					"Deployment with Docker",
					"Version control with Git",
					"Application maintenance",
					"Using Jenkins for CI/CD",
					"Container management with Portainer",
					"Utilizing ClickHouse for Big Data",
					"Using MongoDB as a database",
				],
			},
		],
	},
	projects: {
		title: "Projects",
		items: [
			{
				title: "Toolkit-hub",
				date: "25 Sep 2024 - 30 Sep 2024",
				description:
					"Toolkit-hub is a comprehensive platform offering a wide range of utilities including generators, converters, and image processing tools. It provides efficient, user-friendly solutions for various digital needs in one place.",
				stacks: ["Next.js", "TailwindCSS", "Shadcn UI"],
				link: "https://github.com/thxrhmn/toolkit-hub",
			},
			{
				title: "Sarujuk Studio",
				date: "12 Jun 2024 - 15 Jun 2024",
				description:
					"Sarujuk Studio specializes in social media management, helping businesses grow their online presence. We offer tailored strategies for content creation, community engagement, and analytics to drive business growth through effective social media marketing.",
				stacks: ["Sveltekit", "Tailwind"],
				link: "https://github.com/thxrhmn/sarujuk-studio",
			},
			{
				title: "Torrent Metadata Extractor",
				date: "09 Jan 2024 - 11 Jan 2024",
				description:
					"A simple tool for extracting metadata from torrent files. Users can easily access detailed information about torrent files without the need to open a torrent client.",
				stacks: ["Golang"],
				link: "https://github.com/thxrhmn/torrent-metadata-extractor",
			},
			{
				title: "Go Shorturl",
				date: "20 Dec 2023 - 25 Dec 2023",
				description:
					"An innovative URL shortening service with a barcode scanning feature. Users can scan product or document barcodes to easily create short links, making it faster and more practical.",
				stacks: ["Golang", "Next.js", "Shadcn UI"],
				link: "https://github.com/thxrhmn/go-shorturl",
			},
			{
				title: "Torrent Scraper",
				date: "16 Sep 2023 - 29 Sep 2023",
				description:
					"An open-source project that provides an unofficial API to access and collect information from various torrent sites. It enables browsing, searching, and accessing torrent-related data from multiple sources.",
				stacks: ["Golang"],
				link: "https://github.com/thxrhmn/torrent-scraper",
			},
			{
				title: "Holyways",
				date: "21 May 2023 - 28 May 2023",
				description:
					"A crowdfunding and donation platform similar to Kitabisa.com. It empowers individuals, groups, and organizations to easily raise funds and garner support for various social, humanitarian, creative, or personal initiatives.",
				stacks: ["React", "Tailwind", "Golang", "PostgreSQL"],
				link: "https://github.com/thxrhmn/holyways",
			},
			{
				title: "Dumbflix",
				date: "01 March 2023 - 20 April 2023",
				description:
					"An innovative web project offering an engaging entertainment experience similar to Netflix. This platform provides users with easy access to various entertainment content across internet-connected devices.",
				stacks: ["React", "Tailwind", "Golang", "PostgreSQL"],
				link: "https://github.com/thxrhmn/dumbflix",
			},
		],
	},
	skills: {
		title: "Skills",
		items: [
			"HTML",
			"CSS",
			"SASS",
			"Tailwind",
			"Bootstrap",
			"Javascript",
			"Node.js",
			"Golang",
			"Python",
			"React.js",
			"React Native",
			"Next.js",
			"Sveltekit",
			"MySQL",
			"PostgreSQL",
			"MongoDB",
			"SQLite",
			"Git",
			"Nginx",
			"Docker",
			"Jenkins",
			"Linux",
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
