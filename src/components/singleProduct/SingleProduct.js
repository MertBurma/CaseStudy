import {useEffect, useState} from "react";
import {Link, useParams} from "react-router-dom";
import Header from "../header/Header";

import {GoHome} from "react-icons/go";
import {AiFillDelete} from "react-icons/ai";

export default function SingleProduct({ match }) {

  const { id } = useParams();
    useEffect(() => {
        fetchItem();

    },[])
    const [singleProduct ,setSingleProduct] = useState({})

    async function deleteOperation(id) {
        let result = await fetch("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/" + id, {
            method: 'DELETE'
        });
        result = await result.json();
        console.log(result);
    }
    const fetchItem = async () => {
        const fetchItem = await fetch(
            ` https://62286b649fd6174ca82321f1.mockapi.io/case-study/products/${id}`);
    const item =await  fetchItem.json();
    setSingleProduct(item);
}
    return(

        <div>
            <Header/>
            <div className="container mx-auto  flex flex-col items-center  mt-5">
                <div>
                    <img  className="object-cover mr-5 h-96 w-96" src={singleProduct.avatar} alt=""/>
                </div>
                <div className=" flex flex-col text-center items-center  divide-black divide-y divide-solid">
                    <div className="mb-10 flex items-center text-center">
                    <h1 className="font-mono text-4xl mt-5">{singleProduct.name}</h1>
                </div>
                <div className=" flex text-center">
                    <p className="font-sans text-xl mt-5" >{singleProduct.description}</p>
                </div>
            </div>
                <div className=" flex text-center">
                    <p className="font-mono text-4xl mt-10" >{singleProduct.price}$</p>
                </div>
                <Link to="/">
                    <div className="flex items-center mt-20 ">
                        <button onClick={()=> deleteOperation(singleProduct.id)} >
                            <AiFillDelete className=" fill-black-500 w-20 h-20"/>
                        </button>
                    </div>
                </Link>
            </div>
            <Link to="/">
                <div className="   fixed bottom-10 right-10">
                    <GoHome className=" w-24 h-24 fill-black-500"/>
                </div>
            </Link>
        </div>

    )
}