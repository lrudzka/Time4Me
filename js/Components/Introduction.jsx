import React from 'react';

let myCode = "let me = {name: 'Lucyna Rudzka',qualification: 'Junior Front-end Developer', technologies: ['JavaScript', 'HTML5', 'CSS', 'Sass', " +
    "'React'],codingExperience: ['PL/SQL', 'VBA'],status: 'looking for a job' }; let hire = newEmployee => { let result = " +
    "(newEmployee === me)? 'success' : 'mistake';return result;};";

class Introduction extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            myText1: "",
            myText2: "",
            myText3: "",
            myText4: "",
            myText5: "",
            myText6: "",
            myText7: "",
            myText8: "",
            myText9: "",
            myText10: "",
            myText11: "",
            counter: 0
        }
    }

    componentDidMount() {
        setTimeout( () => {this.intervalId = setInterval( () => {
            if (this.state.counter <11) {
                this.setState({
                    myText1: myCode.slice(0,this.state.counter)
                })
            } else if (this.state.counter < 33 ) {
                this.setState({
                    myText2: myCode.slice(10,this.state.counter)
                })
            } else if (this.state.counter < 78 ) {
                this.setState({
                    myText3: myCode.slice(32, this.state.counter)
                })
            } else if (this.state.counter < 140 ){
                this.setState({
                    myText4: myCode.slice(76, this.state.counter)
                })
            } else if (this.state.counter < 176 ){
                this.setState({
                    myText5: myCode.slice(139, this.state.counter)
                })
            } else if (this.state.counter < 203 ){
                this.setState({
                    myText6: myCode.slice(175, this.state.counter)
                })
            } else if (this.state.counter < 206 ){
                this.setState({
                    myText7: myCode.slice(202, this.state.counter)
                })
            } else if (this.state.counter < 235 ){
                this.setState({
                    myText8: myCode.slice(205, this.state.counter)
                })
            } else if (this.state.counter < 292 ){
                this.setState({
                    myText9: myCode.slice(234, this.state.counter)
                })
            } else if (this.state.counter < 306 ){
                this.setState({
                    myText10: myCode.slice(291, this.state.counter)
                })
            } else if (this.state.counter < 308 ){
                this.setState({
                    myText11: myCode.slice(305, this.state.counter)
                })
            }
            this.setState({
                counter: this.state.counter+1
            })

        } ,100)},1000);


    }

    componentDidUpdate() {
        if (this.state.counter > myCode.length) {
            clearInterval(this.intervalId);
        }
    }

    componentWillUnmount() {
        clearInterval(this.intervalId)
    }

    render(){


        return (
            <section id = "introduction">
                <section className="mainWidth">
                    <div className='row'>
                        <div>{this.state.myText1}</div>
                    </div>
                    <div className='row'>
                        <div className='tab'></div>
                        <div>{this.state.myText2}</div>
                    </div>
                    <div className='row'>
                        <div className='tab'></div>
                        <div>{this.state.myText3}</div>
                    </div>
                    <div className='row'>
                        <div className='tab'></div>
                        <div>{this.state.myText4}</div>
                    </div>
                    <div className='row'>
                        <div className='tab'></div>
                        <div>{this.state.myText5}</div>
                    </div>
                    <div className='row'>
                        <div className='tab'></div>
                        <div>{this.state.myText6}</div>
                    </div>
                    <div className='row'>
                        <div>{this.state.myText7}</div>
                    </div>
                    <div className='row'>
                        <div>{this.state.myText8}</div>
                    </div>
                    <div className='row'>
                        <div className='tab'></div>
                        <div>{this.state.myText9}</div>
                    </div>
                    <div className='row'>
                        <div className='tab'></div>
                        <div>{this.state.myText10}</div>
                    </div>
                    <div className='row'>
                        <div>{this.state.myText11}</div>
                    </div>
                </section>
            </section>
        )
    }
}

module.exports = Introduction;