import axios from 'axios'
import { useEffect, useState } from 'react';

function All() {
  

    const  [data , setData] = useState([])

    const api = axios.create({
        baseURL : "http://localhost:3002"
    });
  

    useEffect(() => {
      const response =  api.get("/monthly")
       .then((response) => {
        setData(response.data)
       })
    
    },[])

    
console.log(data)
  return (

   
        // <section className="flex  justify-center text-center mt-10">

        <div className='flex  flex-col text-center mt-10 gap-6'> 



   

            <div className='text-blue-950 font-semibold text-[13px]]'>
                <p>LOREM IPSUM</p>
            </div>

            <div className='text-blue-950 text-3xl'>
                <span className='text-blue-600 text-4xl'>Donec lacinia </span>
                turpis non
                <h3>sapien lobortis pretium</h3> 
            </div>

            <div>
                <p className='text-purple-700 text-[20px]'>integer feugiat massa sapien, vitae tristique metus suscipit nec.</p>
            </div>


            <div>
                <span className='text-purple-700 font-semibold hover:text-purple-300'>Monthly</span>
                <button>----*-----</button>
                <span className='text-purple-700 font-semibold hover:text-purple-300'>Annual</span>
            </div>


            <div className='flex justify-center gap-x-20'>
                {data.map((item) => (
                    <div key={item.id}
                    className='border border-gray-300 h-fit w-[300px] flex flex-col items-center gap-4 rounded-2xl'>

                          
                          <h3 className='font-bold text-2xl text-blue-900'>{item.name}</h3>

                          <h5>
                            <span className='text-2xl font-semibold'>${item.price}</span> {""} /mo</h5>
                      
                    
                          <h4 className='text-[18px]'>6 Emails</h4>
                          <h4 className='text-[18px]'>2 DataBase</h4>
                          <h4 className='text-[18px]'>Unlimited Domains</h4>
                          <h4 className='text-[18px]'>25 GB Storage</h4>


                          <button className='text-blue-700 border w-40 h-10 rounded-2xl'>
                            SELECT PLAN
                          </button>

                          <h4 className='text-blue-600'>Learn more</h4>


                    </div>
                ))}
            </div>
        </div>


        // </section>
      

  )
}

export default All
