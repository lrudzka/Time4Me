import React from 'react';
import Introduction from './Components/Introduction.jsx'
import Portfolio from './Components/Portfolio.jsx'
import Languages from './Components/Languages.jsx'
import JobExperience from './Components/JobExperience.jsx'
import Education from './Components/Education.jsx';
import Hobbies from './Components/Hobbies.jsx';
import MyStory from './Components/MyStory.jsx';
import Heart from '../img/heart.png';

class AboutMe extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            lvl1: 0,
            lvl2: 0,
            lvl3: 0,
            lvl4: 0,
            lvl5: 0,
            lvl6: 0,
            lvl7: 0,
            heartSize: 1
        }
    }

    startIntroduction = '1';

    handleClickLvl1 = () => {
        if (this.state.lvl1 === 0) {
            this.setState({
                lvl1: 1
            })
        } else {
            this.startIntroduction = '0';
            this.setState({
                lvl1: 0
            })
        }
    }
    handleClickLvl2 = () => {
        if (this.state.lvl2 === 0) {
            this.setState({
                lvl2: 1
            })
        } else {
            this.setState({
                lvl2: 0
            })
        }
    }
    handleClickLvl3 = () => {
        if (this.state.lvl3 === 0) {
            this.setState({
                lvl3: 1
            })
        } else {
            this.setState({
                lvl3: 0
            })
        }
    }
    handleClickLvl4 = () => {
        if (this.state.lvl4 === 0) {
            this.setState({
                lvl4: 1
            })
        } else {
            this.setState({
                lvl4: 0
            })
        }
    }
    handleClickLvl5 = () => {
        if (this.state.lvl5 === 0) {
            this.setState({
                lvl5: 1
            })
        } else {
            this.setState({
                lvl5: 0
            })
        }
    }
    handleClickLvl6 = () => {
        if (this.state.lvl6 === 0) {
            this.setState({
                lvl6: 1
            })
        } else {
            this.setState({
                lvl6: 0
            })
        }
    }
    handleClickLvl7 = () => {
        if (this.state.lvl7 === 0) {
            this.setState({
                lvl7: 1
            })
        } else {
            this.setState({
                lvl7: 0
            })
        }
    }

    componentDidMount() {
        this.intervalId = setInterval(()=> {
            let count = 0;
            let changeSize = 'up';
            this.intervalId1 = setInterval( ()=> {
                console.log(count, this.state.heartSize);
                if (count===11 || count===25) {
                    changeSize = 'down'
                }
                if (count===18) {
                    changeSize = 'up'
                }
                if (changeSize === 'up') {
                    this.setState({
                        heartSize : this.state.heartSize+0.05
                    })
                } else {
                    this.setState({
                        heartSize : this.state.heartSize - 0.05
                    })
                }
                count++;
                if (count>=36) {
                    clearInterval(this.intervalId1)
                }

            } ,40)

        }   ,10000)
    }

    componentWillUnmount(){
        clearInterval(this.intervalId)
    }
    render(){

        let style2;
        if (this.state.lvl1 === 1) {
            style2 = {marginTop: 0}
        }
        let style3;
        if (this.state.lvl2 === 1){
            style3 = {marginTop: 0}
        }
        let style4;
        if (this.state.lvl3 ===1){
            style4 = {marginTop: 0}
        }
        let style5;
        if (this.state.lvl4 ===1){
            style5 = {marginTop: 0}
        }
        let style6;
        if (this.state.lvl5 ===1){
            style6 = {marginTop: 0}
        }
        let style7;
        if (this.state.lvl6 ===1){
            style7 = {marginTop: 0}
        }
        let heartStyle = {
            transform: "scale("+this.state.heartSize+") translate(0, 0.7em) rotate(9deg)"
        }
        return(
            <section id="body">
                <div id="extraText"> I <img style={heartStyle} src={Heart} alt="love" title="love"></img> coding</div>
                <div className="line"><div onClick = {this.handleClickLvl1} className="pointer">PREFACE</div></div>
                {this.state.lvl1 ===1 && <Introduction start={this.startIntroduction} /> }
                <div style = {style2}  className="line"><div onClick = {this.handleClickLvl2} className="pointer">MY PORTFOLIO</div></div>
                {this.state.lvl2 ===1 && <Portfolio/>}
                <div style = {style3}  className="line"><div onClick = {this.handleClickLvl3} className="pointer">JOB EXPERIENCE</div></div>
                {this.state.lvl3 ===1 && <JobExperience/>}
                <div style = {style4}  className="line"><div onClick = {this.handleClickLvl4} className="pointer">EDUCATION</div></div>
                {this.state.lvl4 ===1 && <Education/>}
                <div style = {style5}  className="line"><div onClick = {this.handleClickLvl5} className="pointer">LANGUAGES</div></div>
                {this.state.lvl5 ===1 && <Languages/>}
                <div style = {style6}  className="line"><div onClick = {this.handleClickLvl6} className="pointer">HOBBIES</div></div>
                {this.state.lvl6 === 1 && <Hobbies/>}
                <div style = {style7}  className="line"><div onClick = {this.handleClickLvl7} className="pointer">MY CODING STORY</div></div>
                {this.state.lvl7 === 1 && <MyStory/>}
            </section>
        )
    }
}

module.exports = AboutMe;