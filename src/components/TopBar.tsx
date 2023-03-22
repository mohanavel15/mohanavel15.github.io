export default function TopBar() {
    return (
        <div class='absolute top-0 backdrop-blur-sm z-10 text-neutral-300 h-16 w-full flex'>
            <div class="w-1/2 px-12 flex items-center">Mohan</div>
            <div class="w-1/2 px-12 flex items-center justify-end">
                <button onClick={() => document.getElementById("home").scrollIntoView({ behavior: "smooth" })}>Home</button>
                <button class='m-4' onClick={() => document.getElementById("projects").scrollIntoView({ behavior: "smooth" })}>Projects</button>
                <button onClick={() => window.open("https://github.com/mohanavel15")}>Github</button>
            </div>
        </div>
    )
}
