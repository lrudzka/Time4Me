import React from 'react';

class Portfolio extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            width: 0
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
                            <div className='description'>
                                I have created this application for my family, because my family is crazy about football.
                                Every year we watch Champions League tournament, and we type the metches' results.
                                We have our own system of scoring, and I have implemented this scoring system to my application.
                                We have typed using my application during the World Cup in Russia, and we will use it during the incoming Champions League.
                                It was a great fun to make something I'm really going to use.
                            </div>
                        </li>
                        <li>
                            <div className="react"></div>
                            <h4>Time4Play</h4>

                            <div className='brief'>
                                Application based on the Master Mind board game
                            </div>
                            <div className='description'>
                                Master Mind was a game of my childhood, I really loved to play it. So it was nice to create it now as an application with my own code.
                                Simple logical game, 4 random hidden colors (of 6 possible) to recode, with it's special alghorytm of showing if the colors are correct or correct and in the right place,
                                10 attemps of answering - React was a good tool for making all the above alive.
                            </div>
                        </li>
                        <li>
                            <div className="react"></div>
                            <h4>Time4Me</h4>
                            <div className='brief'>
                                The site about me you are reading right now
                            </div>
                            <div className='description'>
                                To create the site about me I used React, because React is a great tool, and I like it more and more with every code I write using it.
                            </div>
                        </li>
                        <li>
                            <div className="js"></div>
                            <h4>GameOfLife</h4>
                            <div className='brief'>
                            </div>
                            <div className='description'></div>
                        </li>
                        <li>
                            <div className="js"></div>
                            <h4>Furry Game</h4>
                            <div className='brief'>
                            </div>
                            <div className='description'></div>
                        </li>
                    </ul>
                </section>
            </section>
        )
    }
}

module.exports = Portfolio;