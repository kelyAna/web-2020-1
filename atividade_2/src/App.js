import React from 'react';
import './App.css';
import World from './components/questao3/World';
import Arena from './components/questao1 e questao2/Arena';
import {ArenaChildren, Hero, Enemy} from './components/questao4/ArenaChildren'


function App() {
  return (
    <div className="App">
      
      <h2>Questão 01 e 02</h2>
      <Arena />
      <br />

      <h2>Questão 03</h2>
      <World>
        <Arena />
        <Arena />
        <Arena />
      </World>
      <br />

      <h2>Questão 4</h2>
      <ArenaChildren arena="Marvel">
        <Hero name="Capitao" />
        <Enemy name="Caveira" />
      </ArenaChildren>

    </div>
  );
}

export default App;
