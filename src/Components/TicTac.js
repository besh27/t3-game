import React from 'react';
import TicTacSquare from './TicTacSquare';
import replaceArrayItem from './../Utils/replaceArrayItem';
import gameStatus from './../Utils/gameStatus';

class TicTac extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            game: ['', '', '', '', '', '', '', '', ''],
            player: 'X',
            turns: 0,
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick(index) {
        this.state.game[index] !== '' ? 
        '' :
        this.state.player === 'X' ?
            this.setState(({ game, player, turns }) => ({
                game: replaceArrayItem([...game], index, this.state.player),
                player: 'O',
                turns: turns + 1
            })) :
            this.setState(({ game, player, turns }) => ({
                game: replaceArrayItem([...game], index, this.state.player),
                player: 'X',
                turns: turns + 1
            }))
    }

    handleReset(){
        this.setState({
            game: ['', '', '', '', '', '', '', '', ''],
            player: 'X',
            turns: 0,
        })
    }

    componentDidUpdate(){
        let {turns, game} = this.state;
        let status = gameStatus(turns, game);
        if  (status !== 'keep playing') {
            alert(status);
            this.handleReset();
        }
    }

    render() {
        return (
            <div className='instructions-container'>
                <ul className='container-sm grid center-text tic-tac-squares'>
                    {
                        this.state.game.map((square, index) => (
                            <TicTacSquare
                                key={index}
                                index={index}
                                handleClick={this.handleClick}
                                value={this.state.game[index]}                               
                            />
                        ))
                    }
                </ul>
                <p>{this.state.player}'s turn</p>
                <p>{this.state.turns} move{this.state.turns > 1 && "s"}</p>
                <button onClick={() => this.handleReset()}>Reset</button>
            </div>
        )
    }
}

export default TicTac;
