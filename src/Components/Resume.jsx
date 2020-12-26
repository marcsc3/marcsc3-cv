import React, {Component} from 'react';

class Resume extends Component {
    render() {

        if (this.props.data) {
            return (
                <section id="resume">

                    <div className="row education">
                        <div className="three columns header-col">
                            <h1><span>Education</span></h1>
                        </div>

                        <div className="nine columns main-col">
                            <div className="row item">
                                <div className="twelve columns">
                                    {this.props.data.education.map(education => {
                                        return <div key={education.school}><h3>{education.school}</h3>
                                            <p className="info">{education.degree} <span>&bull;</span><em
                                                className="date">{education.graduated}</em></p>
                                            <p>{education.description}</p></div>
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="row work">

                        <div className="three columns header-col">
                            <h1><span>Work</span></h1>
                        </div>

                        <div className="nine columns main-col">
                            {this.props.data.work.map(work => {
                                return <div key={work.company}><h3>{work.company}</h3>
                                    <p className="info">{work.title}<span>&bull;</span> <em
                                        className="date">{work.years}</em></p>
                                    <p>{work.description}</p>
                                </div>
                            })}
                        </div>
                    </div>

                    <div className="row skill">

                        <div className="three columns header-col">
                            <h1><span>Skills</span></h1>
                        </div>

                        <div className="nine columns main-col">

                            <p>{this.props.data.skillmessage}
                            </p>
                            <div className="bars">
                                <ul className="skills">
                                    {this.props.data.skills.map(skills => {
                                        return <div className="row">
                                            <div className="three columns">
                                                <img className='skill' src={`images/tech/${skills.image}`}
                                                     alt={skills.name}/>
                                            </div>
                                            <div className="nine columns main-col">
                                                <h5>{skills.name}</h5>
                                                <p>{skills.description}</p>
                                            </div>
                                        </div>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
            );
        } else return (<div/>);
    }
}

export default Resume;
