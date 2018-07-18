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
                        </li>
                        <li>
                            <div className="react"></div>
                            <h4>Time4Play</h4>
                        </li>
                        <li>
                            <div className="react"></div>
                            <h4>Time4Me</h4>
                        </li>
                        <li>
                            <div className="js"></div>
                            <h4>GameOfLife</h4>
                        </li>
                        <li>
                            <div className="js"></div>
                            <h4>Furry Game</h4>
                        </li>
                    </ul>
                </section>
            </section>
        )
    }
}

module.exports = Portfolio;