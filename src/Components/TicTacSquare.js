import React from 'react';

function TicTacSquare(props){
    return(
        <li
            key={props.index}
            className="bg-light"
            onClick={() => props.handleClick(props.index)}
            cursor="pointer"
        >
            {props.value}
        </li>
    )
}

export default TicTacSquare;
