import React, { useState,useEffect } from 'react'
import axios from 'axios';
import Card from '../Card/Card';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const [data,setData] = useState([]);  
  // const [searchQuery,setSearchQuery]=useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    getBodyList();
  },[])





  const getBodyList = async ()=>{
      const options = {
        method: 'GET',
        url: 'https://exercisedb.p.rapidapi.com/exercises/bodyPartList',
        headers: {
          'x-rapidapi-key': '7cc99337admsh03c40fad1f780c8p150138jsn20a87f1d82d6',
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
      };
      
      try {
        const response = await axios.request(options);   
        
        setData(["all",...response.data]);
      } catch (error) {
        console.error(error);
      }
  }
      const handleClick=(bodyPart) =>{
        navigate(`/bodypart/${bodyPart}`)
      }

  return (
    <div className='my-20 px-16 justify-center items-center grid grid-cols-2 md:grid-cols-4 gap-4 ' >
      {
        data.map((bodyPart,idx)=>{
          return <Card key={idx} name={bodyPart}  onClick={()=>handleClick(bodyPart)} />
        })
      }
    </div>
  )
}

export default Home
