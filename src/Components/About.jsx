import React, {Component} from 'react';
import {connect} from "react-redux";
import {Waypoint} from "react-waypoint";

class About extends Component {

    render() {

        if (this.props.data) {
            var name = this.props.data.fullname;
            var profilepic = "images/" + this.props.data.image;
            var bio = this.props.data.bio;
            var street = this.props.data.address.street;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var zip = this.props.data.address.zip;
            var phone = this.props.data.phone;
            var email = this.props.data.email;
            var resumeDownload = this.props.data.resumedownload;
        }

        return (
            <section id="about">
                <Waypoint
                    bottomOffset="-50px"
                    onEnter={() => this.props.setTransparent()}
                    onLeave={() => this.props.setOpaque()}
                />
                <div className="row">
                    <div className="three columns">
                        <img className="profile-pic" src={profilepic} alt="Marc Profile Pic"/>
                    </div>
                    <div className="nine columns main-col">
                        <h2>About Me</h2>

                        <p>{bio}</p>
                        <div className="row">
                            <div className="columns contact-details">
                                <h2>Contact Details</h2>
                                <p className="address">
                                    <span>{name}</span><br/>
                                    <span>{street}<br/>
                                        {city}, {zip}, {state}
                   </span><br/>
                                    <span>{phone}</span><br/>
                                    <span>{email}</span>
                                </p>
                            </div>
                            <div className="columns download">
                                <p>
                                    <a href={resumeDownload} className="button"><i className="fa fa-download"/>Download
                                        Resume</a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

            </section>
        );
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
