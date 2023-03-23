import { For } from "solid-js"

export type CardProps = {
    name: string,
    type: string,
    imgsrc: string,
    tags: string[],
    github: string,
    demo?: string,
}

export default function Card(props: CardProps) {
    console.log(props.demo)
    return (
        <div class="relative flex flex-col p-4 w-96 h-auto rounded bg-slate-900 shadow-black shadow-xl">
            <span class="text-white font-bold">{props.type}</span>
            <img class="my-2" src={props.imgsrc} />
            <span class="text-white font-medium">{props.name}</span>
            <div class="flex w-full items-center justify-evenly my-2">
                {props.demo && <button onClick={() => window.open(props.demo)} class="bg-indigo-800 text-slate-300 h-10 w-16 rounded-lg font-medium shadow-md shadow-black hover:shadow-none hover:bg-indigo-900">Demo</button>}
                <button onClick={() => window.open(props.github)} class="bg-indigo-800 text-slate-300 h-10 w-16 rounded-lg font-medium shadow-md shadow-black hover:shadow-none hover:bg-indigo-900">Github</button>
            </div>
            <div class="w-full h-12 flex items-center">
                <For each={props.tags}>{(tag) =>
                    <span class="py-0.5 px-1.5 text-slate-400 font-medium h-8 flex items-center justify-center bg-slate-800 rounded-md mx-1">{tag}</span>
                }
                </For>
            </div>
        </div>
    )
}
