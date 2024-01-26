import { Component, For } from 'solid-js';
import Card from './components/Card';
import TopBar from './components/TopBar';

const App: Component = () => {
	const projects = [
		{
			name: "Chat App",
			type: "Full-Stack",
			imgsrc: "/assets/chatapp.png",
			github: "https://github.com/mohanavel15/Chatapp",
			tags: ["Go", "Gorilla Web Toolkit", "React JS", "Typescript", "MongoDB"]
		},
		{
			name: "Meet",
			type: "Full-Stack",
			imgsrc: "/assets/meet.png",
			github: "https://github.com/mohanavel15/Meet",
			tags: ["WebRTC", "Go", "Go Fiber", "Solid JS", "Typescript", "TailwindCSS", "GitHub Oauth"]
		},
		{
			name: "Discord UI Clone",
			type: "Frontend",
			imgsrc: "/assets/discord_ui_clone.png",
			github: "https://github.com/mohanavel15/discord-ui-clone",
			demo: "https://mohanavel15.github.io/discord-ui-clone/#/channels/@me",
			tags: ["React JS", "Tailwind CSS"]
		},
		{
			name: "Social Media",
			type: "Full-Stack",
			imgsrc: "/assets/socialmedia.png",
			github: "https://github.com/mohanavel15/SocialMedia",
			tags: ["Go", "Go Fiber", "Solid JS", "Tailwind CSS"],
		}
	];

	return (
		<div class='flex flex-col text-white overflow-y-scroll h-full'>
			<TopBar />
			<img src='/assets/split.svg' class='w-full' />
			<div class='h-96 relative flex items-center justify-center bg-[#001220]'>
				<div class='flex flex-col p-4 w-full md:w-3/4 lg:w-2/4 xl:w-1/3'>
					<span>Hi👋, I'm</span>
					<span class='text-5xl'>Mohanavel</span>
					<span class='text-lg'>Highly motivated and dedicated Full-Stack Developer with a passion for building innovative web applications. Committed to delivering high-quality code and continuously improving skills to drive impactful results.</span>
				</div>
			</div>
			<img src='/assets/split2.svg' class='w-full' />
			<div class='relative flex flex-col items-center justify-center bg-[#FFF] text-black'>
				<span class='text-4xl my-12'>Skills</span>
				<div class='grid gap-8 grid-cols-2 md:grid-cols-4 lg:grid-cols-8 justify-center'>
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg" class="h-16 w-16" />
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original-wordmark.svg" class="h-16 w-16" />
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg" class="h-16 w-16" />
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" class="h-16 w-16" />
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rust/rust-plain.svg" class="h-16 w-16" />
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original-wordmark.svg" class="h-16 w-16" />
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nginx/nginx-original.svg" class="h-16 w-16" />
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" class="h-16 w-16" />
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" class="h-16 w-16" />
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" class="h-16 w-16" />
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" class="h-16 w-16" />
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original-wordmark.svg" class="h-16 w-16" />
					<img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original-wordmark.svg" class="h-16 w-16" />
				</div>
			</div>
			<img src='/assets/split3.svg' class='w-full' />
			<div class='relative flex flex-col items-center justify-center bg-[#0066FF]'>
				<span class='text-4xl my-12'>Projects</span>
				<div class='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center'>
					<For each={projects}>
						{(project) => <Card {...project} />}
					</For>
				</div>
			</div>
			<div class='w-full h-16 bg-[#0066FF]'></div>
		</div>
	);
};

export default App;
