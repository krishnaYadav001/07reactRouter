import React,{useEffect} from 'react'
import { useLoaderData } from 'react-router-dom'

function GitHub() {
  const data=useLoaderData()
  /*const [data,setData]= usseState([])
  useEffect(() =>{
    fetch('https://api.github.com/users/hiteshchoudhary').then(response => response.json())
    .then(data =>{
      console.log(data);
      setData(data)
    })
  },[])*/
  return (
    <div className='text-center m-4 bg-gray-600 text-white p-4 text-3xl'>GitHub followers: {data.followers}
    <img  src="https://th.bing.com/th?id=OIP.KLaPoZTGRuV_bcu7s-JmugHaHX&w=250&h=249&c=8&rs=1&qlt=90&o=6&dpr=1.7&pid=3.1&rm=2" alt="Git picture" width={300}/>
    </div>
  )
}

export default GitHub

export const githubInfoLoader= async() => {
  const response= await fetch('https://api.github.com/users/hiteshchoudhary')

  return response.json()
}