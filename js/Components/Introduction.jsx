import React from 'react';

let myCode01 = "let me = {";
let myCode02 = "name: 'Lucyna Rudzka',";
let myCode03 = "qualification: 'Junior Front-end Developer',";
let myCode04 = "technologies: ['JavaScript', 'HTML5', 'CSS', 'Sass', 'React', 'JQuery', 'PHP', 'mySQL'],";
let myCode05 = "codingExperiences: ['PL/SQL', 'VBA'],";
let myCode06 = "status: 'looking for a job'";
let myCode07 = "};";
let myCode08 = "let hire = newEmployee => {";
let myCode09 = "let result = newEmployee === me? 'success' : 'mistake';";
let myCode10 = "return result;";
let myCode11 = "};";
let myCode01Length = myCode01.length;
let myCode02Length = myCode01Length + myCode02.length;
let myCode03Length = myCode02Length + myCode03.length;
let myCode04Length = myCode03Length + myCode04.length;
let myCode05Length = myCode04Length + myCode05.length;
let myCode06Length = myCode05Length + myCode06.length;
let myCode07Length = myCode06Length + myCode07.length;
let myCode08Length = myCode07Length + myCode08.length;
let myCode09Length = myCode08Length + myCode09.length;
let myCode10Length = myCode09Length + myCode10.length;
let myCode11Length = myCode10Length + myCode11.length;

let myCode = myCode01.concat(myCode02, myCode03, myCode04, myCode05, myCode06, myCode07, myCode08, myCode09, myCode10, myCode11);


class Introduction extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            myText1: this.props.start === '1' ? "": myCode01,
            myText2: this.props.start === '1' ? "": myCode02,
            myText3: this.props.start === '1' ? "": myCode03,
            myText4: this.props.start === '1' ? "": myCode04,
            myText5: this.props.start === '1' ? "": myCode05,
            myText6: this.props.start === '1' ? "": myCode06,
            myText7: this.props.start === '1' ? "": myCode07,
            myText8: this.props.start === '1' ? "": myCode08,
            myText9: this.props.start === '1' ? "": myCode09,
            myText10: this.props.start === '1' ? "": myCode10,
            myText11: this.props.start === '1' ? "": myCode11,
            counter: 0
        }
    }

    componentDidMount() {
        if (this.props.start === '1') {
        this.intervalId = setInterval( () => {
            if (this.state.counter < (myCode01Length+1) ) {
                this.setState({
                    myText1: myCode.slice(0,this.state.counter)
                })
            } else if (this.state.counter < (myCode02Length +1) ) {
                this.setState({
                    myText2: myCode.slice(myCode01Length,this.state.counter)
                })
            } else if (this.state.counter < (myCode03Length + 1) ) {
                this.setState({
                    myText3: myCode.slice(myCode02Length, this.state.counter)
                })
            } else if (this.state.counter < (myCode04Length+1) ){
                this.setState({
                    myText4: myCode.slice(myCode03Length, this.state.counter)
                })
            } else if (this.state.counter < (myCode05Length + 1) ){
                this.setState({
                    myText5: myCode.slice( myCode04Length, this.state.counter)
                })
            } else if (this.state.counter < (myCode06Length + 1) ){
                this.setState({
                    myText6: myCode.slice(myCode05Length, this.state.counter)
                })
            } else if (this.state.counter < (myCode07Length+1) ){
                this.setState({
                    myText7: myCode.slice( myCode06Length, this.state.counter)
                })
            } else if (this.state.counter < (myCode08Length+1) ){
                this.setState({
                    myText8: myCode.slice(myCode07Length, this.state.counter)
                })
            } else if (this.state.counter < (myCode09Length + 1) ){
                this.setState({
                    myText9: myCode.slice(myCode08Length, this.state.counter)
                })
            } else if (this.state.counter < (myCode10Length + 1) ){
                this.setState({
                    myText10: myCode.slice(myCode09Length, this.state.counter)
                })
            } else if (this.state.counter < (myCode11Length + 1) ){
                this.setState({
                    myText11: myCode.slice(myCode10Length, this.state.counter)
                })
            }
            this.setState({
                counter: this.state.counter+1
            })

        } ,80); }

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