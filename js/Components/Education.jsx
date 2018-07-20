import React from 'react';

class Education extends React.Component{

    render(){

        return(
            <section id="education">
                <section className='mainWidth'>
                    <ul>
                        <li>
                            <div>
                                <span className="data">05.2018 - 06.2018</span>
                                6-week (320 hours) IT bootcamp in coding school CodersLab: <span className="important"> JavaScript Developer: React </span>
                            </div>
                            <div>
                                Course program: <span className="important">HTML5, JavaScript, CSS, Sass, Gulp, RWD, ES6, JQuery, React</span>
                            </div>
                        </li>
                        <li>
                            <div>
                                <span className="data">10.1994 - 10.1999</span>
                                <span>Silesian University of Technology</span>
                                <div>
                                    Faculty: Organization and Management
                                </div>
                                <div>
                                    Departament: Management and Marketing
                                </div>
                                <div>
                                    Specialization: Economic Information and Econometrics
                                </div>
                                <div>
                                    Title: Master of Science Engineer
                                </div>
                            </div>
                        </li>
                    </ul>
                </section>
            </section>
        )
    }
}

module.exports = Education;