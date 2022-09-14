import "./App.css";
import React, { useState, useEffect } from "react";
import API from "./config/api";
import { LoginForm } from './components/LoginForm';

function App() {
  const [trainer, setTrainer] = useState();
  console.log(trainer);
  const getTrainerId = async () => {
    const trainerReponse = await API.get(`/trainer/1`);
    const { data } = trainerReponse;
    setTrainer(data.trainer[0]);
  };
  useEffect(() => {
    getTrainerId();
  }, []);

  return <><LoginForm /></>;
}

export default App;
