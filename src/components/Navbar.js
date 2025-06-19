import Image from "next/image"

const Navbar = () => {

    return(

        <div className="flex justify-between items-center px-[20px] pr-[75px] py-[5px] bg-[#2b293afa]">
            <div className="">
          <Image  src="/assets/logo.png"
             width = {110}
             height = {110}
             alt =  "Logo"
              />
         </div>
        <nav>
            <ul className="flex justify-end items-center gap-[30px] text-white">
                <li id="list-none font-[Lexend] font-bold not-italic text-[#BB2026]"><a className="text-xl hover:text-[#c75656]" href="#">Home</a></li>
                <li><a className="text-xl hover:text-[#ff7575]" href="#">Genres</a></li>
                <li><a className="text-xl hover:text-[#ff7575]" href="#">Movies</a></li>
                <li><a className="text-xl hover:text-[#ff7575]" href="#">Series</a></li>
                 <li><a className="text-xl hover:text-[#ff7575]" href="#">Favorites</a></li>
                
            </ul>
        </nav>
    </div>

    )
}

export default Navbar