import { Component, createSignal, For } from 'solid-js';
import Card from './components/Card';
import TopBar from './components/TopBar';
import { createVisibilityObserver } from "@solid-primitives/intersection-observer";

const App: Component = () => {
	const projects = [
		{
			name: "Chatapp",
			type: "Full-Stack",
			imgsrc: "https://cdn.discordapp.com/attachments/539343946418225152/1086652382173204561/image.png",
			github: "https://github.com/mohanavel15/Chatapp",
			tags: ["Go", "React", "MongoDB", "TailwindCSS"]
		},
		{
			name: "Meet",
			type: "Full-Stack",
			imgsrc: "https://cdn.discordapp.com/attachments/539343946418225152/1087971760269439057/home.png",
			github: "https://github.com/mohanavel15/Meet",
			tags: ["GoFiber", "SolidJS", "TailwindCSS"]
		},
		{
			name: "Discord UI Clone",
			type: "Frontend",
			imgsrc: "https://media.discordapp.net/attachments/539343946418225152/1087972043833753700/Group.png?width=1316&height=616",
			github: "https://github.com/mohanavel15/discord-ui-clone",
			demo: "https://mohanavel15.github.io/discord-ui-clone/#/channels/@me",
			tags: ["React", "TailwindCSS"]
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
			<div ref={setPage2} id="projects" class='min-h-full p-16 relative flex flex-col items-center justify-center'>
				<span class='text-4xl my-12'>Projects</span>
				<div class='flex flex-col w-full h-full justify-evenly items-center'>
					<For each={projects}>
						{(project, index) => <Card {...project} reverse={index() % 2 === 0} />}
					</For>
				</div>
			</div>
		</div>
	);
};

export default App;
