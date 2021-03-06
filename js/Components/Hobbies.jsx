import React from 'react';
import Sprite1 from '../../img/sprite1.png';
import Sprite2 from '../../img/sprite2.png';
import Sprite3 from '../../img/sprite3.png';


class Hobbies extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            spritePosition: 0,
            spriteSource: '1'
        }
    }

    componentDidMount() {
        let count=0;
        this.intervalId1 = setInterval( () => {
            if (count>26) {
                this.setState({
                    spritePosition: 0
                })
                count=0;
            } else {
                this.setState({
                    spritePosition: this.state.spritePosition - 254
            })
            }
            count++;
            console.log(count);
        } ,100)
        this.intervalId2 = setInterval( () => {
            if (this.state.spriteSource==='1') {
                this.setState({
                    spriteSource: '2'
                })
            } else if (this.state.spriteSource==='2') {
                this.setState({
                    spriteSource: '3'
                })
            } else {
                this.setState({
                    spriteSource: '1'
                })
            }
        } ,10000)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId1);
        clearInterval(this.intervalId2);
    }

    render(){
        let spriteSource;
        if (this.state.spriteSource==='1') {
            spriteSource = Sprite1;
        } else if (this.state.spriteSource==='2') {
            spriteSource = Sprite2;
        } else {
            spriteSource = Sprite3;
        }
        let style = {backgroundPosition: "0 "+this.state.spritePosition.toString()+'px',
            backgroundImage: "url("+spriteSource+")"}
        return(
            <section id="hobbies">
                <section className="mainWidth">
                    <div style = {style} id="sprite">
                    </div>
                    <p>Yes - active life style is one of my hobbies. I also love escape rooms and strategic board games. </p>
                </section>
            </section>
        )
    }
}

module.exports = Hobbies;