import React from 'react';

class Footer extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            deg: 0
        }
    }

    componentDidMount() {
        this.intervalId = setInterval( () => {
            let count = 0;
            let intervalId1 = setInterval( () => {
                this.setState({
                    deg: this.state.deg+1
                })
                count++;
                if (count>=90) {
                    clearInterval(intervalId1);
                }
            }  ,50 )

            setTimeout( () => {
                let intervalId2 = setInterval( () => {
                this.setState({
                    deg: this.state.deg-1
                })
                count++;
                if (count>=180) {
                    clearInterval(intervalId2);
                }
            }  ,50 )

        } , 10000)

        } , 50000 )
    }

    componentWillUnmount() {
        clearInterval(this.intervalId);
    }

    render(){
        let style1 = {
            transform: "rotate("+(-this.state.deg).toString()+"deg)"
        }
        let style2= {
            transform: "rotate("+(this.state.deg).toString()+"deg)"
        }
        return(
            <footer>
                <section className="mainWidth footerBox" >
                    <div>
                    <span>LUCYNA RUDZKA @2018</span>
                    </div>
                    <div>
                        <span><span className="color"> CONTACT:</span> lrudzka@onet.eu</span>
                    <a href="https://github.com/lrudzka" target="_blank">
                        <img src="images/github.png" alt="my github profile" title="my github profile" style={style1} />
                    </a>
                    <a href="https://www.linkedin.com/in/lucyna-rudzka/" target="_blank">
                        <img src="images/linkedin.png" alt="my linkedin profile" title="my linkedin profile" style={style2} />
                    </a>
                    </div>
                </section>
            </footer>
        )
    }
}

module.exports = Footer;