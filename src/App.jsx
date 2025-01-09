import "./App.css";
import BodyPartExercise from "./component/BodyPartExercise/BodyPartExercise";
import ExcersiseDetailsCard from "./component/ExcersiseDetailsCard/ExcersiseDetailsCard";
import Home from "./component/home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./component/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/bodypart/:name" element={<BodyPartExercise />} />
          <Route path="/exercise/:id" element={<ExcersiseDetailsCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
