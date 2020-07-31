import React from 'react'
import { CAPITAO_IMG, CAVEIRA_IMG } from '../../constants'


const Hero = props =>
    <div>
        <h4> Este é o {props.name}</h4>
        <img src={CAPITAO_IMG} width="300px"/>
        <h4> da arena {props.arena}</h4>
    </div>



const Enemy = props =>
    <div>
        <br/>
        <h4>Este é o {props.name}</h4>
        <img src={CAVEIRA_IMG} width="300px"/>
        <h4> da arena {props.arena}</h4>
    </div>


const ArenaChildren = props =>
    <div>
        <h3>{props.arena}</h3>

        {React.Children.map(props.children, arena => {
            return React.cloneElement(arena, { ...props });
        })}
    </div>

export {Hero, Enemy, ArenaChildren}
