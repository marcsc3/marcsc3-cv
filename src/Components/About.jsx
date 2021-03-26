import React, {Component} from 'react';
import {connect} from "react-redux";
import {Waypoint} from "react-waypoint";

class About extends Component {


    render() {

        if (this.props.data) {
            return (
                <section id="about">
                    <Waypoint
                        bottomOffset="-100px"
                        onEnter={() => this.props.setTransparent()}
                        onLeave={() => this.props.setOpaque()}
                    />
                    <div className="row">
                        <div className="three columns">
                            <img className="profile-pic" src={`images/${this.props.data.image}`} alt="Marc Profile Pic"/>
                        </div>
                        <div className="nine columns main-col">
                            <h2>About Me</h2>

                            <p>{this.props.data.bio}</p>
                            <div className="row">
                                <div className="columns contact-details">
                                    <h2>Contact Details</h2>
                                    <p className="address">
                                        <span>{this.props.data.fullname}</span><br/>
                                        <span>{this.props.data.address.state}</span><br/>
                                        <span>{this.props.data.phone}</span><br/>
                                        <span><a href="mailto:m@soler-colomer.com">{this.props.data.email}</a></span>
                                    </p>
                                </div>
                                <div className="columns download">
                                    <p>
                                        <a href="/marcsc-resume-website.pdf" download className="button"><i className="fa fa-download"/>Download Resume</a>
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                </section>
            );
        }
        else return (<div/>);
    }
}

function mapStateToProps(state) {
    return {
        visible: state.visible,
        opaque: state.opaque
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setOpaque: () => dispatch({type: "SET_OPAQUE"}),
        setTransparent: () => dispatch({type: "SET_TRANSPARENT"})
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(About);
