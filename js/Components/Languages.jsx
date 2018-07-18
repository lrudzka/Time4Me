import React from 'react';

class Languages extends React.Component{

    render(){
        return(
            <section id = "languages">
                <section className="mainWidth">
                    <div id="pl">Mówię po polsku, angielsku i niemiecku.</div>
                    <div id = 'eng'>I speak Polish, English and German.</div>
                    <div id = 'ger'>Ich spreche Polnisch, Englisch und Deutsch.</div>
                </section>
            </section>
        )
    }
}

module.exports = Languages;