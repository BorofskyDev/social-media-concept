function HeaderIcon({ Icon, active }) {
    return (
        <div className="
            flex
            items-center
            cursor-pointer 
            md:px-10 
            sm:h-10 
            md:hover:bg-gradient-to-l from-black via-fuchsia-900 to-black
            rounded-full
            active:border-2
            active:border-cyan-700
            hover:text-pink-300 hover:bg-gradient-to-l from-cyan-500 to-violet-800
            hover:shadow-xl hover:shadow-pink-700/100 hover:animate-pulse
            group">
            <Icon className={`
            h-3 
            text-pink-900 
            text-center 
            sm:h-7 
            mx-auto 
            group-hover:text-cyan-500
            ${active && 'text-pink-500'}
            `}/>
        </div>
    )
}

export default HeaderIcon
