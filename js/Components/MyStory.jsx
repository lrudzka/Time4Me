import React from 'react';

class MyStory extends React.Component {

    render(){
        return(
            <section id="myStory">
                <section className="mainWidth">
                    <div>
                        In my professional life I have been dealing with databases, statistical surveys and logistics
                        until now. I have decided to change the industry and take care of coding, because
                        coding gives me satisfaction and motivates to learn and work more. Until now, I
                        have had the opportunity to program during the implementation of Oracle databases (<span className="color"> in
                        PL/SQL </span>) and using an Excel spread sheet (<span className="color"> using VBA </span>), now I would like to deal with it
                        professionally.
                    </div>
                    <div>
                        And why <span className="color">Front-end</span> ? While I was working with Oracle database I took care of forms and reports,
                        so it was front-end of the system. And also - good cooperation with the customers is one of my skills, so Front-end was a natural
                        choice for me.
                    </div>
                </section>
            </section>
        )
    }
}

module.exports = MyStory;