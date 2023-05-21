export default function TopBar() {
	return (
		<div class='h-16 w-full text-black flex bg-[#0066FF]'>
			<div class="w-1/2 px-12 flex items-center font-bold">Mohan</div>
			<div class="w-1/2 px-12 flex items-center justify-end">
				<button class="border-black border-2 px-4 py-2 rounded-md shadow-md hover:bg-black m-4 hover:text-white font-semibold" onClick={() => window.open("https://github.com/mohanavel15")}>Github</button>
			</div>
		</div>
	)
}
