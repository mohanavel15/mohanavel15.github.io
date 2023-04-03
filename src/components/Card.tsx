import { createVisibilityObserver } from "@solid-primitives/intersection-observer";
import { createSignal, For } from "solid-js"

export type CardProps = {
	name: string,
	type: string,
	imgsrc: string,
	tags: string[],
	github: string,
	demo?: string,
	reverse: boolean,
}

export default function Card(props: CardProps) {
	const visibilityObserver = createVisibilityObserver();
	const [card, setCard] = createSignal<HTMLDivElement>();
	const isVisible = visibilityObserver(card);

	return (
		<div class={`${isVisible() && "slide-in-left"} relative flex w-1/2 flex-row p-4 h-40 rounded border-2 border-black shadow-black shadow-md`} ref={setCard}>
			<div class="w-1/2 relative">
				<div class="h-3/4 w-full relative flex flex-col">
					<span class="font-medium">{props.name}</span>
					<div class="absolute bottom-0">
						<button onClick={() => window.open(props.github)} class="border-2 border-black rounded px-1 mr-1 shadow-md shadow-black hover:shadow-none">GitHub</button>
						{props.demo && <button onClick={() => window.open(props.demo)} class="border-2 border-black rounded px-1 mr-1 shadow-md shadow-black hover:shadow-none">Demo</button>}
					</div>
				</div>
				<div class="h-1/4 w-full flex items-center absolute bottom-0">
					<For each={props.tags}>{(tag) =>
						<span class="mr-2">#{tag}</span>
					}
					</For>
				</div>
			</div>
			<div class="w-1/2 relative">
				<img class="absolute h-full right-0" src={props.imgsrc} />
			</div>
		</div>
	)
}
