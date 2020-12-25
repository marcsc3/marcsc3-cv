import React, {Component} from 'react';
import {connect} from "react-redux";
import {Waypoint} from "react-waypoint";

class About extends Component {


    render() {

        let name, profilepic, bio, street, city, state, zip, phone, email;
        if (this.props.data) {
            name = this.props.data.fullname;
            profilepic = "images/" + this.props.data.image;
            bio = this.props.data.bio;
            street = this.props.data.address.street;
            city = this.props.data.address.city;
            state = this.props.data.address.state;
            zip = this.props.data.address.zip;
            phone = this.props.data.phone;
            email = this.props.data.email;
        }

        return (
            <section id="about">
                <Waypoint
                    bottomOffset="-100px"
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
