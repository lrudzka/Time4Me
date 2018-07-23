import React from 'react';

class Hobbies extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            spritePosition: 0
        }
    }

    componentDidMount() {
        let count=0;
        this.intervalId = setInterval( () => {
            if (count>27) {
                this.setState({
                    spritePosition: 0
                })
                count=0;
            } else {
                this.setState({
                    spritePosition: this.state.spritePosition - 244
            })
            }
            count++;
            console.log(count);
        } ,100)
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render(){
        let style = {backgroundPosition: "0 "+this.state.spritePosition.toString()+'px'}
        return(
            <section id="hobbies">
                <section className="mainWidth">
                    <div style = {style} id="sprite">
                    </div>
                    <p>Yes - active life style is one of my hobbies. I will try to show here also the other ones - soon :-) </p>
                </section>
            </section>
        )
    }
}

module.exports = Hobbies;