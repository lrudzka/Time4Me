import React from 'react';
import Introduction from './Components/Introduction.jsx'

class AboutMe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lvl1: 0
        }
    }

    handleclickLvl1 = () => {
        this.setState({
            lvl1: 1
        })
    }

    render(){
        return(
            <section id="body">
                <div className="line"><div onClick = {this.handleclickLvl1} className="pointer"></div></div>
                {this.state.lvl1 > 0 && <Introduction/> }
                <div className="line"><div className="pointer"></div></div>
            </section>
        )
    }
}

module.exports = AboutMe;