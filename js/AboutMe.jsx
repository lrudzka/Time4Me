import React from 'react';
import Introduction from './Components/Introduction.jsx'

class AboutMe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lvl1: 0
        }
    }

    handleClickLvl1 = () => {
        if (this.state.lvl1 === 0) {
            this.setState({
                lvl1: 1
            })
        } else {
            this.setState({
                lvl1: 0
            })
        }
    }

    render(){

        let style;
        if (this.state.lvl1 === 1) {
            style = {marginTop: 0}
        }
        return(
            <section id="body">
                <div className="line"><div onClick = {this.handleClickLvl1} className="pointer">FOR THE BEGINNING</div></div>
                {this.state.lvl1 ===1 && <Introduction/> }
                <div style = {style}  className="line"><div className="pointer">MY PORTFOLIO</div></div>
            </section>
        )
    }
}

module.exports = AboutMe;