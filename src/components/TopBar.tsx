export default function TopBar() {
    return (
        <div class='absolute top-0 backdrop-blur-md z-10 text-neutral-300 h-16 w-full flex'>
            <div class="w-1/2 px-12 flex items-center">Mohan</div>
            <div class="w-1/2 px-12 flex items-center justify-end">
                <button class="bg-indigo-800 p-2 rounded-md shadow-md shadow-black hover:shadow-none hover:bg-indigo-900 " onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>Home</button>
                <button class="bg-indigo-800 p-2 rounded-md shadow-md shadow-black hover:shadow-none hover:bg-indigo-900 m-4" onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>Projects</button>
                <button class="bg-indigo-800 p-2 rounded-md shadow-md shadow-black hover:shadow-none hover:bg-indigo-900 " onClick={() => window.open("https://github.com/mohanavel15")}>Github</button>
            </div>
        </div>
    )
}
