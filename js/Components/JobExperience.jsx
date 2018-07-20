import React from 'react';

class JobExperience extends React.Component{

    render(){
        return(
            <section id='jobExperience'>
                <section className="mainWidth">
                    <table>
                        <thead>
                            <tr>
                                <th colSpan='2'> DATE</th>
                                <th>COMPANY</th>
                                <th>POSITION</th>
                                <th>DUTIES</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>02.2014</td>
                                <td>01.2018</td>
                                <td>Esarom Polska Sp. z o.o.</td>
                                <td>Customer Service Manager</td>
                                <td>managing logistic activities of the company, cooperation with the customers, with the suppliers, with the transport companies;
                                    responsibility for the warehouse stock; cooperation with the bookkeeper departament;
                                </td>
                            </tr>
                            <tr>
                                <td>10.2006</td>
                                <td>11.2012</td>
                                <td>CUI CIBEH S.A.</td>
                                <td>Statistical Specialist / Statistical Manager</td>
                                <td>managing of research statistic in steel industry; monitoring the work of the department, marketing activities for the sales of statistics publications;</td>
                            </tr>
                            <tr>
                                <td>09-1999</td>
                                <td>09.2006</td>
                                <td><div>Computerland S.A.</div><div> Oracle Competence Center</div></td>
                                <td>Consultant / Technical Consultant</td>
                                <td>implementation of ERP class system; techical assistance of Oracle Applications custom-build</td>
                            </tr>
                        </tbody>
                    </table>
                </section>
            </section>
        )
    }
}

module.exports = JobExperience;