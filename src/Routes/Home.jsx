import { useEffect } from "react";
import Card from "../Components/Card";

const Home = () => {

  useEffect(() => {
    //Nesse useEffect, deverá ser obtido todos os dentistas da API
    //Armazena-los em um estado para posteriormente fazer um map
    //Usando o componente <Card />
  }, []);

  return (
    <>
      <h1>Home</h1>
      <div className="card-grid container">
        <Card key={'dentist.matricula'} />
      </div>
    </>
  );
};

export default Home;