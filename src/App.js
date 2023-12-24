import './App.css';
import ManageData from './components/ManageData';
import ListRender from './components/ListRender';
import ConditionalRender from './components/ConditionalRender';
import ShowUserName from './components/ShowUserName';
import { useState } from 'react';
import CarDetails from './components/CarDetails';
import Fragments from './components/Fragments';
import Container from './components/Container';

function App() {

  // const name = "Joaquim";
  const [userName] = useState("Maria");

  const cars = [
    {id: 1, brand: "Ferrari", color: "Amarelo", newCar: true, km: 0},
    {id: 2, brand: "Chevrolet", color: "Verde", newCar:false, km: 34644},
    {id: 3, brand: "KIA", color: "Branco", newCar:false, km: 13564}

  ];


  return (
    <div className="App">
      <h1>Avançando em react</h1>
      <div>
        <img src="{boleta&vesgo}" alt="cinturinha" />
      </div>
      <ManageData/>
      <ListRender/>
      <ConditionalRender/>
      {/* <ShowUserName name = "Joaquim"/> */ /* Pode passar a props desse jeito ou do jeito de baixo, declarando variável e passando pro componente */}
      {/* <ShowUserName name = {name}/> */ /* Pode passar a props desse jeito ou do jeito de baixo, criando um useState e passando pro componente */}
      {/* props */}
      <ShowUserName name = {userName}/>
      {/* destructuring props */}
      <CarDetails brand = "VW" km = {100000} color = "Azul" newCar = {false}/>
      {/* reaproveitamento */}
      <CarDetails brand = "Ford" color = "Vermelha" km = {0} newCar = {true}/>
      <CarDetails brand = "Fiat" color = "Branco" km = {4000} newCar = {false}/>
      {/* loop em array de  objetos*/}
      {cars.map((car) => (
        <CarDetails 
        brand={car.brand} 
        color={car.color} 
        km={car.km} 
        newCar={car.newCar}/>
      ))}

      {/* Fragments */}
      <Fragments propFragment = "teste"/>
      {/* Children Props */}
      <Container myValue = "Testing">
          <p>E este é o conteúdo</p>
      </Container>

      <Container myValue = "Testing2">
          <h5>Testando o container</h5>
      </Container>
      

    </div>
  );
}

export default App;
