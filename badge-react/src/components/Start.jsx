import sideImage from './image.png'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
export const Start = () => {

    const [enteredName, setName] = useState("")
    const navigate = useNavigate();
    return (
        <div className="flex justify-between">
            <img className='rounded-lg h-screen w-[55%]' src={sideImage}></img>
            <div className="flex mt-40">

                <div className="mr-36">
                    <h2 className="text-center font-bold text-5xl">Hi There!</h2>
                    <h2 className="font-semibold mt-4 mb-2 text-gray-700">Enter your name :</h2>

                    <div class="relative">
                        <input type="text" id="floating_filled" style={{ borderWidth: '2px', borderStyle: 'solid' }} class="rounded pt-2 px-2 w-96 h-14 text-lg bg-gray-900 bg-opacity-25 dark:text-white focus:outline-2 outline-offset-4 outline-white peer" placeholder=" "
                            onChange={(e) => setName(e.target.value)} />

                        <label for="floating_filled" class="absolute text-md text-gray-600 duration-300 transform -translate-y-4 scale-75 top-4 z-10 origin-[0] start-2.5 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4  *:rtl:peer-focus:left-auto">Name</label>
                    </div>
                    <button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 active:text-gray-200 active:bg-button-red rounded 
                     text-lg font-semibold h-12 w-full dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900 mt-4"
                        onClick={() => { localStorage.setItem('name', enteredName), navigate('/landing') }}
                    >Move Ahead</button>
                </div>
            </div>
        </div>
    )
}