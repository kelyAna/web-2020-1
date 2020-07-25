import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Questao1 from './components/questao1/Questao1'
import Questao2 from './components/questao2/Questao2'
import Pai from './components/questao3/Pai';
import Filho from './components/questao3/Filho';

import PaiClasse from './components/questao4/PaiClasse';
import FilhoClasse from './components/questao4/FilhoClasse';

import FilhoClasseBoostrap from './components/questao5/FilhoClasseBoostrap'

function App() {
  return (
    <div className="App">

      <div>
        <h2>Questao 1</h2>
        <Questao1 />

        <h2>Questao 2</h2>


        <Questao2 nome='Julia'
          curso='Ciência da Computação'
          cidade='Fortaleza' />


        <h2>Questao 3</h2>
        <Filho>
          <Pai nome="Maria" curso="SI" cidade="Ocara" />
        </Filho>

        <h2>Questao 4</h2>
        <FilhoClasse>
          <PaiClasse nome="Maria" curso="SI" cidade="Ocara" />
        </FilhoClasse>


        <h2>Questao 5</h2>
        <FilhoClasseBoostrap>
          <PaiClasse nome="Maria" curso="SI" cidade="Ocara" />
        </FilhoClasseBoostrap>

      </div>

    </div>
  );
}

export default App;
