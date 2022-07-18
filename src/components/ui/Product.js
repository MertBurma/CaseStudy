import {Link} from "react-router-dom";



export default function Product({product:{name,avatar,price,id}} ) {

    return (
       <div className="drop-shadow-xl">
           <div className="border boder-none m-5 flex flex-col  p-4">
               <Link to={`/${id}`}>
                <img className="object-contain w-5/6 h-72 flex justify-center ml-5	 " src={avatar} alt={name}/>
               </Link>
                    <span className="font-mono text-2xl ">{name}</span>
                    <span className="font-mono text-center mr-14 text-xl ">${price}</span>
            </div>
        </div>
    )
}