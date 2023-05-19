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
	return (
		<div class="relative p-4 h-[95%] w-[65%] border-2 flex flex-col gap-2 border-black shadow-black shadow-md">
			<span class="font-semibold">{props.type}</span>
			<img class="w-full" src={props.imgsrc} />
			<span class="font-medium">{props.name}</span>
			<div class="flex items-center justify-center">
				<button onClick={() => window.open(props.github)} class="w-24 border-2 border-black rounded px-1 mr-1 shadow-md shadow-black hover:shadow-none">GitHub</button>
				{props.demo && <button onClick={() => window.open(props.demo)} class="w-24 border-2 border-black rounded px-1 mr-1 shadow-md shadow-black hover:shadow-none">Demo</button>}
			</div>
			<div class="relative w-full flex flex-wrap gap-2 items-center">
				<For each={props.tags}>{(tag) =>
					<span class="h-min">#{tag}</span>
				}
				</For>
			</div>
		</div>
	)
}