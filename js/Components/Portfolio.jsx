import React from 'react';

class Portfolio extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            li: 1,
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

    handleMoreInfo5 = () => {
        if (this.state.more5 === 0) {
            this.setState({
                more5: 1
            })
        } else {
            this.setState({
                more5: 0
            })
        }
    }

    componentDidMount() {
        this.intervalId = setInterval( () => {
            this.setState({
                li: this.state.li + 1
            })
        },400)

    };

    componentDidUpdate() {
        if (this.state.li === 5) {
            clearInterval(this.intervalId);
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render(){
        console.log(this.state.li);
        return(
            <section id="portfolio">
                <section className="mainWidth">
                    <ul>
                        <li>
                            <div className="react"></div>
                            <h4>Time4Type</h4>
                            <div className='brief'>
                                Application for typing results of football matches
                            </div>
                            <div className="link">
                                <a href="http://time4type.eu" target='_blank'> CLICK TO VISIT THE SITE  </a>
                            </div>
                            <div className='code'>
                                <a href="https://github.com/lrudzka/Time4Type" target="_blank">  CLICK TO SEE THE CODE </a>
                            </div>
                            {this.state.more1 ===1 &&
                            <div className='description'>
                                I have created this application for my family, because my family is crazy about football.
                                Every year we watch together Champions League tournament, and we type the matches' results.
                                We have our own system of scoring, and I have implemented this scoring system to my application.
                                We have typed using my application during the World Cup in Russia. The application was to be changed for the Champions League 2018/2019,
                                but I have created new version, as you can see below.
                                It was a great pleasure to make something to my family's use.
                            </div>}
                            <button className="moreInfo" onClick={this.handleMoreInfo1}>{this.state.more1 === 0 ? <span>MORE</span> : <span>LESS</span>}</button>
                        </li>
                        {this.state.li>1 && <li>
                            <div className="react"></div>
                            <h4>Time4Play</h4>
                            <div className='brief'>
                                Application based on the Master Mind board game
                            </div>
                            <div className="link">
                                <a href="https://lrudzka.github.io/Time4Play/" target='_blank'> CLICK TO VISIT THE SITE  </a>
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
                        </li>}
                        {this.state.li>2 &&
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
                        </li>}
                        {this.state.li > 3 &&
                        <li>
                            <div className="php"></div>
                            <h4>Time4Events</h4>
                            <div className='brief'>
                                An application for events managing
                            </div>
                            <div className="link">
                                <a href="http://events.mycoding.eu/" target='_blank'> CLICK TO VISIT THE SITE  </a>
                            </div>
                            <div className='code'>
                                <a href="https://github.com/lrudzka/Time4Events" target="_blank">  CLICK TO SEE THE CODE </a>
                            </div>
                            {this.state.more4 === 1 &&
                            <div className='description'>
                                The goal of this project was to learn and practice using PHP and mySQL database.
                                The basic principles of the application: events are to be added by a logged user;
                                a logged user can update or delete his own events - as long as they are still actual;
                                everyone can view the list of events - the actual events list or the archive events list;
                                both lists of events can be filtered - by keyword, by province, by city, by category and by dates;
                                everyone can add new user account to the database to be able to log in to the application and to use all of the functionality.
                                Connections to the mySQL database are established by creating instances of the PDO base class.
                                Users' passwords are hashed, and the database is protected against sql injection.

                            </div>}
                            <button className="moreInfo" onClick={this.handleMoreInfo4}>{this.state.more4 === 0 ? <span>MORE</span> : <span>LESS</span>}</button>
                        </li>}
                        {this.state.li>4 && <li>
                            <div className="php"></div>
                            <h4>Time4Type - PHP & mySQL</h4>
                            <div className='brief'>
                                Application for typing results of football matches - PHP & mySQL version
                            </div>
                            <div className="link">
                                <a href="http://types.mycoding.eu/" target='_blank'> CLICK TO VISIT THE SITE  </a>
                            </div>
                            <div className='code'>
                                <a href="https://github.com/lrudzka/Time4Type-PHP" target="_blank">  CLICK TO SEE THE CODE </a>
                            </div>
                            {this.state.more5 === 1 &&
                            <div className='description'>
                                The goal of this project was to learn and practice using PHP and mySQL database, but also to create better version of my Time4Type application.
                                The basic principles of the application are the same as in the first version: it works for the selected football event - which now is the Champions League 2018/2019,
                                user can score 3 points for the correctly typed result of the match, or 1 point for the correctly typed winner or equal result of the match.
                                Page is fully responsive, there should be no troubles in accessing it on any device. The application is protected against sql injection, and also against bots.
                                This version of the application is more user-friendly and better-looking than the first one.
                            </div>}
                            <button className="moreInfo" onClick={this.handleMoreInfo5}>{this.state.more5 === 0 ? <span>MORE</span> : <span>LESS</span>}</button>
                        </li>}
                    </ul>
                </section>
            </section>
        )
    }
}

module.exports = Portfolio;