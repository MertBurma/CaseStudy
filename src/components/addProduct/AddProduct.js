import Header from "../header/Header";
import React, {useState} from "react";
import Axios from 'axios';
import {Link} from "react-router-dom";

export default function AddProduct() {

    const url="https://62286b649fd6174ca82321f1.mockapi.io/case-study/products"

    const [name,setName]= useState("");
    const [category,setCategory]= useState("");
    const [description,setDescription]= useState("");
    const [price,setPrice]= useState("");
    const [avatar,setAvatar]= useState("");
    const [developerEmail , setDeveloperEmail] = useState("");

        const addItem = () => {
            Axios.post(url,{
                name:name,
                category:category,
                description:description,
                price:price,
                avatar:avatar,
                developerEmail:developerEmail
            }).then(() => {
                console.log("Succes")
            });
        };

    return(
        <div>
            <Header/>
            <div className="container mx-auto  flex flex-col items-center mt-6 ">

                <input onChange={(event) =>
                    setName(event.target.value)} className=" drop-shadow-lg h-14 px-4 border-2 border-gray-200 rounded-lg w-96  mt-6 " type="text" placeholder="Name"/>

                <input onChange={(event) =>
                    setPrice(event.target.value)} className="drop-shadow-lg h-14 px-4 border-2 border-gray-200 rounded-lg w-96  mt-6" type="text" placeholder="Price"/>

                <input onChange={(event) =>
                    setCategory(event.target.value)} className=" drop-shadow-lg h-14 px-4 border-2 border-gray-200 rounded-lg w-96  mt-6" type="text" placeholder="Category "/>

                <input onChange={(event) =>
                    setDescription(event.target.value)} className="drop-shadow-lg h-14 px-4 border-2 border-gray-200 rounded-lg w-96  mt-6" type="text" placeholder="Description"/>

                <input onChange={(event) =>
                    setAvatar(event.target.value)} className="drop-shadow-lg h-14 px-4 border-2 border-gray-200 rounded-lg w-96  mt-6" type="text" placeholder="Avatar"/>

                <input onChange={(event) =>
                    setDeveloperEmail(event.target.value)} className="drop-shadow-lg h-14 px-4 border-2 border-gray-200 rounded-lg w-96  mt-6" type="text" placeholder="DeveloperEmail"/>

                <Link to="/">
                    <button onClick={addItem} className="bg-cyan-600 drop-shadow-lg h-14 px-4 border-2 border-gray-200 rounded-lg w-96  mt-6">
                        <p className="text-gray-50" >Submit</p>
                    </button>
                </Link>
            </div>
        </div>
    )
}