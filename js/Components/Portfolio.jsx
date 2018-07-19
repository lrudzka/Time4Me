import React from 'react';

class Portfolio extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            more1: 0,
            more2: 0,
            more3: 0,
            more4: 0,
            more5: 0
        }
    }

    handleMoreInfo1 = () => {
        if (this.state.more1 === 0) {
            this.setState({
                more1: 1
            })
        } else {
            this.setState({
                more1: 0
            })
        }
    }

    handleMoreInfo2 = () => {
        if (this.state.more2 === 0) {
            this.setState({
                more2: 1
            })
        } else {
            this.setState({
                more2: 0
            })
        }
    }

    handleMoreInfo3 = () => {
        if (this.state.more3 === 0) {
            this.setState({
                more3: 1
            })
        } else {
            this.setState({
                more3: 0
            })
        }
    }

    handleMoreInfo4 = () => {
        if (this.state.more4 === 0) {
            this.setState({
                more4: 1
            })
        } else {
            this.setState({
                more4: 0
            })
        }
    }

    render(){
        return(
            <section id="portfolio">
                <section className="mainWidth">
                    <ul>
                        <li>
                            <div className="react"></div>
                            <h4>Time4Type</h4>
                            <div className='brief'>
                                Application for typing results of football metches
                            </div>
                            <div className="link">
                                <a href="http://time4type.eu" target='_blank'> CLICK TO SEE THE SITE  </a>
                            </div>
                            <div className='code'>
                                <a href="https://github.com/lrudzka/Time4Type" target="_blank">  CLICK TO SEE THE CODE </a>
                            </div>
                            {this.state.more1 ===1 &&
                            <div className='description'>
                                I have created this application for my family, because my family is crazy about football.
                                Every year we watch together Champions League tournament, and we type the metches' results.
                                We have our own system of scoring, and I have implemented this scoring system to my application.
                                We have typed using my application during the World Cup in Russia, and we will use the application during the incoming Champions League.
                                It was a great fun to make something I'm really going to use.
                            </div>}
                            <button className="moreInfo" onClick={this.handleMoreInfo1}>{this.state.more1 === 0 ? <span>MORE</span> : <span>LESS</span>}</button>
                        </li>
                        <li>
                            <div className="react"></div>
                            <h4>Time4Play</h4>
                            <div className='brief'>
                                Application based on the Master Mind board game
                            </div>
                            <div className="link">
                                <a href="https://lrudzka.github.io/Time4Play/" target='_blank'> CLICK TO SEE THE SITE  </a>
                            </div>
                            <div className='code'>
                                <a href="https://github.com/lrudzka/Time4Play" target="_blank">  CLICK TO SEE THE CODE </a>
                            </div>
                            {this.state.more2 === 1 &&
                            <div className='description'>
                                Master Mind was a game of my childhood, I really loved to play it. So it was nice to create it now as an application with my own code.
                                Simple logical game, 4 random hidden colors (of 6 possible) to recode, with it's special alghorytm of showing if the colors are correct or correct and in the right place,
                                10 attemps of answering - React was a good tool for making all the above alive.
                            </div>}
                            <button className="moreInfo" onClick={this.handleMoreInfo2}>{this.state.more2 === 0 ? <span>MORE</span> : <span>LESS</span>}</button>
                        </li>
                        <li>
                            <div className="react"></div>
                            <h4>Time4Me</h4>
                            <div className='brief'>
                                The site about me you are reading right now
                            </div>
                            <div className='code'>
                                <a href="https://github.com/lrudzka/Time4Me" target="_blank">  CLICK TO SEE THE CODE </a>
                            </div>
                            {this.state.more3 === 1 &&
                            <div className='description'>
                                To create the site about me I have used React, because React is a great tool, and I like it more and more with every code I write using it.
                            </div>}
                            <button className="moreInfo" onClick={this.handleMoreInfo3}>{this.state.more3 === 0 ? <span>MORE</span> : <span>LESS</span>}</button>
                        </li>
                        <li>
                            <div className="js"></div>
                            <h4>GameOfLife</h4>
                            <div className='brief'>
                                An interactive animation based on a cellular automaton
                            </div>
                            <div className="link">
                                <a href="https://github.com/lrudzka/Game-of-Life" target='_blank'> CLICK TO SEE THE SITE  </a>
                            </div>
                            <div className='code'>
                                <a href="https://github.com/lrudzka/Game-of-Life" target="_blank">  CLICK TO SEE THE CODE </a>
                            </div>
                            {this.state.more4 === 1 &&
                            <div className='description'>
                                The animation has been based on a cellular automaton invented in 1970 by British mathematic John Horton Conway.
                                The action plays in the two-dimensional grid with cells, and each of the cells is in one of two possible states: dead or alive.
                                At each step in time the cells can get alive or dead according to their 8 neighbours: any live cell with fewer than two live neighbors dies, as if by under population;
                                any live cell with two or three live neighbors lives on to the next generation; any live cell with more than three live neighbors dies, as if by overpopulation;
                                any dead cell with exactly three live neighbors becomes a live cell, as if by reproduction. The user interacts with the animation by setting up the start state, or by changing
                                the current state while the game is paused. I have created the application using object-oriented JavaScript.
                            </div>}
                            <button className="moreInfo" onClick={this.handleMoreInfo4}>{this.state.more4 === 0 ? <span>MORE</span> : <span>LESS</span>}</button>
                        </li>
                    </ul>
                </section>
            </section>
        )
    }
}

module.exports = Portfolio;