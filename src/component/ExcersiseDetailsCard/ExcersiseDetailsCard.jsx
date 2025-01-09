import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

const ExcersiseDetailsCard = () => {
  const [data, setData] = useState({});
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    const getDetails = async () => {
      const options = {
        method: "GET",
        url: `https://exercisedb.p.rapidapi.com/exercises/exercise/${id}`,
        headers: {
          "x-rapidapi-key":
            "7cc99337admsh03c40fad1f780c8p150138jsn20a87f1d82d6",
          "x-rapidapi-host": "exercisedb.p.rapidapi.com",
        },
      };

      try {
        const response = await axios.request(options);
        console.log(response.data);
        setData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    getDetails();
  }, [id]);
  const handleBackBtn =()=>{
    navigate(-1);
  }
  return (
    <div className="h-full flex gap-4 items-center ">
    <button className="fixed  top-8" onClick={handleBackBtn}>← back</button>
      <div className="flex justify-center items-center">
        <img className="h-full" src={data.gifUrl} alt="" />
      </div>
      <div className="flex flex-col justify-center items-start">
        <h1 className="text-2xl font-bold">Name: {data.name}</h1>
        <p>Target Area: {data.target}</p>
        <h5>Instructions :</h5>
        <ul className="flex flex-col items-start">
          {data.instructions &&
            data.instructions.map((item, idx) => {
              return <li key={idx}>{item}</li>; // Return `item` instead of the string 'item'
            })}
        </ul>
      </div>
    </div>
  );
};

export default ExcersiseDetailsCard;
