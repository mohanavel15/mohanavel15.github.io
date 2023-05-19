import { Component, createSignal, For } from 'solid-js';
import Card from './components/Card';
import TopBar from './components/TopBar';
import { createVisibilityObserver } from "@solid-primitives/intersection-observer";

const App: Component = () => {
	const projects = [
		{
			name: "Chatapp",
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
			name: "SocialMedia",
			type: "Full-Stack",
			imgsrc: "",
			github: "https://github.com/mohanavel15/SocialMedia",
			tags: ["Go", "Go Fiber", "Solid JS", "Tailwind CSS"],
		}
	]

	const visibilityObserver = createVisibilityObserver({ threshold: 0.2 });
	const [page2, setPage2] = createSignal<HTMLDivElement>();
	const isVisible = visibilityObserver(page2);

	return (
		<div class='flex flex-col text-black bg-white overflow-y-scroll h-screen'>
			<TopBar />
			<div id="home" class='min-h-full p-16 relative flex items-center justify-center'>
				<div class='flex flex-col'>
					<span>Hi👋, I'm</span>
					<span class='text-5xl'>Mohanavel</span>
					<span class='text-lg'>I enjoy coding web stuffs!</span>
				</div>
				{!isVisible() && <span onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })} class='absolute text-6xl bottom-4 animate-bounce hover:cursor-pointer'>&#8595;</span>}
			</div>
			<div ref={setPage2} id="projects" class='min-h-full relative flex flex-col items-center justify-center'>
				<span class='text-4xl my-12'>Projects</span>
				<div class='h-full w-full grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 justify-items-center'>
					<For each={projects}>
						{(project) => <Card {...project} />}
					</For>
				</div>
			</div>
		</div>
	);
};

export default App;
