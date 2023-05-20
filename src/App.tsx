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
		<div class='flex flex-col text-black bg-white overflow-y-scroll h-full'>
			<TopBar />
			<div class='h-96 relative flex items-center justify-center'>
				<div class='flex flex-col p-4 w-full md:w-3/4 lg:w-2/4 xl:w-1/3'>
					<span>Hi👋, I'm</span>
					<span class='text-5xl'>Mohanavel</span>
					<span class='text-lg'>Highly motivated and dedicated Full-Stack Developer with a passion for building innovative web applications. Committed to delivering high-quality code and continuously improving skills to drive impactful results.</span>
				</div>
			</div>
			<div class='relative flex flex-col items-center justify-center'>
				<span class='text-4xl my-12'>Projects</span>
				<div class='grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-center'>
					<For each={projects}>
						{(project) => <Card {...project} />}
					</For>
				</div>
			</div>
			<div class='w-full h-16'></div>
		</div>
	);
};

export default App;
