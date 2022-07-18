import * as React from 'react';
import {useEffect, useState} from "react";
import Product from "../ui/Product";
import {Link} from "react-router-dom";

import { BsFillPlusCircleFill } from "react-icons/bs"

export default function Products(){
    const [products ,setProducts] = useState([]);
    const [input,setInput] = useState("");
    const [output,setOutput] = useState([]);
    const [categories,setCategories] = useState([])
    const [categoriesInput,setCategoriesInput] = useState("")
    const [categoriesOutput,setCategoriesOutput] = useState([])

    const fetchItem = async () => {
        const fetchItem = await fetch(
            ` https://62286b649fd6174ca82321f1.mockapi.io/case-study/categories/`);

        const item =await  fetchItem.json();
        setCategories(item);
    }


    useEffect(() => {
        fetch("https://62286b649fd6174ca82321f1.mockapi.io/case-study/products")
            .then(response => response.json())
            .then(response => {
                setProducts(response)
                setOutput(response)
                setCategoriesOutput(response)
            })
        fetchItem();
    },[])

    const filter= (e) => {
        if (e.target.value == ''){
            setProducts(output)
        } else {
         const filterResult = output.filter(item => item.name.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setProducts(filterResult)
        }
        setInput(e.target.value)

    }
    const filterCategory=(e) => {
        if(e.target.value == ''){
            setProducts(categoriesOutput)
        } else {
            const categoryFilterResult = categoriesOutput.filter(item => item.category.toLocaleLowerCase().includes(e.target.value.toLocaleLowerCase()))
        setProducts(categoryFilterResult)
        }
        setCategoriesInput(e.target.value)

    }
    return(
        <div>
            <div className="bg-gray">
                <div className="container mx-auto h-24 flex items-center justify-between">
                    <input onInput={(e) => filter(e)} value={input} className=" drop-shadow-lg h-14 px-4 border-2 border-gray-200 rounded-lg w-96 " type="text" placeholder="Macbook,PS5"/>
                    <input onInput={(e) => filterCategory(e)} value={categoriesInput} className="drop-shadow-lg h-14 px-4 border-2 border-gray-200 rounded-lg w-48 " type="text" placeholder="Categories"/>
                </div>
            </div>
        <div className="py-4 static ">
            <div className="container mx-auto">
                <h3 className="text-sm font-semibold mb-3"> Products</h3>
                <div className="grid grid-cols-4">
                    {products && products.map((product,index) => <Product key={product.id} product={product}/>)}
                </div>

            </div>
        </div>
                <Link to="addItem">
                    <div className="   fixed bottom-10 right-10">
                       <BsFillPlusCircleFill className=" w-24 h-24 fill-black-500"/>

                    </div>
            </Link>
        </div>
    )
}