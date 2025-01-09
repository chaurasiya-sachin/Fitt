import React, { useEffect, useState } from 'react';
import { useParams,useNavigate } from 'react-router-dom';
import axios from 'axios';
import BodyPartExerciseCard from '../BodyPartExerciseCard/BodyPartExerciseCard';

const BodyPartExercise = () => {
  const { name } = useParams(); // Extract bodyPart from useParams
//   console.log("bodyPart",name);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchExercises = async () => {
      const url = name === 'all' 
        ? 'https://exercisedb.p.rapidapi.com/exercises'
        : `https://exercisedb.p.rapidapi.com/exercises/bodyPart/${name}`;
      
      const options = {
        method: 'GET',
        url,
        params: {
    limit: '10',
    offset: '0'
  },
        headers: {
          'x-rapidapi-key': '7cc99337admsh03c40fad1f780c8p150138jsn20a87f1d82d6',
          'x-rapidapi-host': 'exercisedb.p.rapidapi.com'
        }
      };

      try {
        const response = await axios.request(options);
        // console.log(response.data); // Log the fetched data
        setData(response.data); // Set the fetched data into state
      } catch (error) {
        console.error(error);
      }
    };

    fetchExercises(); // Call the async function
  }, [name]); // Dependency array should include bodyPart

  const handleBackBtn =()=>{
    navigate(-1);
  }

  const handleExcersiseDetails =(id)=>{
    navigate(`/exercise/${id}`);
  }

  return (
    <div>
      <h1>{name.charAt(0).toUpperCase()+name.substring(1)} Excersises</h1>
      <button onClick={handleBackBtn}>← Back</button>
      <ul className='flex gap-4 flex-wrap '>
        {data.map((exercise, idx) => (
          <BodyPartExerciseCard key={idx} onClick={()=>{
            handleExcersiseDetails(exercise.id)
          }} gifUrl={exercise.gifUrl} name={exercise.name} equipment={exercise.equipment} target={exercise.target} />
        ))}
      </ul>
    </div>
  );
};

export default BodyPartExercise;
