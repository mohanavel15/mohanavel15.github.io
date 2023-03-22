import { Component, For } from 'solid-js';
import Card from './components/Card';
import TopBar from './components/TopBar';

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

  return (
    <div class='flex flex-col bg-slate-800 overflow-y-scroll h-screen'>
      <TopBar />
      <div id="home" class='min-h-full p-16 relative flex items-center justify-center'>
        <div>
          <span>Hi there</span>
          <span>I'm Mohan</span>
        </div>
      </div>
      <div id="projects" class='min-h-full p-16 relative flex flex-col items-center justify-center'>
        <span class='text-4xl my-12 text-white'>Projects</span>
        <div class='flex w-full justify-evenly'>
          <For each={projects}>
            {(project) => <Card {...project} />}
          </For>
        </div>
      </div>
    </div>
  );
};

export default App;
