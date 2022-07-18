import { AiOutlineUser } from 'react-icons/ai'
import {Link} from "react-router-dom";


export default function Header() {
    return(
        <div className="bg-neutral-800 ">
            <div className="container mx-auto h-24 flex items-center justify-between">
                <Link to="/">
                    <img src="https://upayments.com/en/wp-content/uploads/sites/4/2020/07/upay-logo-1.png" alt=""/>
                </Link>
                <div className="flex text-3xl font-normal">
                        <div  className=" flex items-center text-white text-opacity-80 tracking-wide transition-all hover:text-opacity-100">
                            <AiOutlineUser/>
                            Register
                        </div>
                </div>
            </div>
        </div>
    )
}