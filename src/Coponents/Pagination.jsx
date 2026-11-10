
import React from 'react'
import { useState } from 'react'

function Dynamic() {

      const data = ["Apple", "Orange", "Mango", "Banana", "Grapes","shamil" , "muhammed" ,"hello" ,"java" ," script" , "bridgeon" , "Apple", "Orange", "Mango", "Banana", "Grapes","shamil" , "muhammed" ,"hello" ,"java" ," script" , "bridgeon"];

    const [page , setPage] = useState(1)
    const itemperpage = 4

    const totalPage = Math.ceil(data.length / itemperpage)


    const start = (page - 1) * itemperpage
    const end = start + itemperpage
    const ProductData = data.slice(start , end)


    function next(){
        if(end < data.length){
            setPage(page + 1)
        }
    }


    function Prev(){
        if(page > 1){
            setPage(page - 1)
        }
    }
  return (
    <div>


         <h2>Dynamic Pagination</h2>

         
         {/* {ProductData.map((item) => (
            <li>{item}</li>
         ))} */}




         {ProductData.map((item , index) => (
            <p key={index}>{item}</p>

         ))}


         
            <button onClick={Prev} disabled={page === 1}>Prev</button>



           {Array.from(
            {length : totalPage} , (_,index) => (
                <button key={index} onClick={() => setPage(index + 1)}>{index + 1}</button>
            )
           )}


           <button onClick={next} disabled={page === totalPage}>Next</button>
      
    </div>
  )
}

export default Dynamic