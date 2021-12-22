import Image from "next/image";
import{
    BellIcon,
    ChatIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewGridIcon,
} from "@heroicons/react/solid";
import {
    PlayIcon,
    ShoppingCartIcon,
} from "@heroicons/react/outline";
import { WiDayCloudyGusts } from "react-icons/wi";
import { TiWeatherCloudy } from 'react-icons/ti'
import HeaderIcon from "./HeaderIcon";
import { signOut, useSession } from "next-auth/react"
import Link from "next/link";


function Header() {
    const {data: session} = useSession();


    return (
        <div className="
            sticky 
            top-0 
            z-50
            bg-gradient-to-br from-gray-600 via-gray-800 to-black
            flex 
            items-center 
            p-2 
            lg:px-7 
            shadow-md">
            {/* Left */}
            <div className="flex items-center">
                <h1 className="font-extrabold 
                text-transparent 
                text-3xl bg-clip-text 
                font-MrDafoe
                bg-gradient-to-r from-purple-400 to-sky-600">ViceBook</h1>
                {/* <Image 
                    src="https://links.papareact.com/5me" 
                    width={40} 
                    height={40} 
                    layout="fixed"
                /> */}
                {/* <div className="
                flex 
                    ml-2 
                    items-center 
                    rounded-full 
                    bg-gray-100 p-2">
                    <SearchIcon className="h-6 text-gray-600" />
                    <input 
                        className="
                            hidden
                            md:inline-flex
                            ml-2 
                            items-center 
                            bg-transparent 
                            outline-none 
                            placeholder-gray-500
                            flex-shrink" 
                        type="text" 
                        placeholder="Search ViceBook" />
                </div> */}
            </div>


            {/* Center */}
            <div className="flex justify-center flex-grow">
                <div className="flex space-x-6 md:space-x-2 ">
                    <HeaderIcon active Icon={WiDayCloudyGusts}/>
                    <HeaderIcon Icon={TiWeatherCloudy}/>
                    <Link href="/music"><a><HeaderIcon Icon={PlayIcon}/></a></Link>
                    <HeaderIcon Icon={ShoppingCartIcon}/>
                    <HeaderIcon Icon={UserGroupIcon}/>
                </div>
            </div>



            {/* Right */}
            <div className="flex items-center sm:space-x-2 justify-end">
                <Image
                    onClick={signOut}
                    className="rounded-full cursor-pointer"
                    src={session.user.image}
                    width="40"
                    height="40"
                    layout="fixed"    
                />

                <p className="whitespace-nowrap 
                bg-clip-text 
                text-transparent 
                bg-gradient-to-l from-cyan-500 to-violet-800 
                font-limelight 
                pr-3 
                text-decoration-line: line-through
                text-decoration-color: #db2777">{session.user.name}</p> 
                <ViewGridIcon className="icon" />
                <ChatIcon className="icon" />
                <BellIcon className="icon" />
                <ChevronDownIcon className="icon" />
               

            </div>
        </div>
    )
}

export default Header
