import React from 'react';
import ReactDOM from 'react-dom';
import '../css/style.scss';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import AboutMe from './AboutMe.jsx';


class App extends React.Component{


    render(){

        return(
            <section>
                <Header/>
                <AboutMe/>
                <Footer/>
            </section>

        )
    }
}

document.addEventListener('DOMContentLoaded', function() {

    ReactDOM.render(
        <App/>,
        document.getElementById('app')
    )
})