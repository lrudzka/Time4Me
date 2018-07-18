import React from 'react';

class Header extends React.Component{

    render(){
        return(
            <section id='header'>
                <div className='mainWidth'>
                    <p> Let me <span className='color'> introduce  </span> myself </p>
                </div>
            </section>
        )
    }
}

module.exports = Header;