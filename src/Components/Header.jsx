import React, {Component} from 'react';
import {Link} from 'react-scroll'
import {Waypoint} from "react-waypoint";
import {connect} from "react-redux";

class Header extends Component {


    render() {
        const visible = this.props.visible ? "fadeIn" : "fadeOut";
        const opaque = this.props.opaque ? "opaque" : "";

        if (this.props.data) {
            return (
                <header id="home">
                    <Waypoint
                        topOffset="250px"
                        onEnter={() => this.props.setVisible()}
                        onLeave={() => this.props.setInvisible()}
                    />
                    <nav id="nav-wrap" className={[visible, opaque].join(" ")}>

                        <ul id="nav" className="nav">
                            <li><Link style={{cursor: this.props.visible ? "pointer" : "default"}} activeClass="active"
                                      to="home"
                                      spy={true} smooth={true} duration={1000}>Home</Link></li>
                            <li><Link style={{cursor: this.props.visible ? "pointer" : "default"}} activeClass="active"
                                      to="about"
                                      spy={true} smooth={true} duration={750}>About</Link></li>
                            <li><Link style={{cursor: this.props.visible ? "pointer" : "default"}} activeClass="active"
                                      to="resume"
                                      spy={true} smooth={true} duration={750}>Resume</Link></li>
                        </ul>
                    </nav>

                    <div className="row banner">

                        <div className="banner-text">
                            <h1 className="responsive-headline">This is {this.props.data.name}.</h1>
                            <h3>I'm a <span>{this.props.data.occupation}</span> {this.props.data.description}</h3>
                            <hr/>
                            <ul className="social">
                                {this.props.data.social.map(network => {
                                    return <li key={network.name}><a target="_blank" rel="noopener noreferrer"
                                                                     href={network.url}><i
                                        className={network.className}/></a></li>
                                })}
                            </ul>
                        </div>
                    </div>

                    <p className="scrolldown">
                        <Link style={{cursor: "pointer"}} to="about" spy={true}
                              smooth={true} duration={1000}><i className="icon-down-circle"/></Link>
                    </p>

                </header>
            );
        } else return (<div/>);
    }
}


function mapStateToProps(state) {
    return {
        visible: state.visible,
        opaque: state.opaque,
    };
}

const mapDispatchToProps = dispatch => {
    return {
        setInvisible: () => dispatch({type: "SET_INVISIBLE"}),
        setVisible: () => dispatch({type: "SET_VISIBLE"})
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
