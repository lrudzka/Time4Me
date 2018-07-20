import React from 'react';

let myCode = "let me = {name: 'Lucyna Rudzka',qualification: 'Junior Front-end Developer', technologies: ['JavaScript', 'HTML5', 'CSS', 'Sass', " +
    "'React', 'JQuery'],codingExperience: ['PL/SQL', 'VBA'],status: 'looking for a job' }; let hire = newEmployee => { let result = " +
    "newEmployee === me? 'success' : 'mistake';return result;};";

class Introduction extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            myText1: this.props.start === '1' ? "": "let me = {",
            myText2: this.props.start === '1' ? "": "name: 'Lucyna Rudzka',",
            myText3: this.props.start === '1' ? "": "qualification: 'Junior Front-end Developer',",
            myText4: this.props.start === '1' ? "": "technologies: ['JavaScript', 'HTML5', 'CSS', 'Sass', 'React', 'JQuery'],",
            myText5: this.props.start === '1' ? "": "codingExperiences: ['PL/SQL', 'VBA'],",
            myText6: this.props.start === '1' ? "": "status: 'looking for a job'",
            myText7: this.props.start === '1' ? "": "};",
            myText8: this.props.start === '1' ? "": "let hire = newEmployee => {",
            myText9: this.props.start === '1' ? "": "let result = newEmployee === me? 'success' : 'mistake';",
            myText10: this.props.start === '1' ? "": "return result;",
            myText11: this.props.start === '1' ? "": "};",
            counter: 0
        }
    }

    componentDidMount() {
        if (this.props.start === '1') {
        this.intervalId = setInterval( () => {
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
            } else if (this.state.counter < 150 ){
                this.setState({
                    myText4: myCode.slice(76, this.state.counter)
                })
            } else if (this.state.counter < 186 ){
                this.setState({
                    myText5: myCode.slice(149, this.state.counter)
                })
            } else if (this.state.counter < 213 ){
                this.setState({
                    myText6: myCode.slice(185, this.state.counter)
                })
            } else if (this.state.counter < 216 ){
                this.setState({
                    myText7: myCode.slice(212, this.state.counter)
                })
            } else if (this.state.counter < 245 ){
                this.setState({
                    myText8: myCode.slice(215, this.state.counter)
                })
            } else if (this.state.counter < 300 ){
                this.setState({
                    myText9: myCode.slice(244, this.state.counter)
                })
            } else if (this.state.counter < 314 ){
                this.setState({
                    myText10: myCode.slice(299, this.state.counter)
                })
            } else if (this.state.counter < 316 ){
                this.setState({
                    myText11: myCode.slice(313, this.state.counter)
                })
            }
            this.setState({
                counter: this.state.counter+1
            })

        } ,100); }

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