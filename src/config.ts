export const config = {
    developer: {
        name: "John",
        fullName: "John Mayoka (MJ)",
        title: "Full-Stack Developer · Software Engineer · AI Engineer",
        description: "Developer and engineer behind Mayoka Inc. I build across the full stack — web apps, AI systems, cybersecurity tools, and Linux infrastructure. Always shipping, always iterating."
    },
    social: {
        github: "mayoka-inc",
        email: "mj@mayoka.dev",
        location: "Remote"
    },
    about: {
        title: "About Me",
        description: "Developer and engineer behind Mayoka Inc. I build across the full stack — web apps, AI systems, cybersecurity tools, and Linux infrastructure. From Next.js web apps and local multi-agent AI crews to self-hosted Proxmox servers and CTF security tooling — I'm always shipping, always iterating. Coding like it's 2050, but debugging like it's 1999."
    },
    experiences: [
        {
            position: "Software Engineer",
            company: "Mayoka Inc",
            period: "2026 - Present",
            location: "Remote",
            description: "Building and maintaining software products spanning web development, AI tooling, and systems engineering under the Mayoka Inc umbrella.",
            responsibilities: [
                "Developing and shipping web and AI software products",
                "Maintaining systems and infrastructure across projects",
                "Engineering tools for real-world utility and scale",
                "Leading technical direction for Mayoka Inc projects"
            ],
            technologies: ["Next.js", "TypeScript", "Python", "AI tooling", "Linux", "Systems Engineering"]
        },
        {
            position: "AI Engineer",
            company: "OpenClaw",
            period: "2025 - Present",
            location: "Remote",
            description: "Built and operate a local multi-agent AI system with manager, coder, reviewer, and QA agents powered by Ollama models and orchestrated via Discord.",
            responsibilities: [
                "Designing and orchestrating multi-agent AI workflows",
                "Running local LLMs via Ollama (Qwen, DeepSeek, LLaMA, Gemma)",
                "Building Discord-based agent control and communication layer",
                "Iterating on agent roles for coding, reviewing, and QA"
            ],
            technologies: ["Python", "Ollama", "LLaMA", "Qwen", "DeepSeek", "Gemma", "Discord", "Multi-agent systems"]
        },
        {
            position: "Developer",
            company: "mayoka.dev",
            period: "2024 - Present",
            location: "Remote",
            description: "Personal site and blog built with Next.js 15 and Payload CMS 3. Deployed on Vercel with Cloudflare DNS, featuring dynamic OG images, RSS, and llms.txt.",
            responsibilities: [
                "Building and maintaining the site with Next.js 15 and Payload CMS 3",
                "Configuring Cloudflare DNS and Vercel deployments",
                "Implementing dynamic OG images, RSS feeds, and llms.txt",
                "Writing and publishing technical blog content"
            ],
            technologies: ["Next.js 15", "Payload CMS 3", "Vercel", "Cloudflare", "TypeScript"]
        },
        {
            position: "Linux & Server Engineer",
            company: "Self-Hosted Infrastructure",
            period: "2024 - Present",
            location: "Remote",
            description: "Managing self-hosted infrastructure including a Dell PowerEdge R620, Proxmox VE hypervisor, and Linux server administration across multiple machines.",
            responsibilities: [
                "Administering Dell PowerEdge R620 and Proxmox VE",
                "Managing Linux servers and virtual machines",
                "Configuring networking, storage, and server services",
                "Maintaining uptime and reliability across infrastructure"
            ],
            technologies: ["Linux", "Proxmox VE", "Dell PowerEdge", "Server Administration", "Networking", "Virtualization"]
        },
        {
            position: "Cybersecurity Engineer",
            company: "Mayoka Inc",
            period: "2023 - Present",
            location: "Remote",
            description: "CTF competitions, phishing risk analysis, and security tooling. Built a URL parser/phishing risk analyzer and maintaining a CTF writeup collection.",
            responsibilities: [
                "Competing in Capture The Flag (CTF) challenges",
                "Building a URL phishing risk analyzer tool",
                "Maintaining a CTF writeup and walkthrough collection",
                "Researching and applying offensive and defensive security techniques"
            ],
            technologies: ["Python", "CTF tools", "Network Security", "Phishing Analysis", "Security Research", "Next.js"]
        },
        {
            position: "Full-Stack Developer",
            company: "Freelance & Projects",
            period: "2022 - Present",
            location: "Remote",
            description: "Building web applications and tools using JavaScript, TypeScript, Next.js, Python, and more. Focus on performance, clean architecture, and real-world utility.",
            responsibilities: [
                "Building full-stack web applications with Next.js and Node.js",
                "Writing clean, performant TypeScript and JavaScript",
                "Designing and integrating REST APIs and databases",
                "Shipping real-world tools with clean architecture"
            ],
            technologies: ["JavaScript", "TypeScript", "Next.js", "React", "Node.js", "Python", "PostgreSQL", "TailwindCSS"]
        }
    ],
    projects: [
        {
            id: 1,
            title: "mayoka.dev",
            category: "Full Stack",
            technologies: "Next.js 15, Payload CMS 3, TypeScript, Vercel, Cloudflare",
            image: "/images/mayoka-dev.png",
            description: "Personal site and blog. Built with Next.js 15 and Payload CMS 3 — deployed on Vercel with Cloudflare DNS, dynamic OG images, RSS feed, and llms.txt."
        },
        {
            id: 2,
            title: "OpenClaw",
            category: "AI / Multi-agent",
            technologies: "Python, Ollama, LLaMA, Qwen, DeepSeek, Gemma, Discord",
            image: "/images/openclaw.png",
            description: "Local multi-agent AI crew with manager, coder, reviewer, and QA agents. Powered by Ollama models (Qwen, DeepSeek, LLaMA, Gemma) and orchestrated via Discord."
        },
        {
            id: 3,
            title: "URL Phishing Analyzer",
            category: "Security / Full Stack",
            technologies: "Next.js, TypeScript, Python, Security Analysis",
            image: "/images/phishing-analyzer.png",
            description: "URL parser and phishing risk analyzer. Parses and scores URLs for phishing indicators, built with Next.js and TypeScript."
        },
        {
            id: 4,
            title: "Password Manager",
            category: "Full Stack",
            technologies: "Next.js, TypeScript",
            image: "/images/password-manager.png",
            description: "Password generator and manager — secure, clean, and built with Next.js and TypeScript."
        },
        {
            id: 5,
            title: "Task Manager App",
            category: "Full Stack",
            technologies: "Next.js, TypeScript",
            image: "/images/task-manager.png",
            description: "Task management application built with Next.js and TypeScript. Clean UI, fast, and focused on productivity."
        },
        {
            id: 6,
            title: "CTF Writeup Collection",
            category: "Security",
            technologies: "Markdown, CTF tools, Security research",
            image: "/images/ctf-writeups.png",
            description: "Capture The Flag writeups and walkthroughs under Mayoka Inc — documenting solutions across various CTF competitions and security challenges."
        },
        {
            id: 7,
            title: "Hearth & Hex",
            category: "Game / Narrative",
            technologies: "Game design, Narrative logic, Strategic mechanics",
            image: "/images/hearth-hex.png",
            description: "Strategic tabletop/digital crossover game with rich narrative logic — blending tactical gameplay and deep storytelling mechanics."
        }
    ],
    contact: {
        email: "mj@mayoka.dev",
        github: "https://github.com/mayoka-inc",
        linkedin: "https://linkedin.com/in/john-mayoka",
        twitter: "https://x.com/john_mayoka",
        facebook: "https://facebook.com/john.mayoka",
        instagram: "https://instagram.com/john.mayoka"
    },
    skills: {
        develop: {
            title: "AI ENGINEER",
            description: "Building intelligent multi-agent AI systems",
            details: "Engineering local multi-agent AI crews with Ollama-powered models (LLaMA, Qwen, DeepSeek, Gemma). Specializing in agent orchestration, automation pipelines, and AI-assisted development workflows.",
            tools: ["Python", "Ollama", "LLaMA", "Qwen", "DeepSeek", "Gemma", "Multi-agent", "AI Agents", "Automation", "LLMs"]
        },
        design: {
            title: "FULL-STACK",
            description: "Modern web development & scalable applications",
            details: "Building performant web applications with Next.js, Payload CMS, and TypeScript. Deploying on Vercel with Cloudflare, managing self-hosted Linux infrastructure, and shipping clean full-stack products.",
            tools: ["React", "Next.js", "TypeScript", "Node.js", "PostgreSQL", "TailwindCSS", "Payload CMS", "Vercel", "Docker", "Git"]
        }
    }
};


