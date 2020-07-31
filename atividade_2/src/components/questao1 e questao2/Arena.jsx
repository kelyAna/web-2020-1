import React from 'react'
import { CAPITAO_IMG, CAVEIRA_IMG } from '../../constants'

const Hero = props => 
    <div>
        <h4>{props.name}</h4>
        <img src={props.img} width="300px"/>
        {props.arena}
    </div>



const Enemy = props => 
    <div>
        <h4>{props.name}</h4>
        <img src={props.img} width="300px"/>
        {props.arena}
    </div>


const Arena = props => 
    <div className="card">
        <Hero name = "Caveira Vermelha" img = {CAVEIRA_IMG}/>
        <Enemy name = "Capitão América <3" img = { CAPITAO_IMG}/>
    </div>


export default Arena;