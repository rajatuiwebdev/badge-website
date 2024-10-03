import { Link } from 'react-router-dom'
export const Header = () => {

    const storedName = localStorage.getItem('name');
    return (
        <div className="mt-4 px-4 pb-2 shadow-xl flex justify-between">

            <div className="flex items-center gap-5">

                <svg fill="#000000" height="20px" width="20px" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 490 490" xml:space="preserve">
                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                    <g id="SVGRepo_iconCarrier">
                    <path d="M64.333,490h58.401l33.878-137.69h122.259L245.39,490h58.401l33.878-137.69h119.92v-48.162h-108.24l29.2-117.324h79.04
                    v-48.162H390.23L424.108,0H365.31l-33.878,138.661H208.79L242.668,0h-58.415l-33.864,138.661H32.411v48.162h106.298l-28.818,117.324 
                    h-77.48v48.162h65.8L64.333,490z M197.11,186.824h122.642l-29.2,117.324H168.292L197.11,186.824z"></path> </g></svg>
                <Link className="hover:text-red-500 active:text-red-700 font-semibold text-xl" to={'/landing'}> Home </Link>
                <Link className="hover:text-red-500 active:text-red-700 font-semibold text-xl" to={'/landing'}> Badges </Link>
                <Link className="hover:text-red-500 active:text-red-700 font-semibold text-xl" to={'/landing'}> About </Link>
                <Link className="hover:text-red-500 active:text-red-700 font-semibold text-xl" to={'/landing'}> Contact </Link>

            </div>

            <div className="rounded-full w-10 h-10 bg-green-500 flex items-center justify-center "> {storedName[0].toUpperCase()} </div>
        </div>
    )
}