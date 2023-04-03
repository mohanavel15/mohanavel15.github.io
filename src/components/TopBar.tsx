export default function TopBar() {
	return (
		<div class='absolute top-0 backdrop-blur-md z-10 h-16 w-full flex'>
			<div class="w-1/2 px-12 flex items-center">Mohan</div>
			<div class="w-1/2 px-12 flex items-center justify-end">
				<button class="border-2 border-black p-2 rounded-md shadow-md shadow-black hover:shadow-none" onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>Home</button>
				<button class="border-2 border-black p-2 rounded-md shadow-md shadow-black hover:shadow-none m-4" onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>Projects</button>
				<button class="border-2 border-black p-2 rounded-md shadow-md shadow-black hover:shadow-none" onClick={() => window.open("https://github.com/mohanavel15")}>Github</button>
			</div>
		</div>
	)
}
