import React, {Component} from 'react';
import {Link} from 'react-scroll'
import {Waypoint} from "react-waypoint";
import {connect} from "react-redux";


class Header extends Component {


    render() {

        if (this.props.data) {
            var name = this.props.data.name;
            var occupation = this.props.data.occupation;
            var description = this.props.data.description;
            var city = this.props.data.address.city;
            var networks = this.props.data.social.map(function (network) {
                return <li key={network.name}><a target="_blank" rel="noopener noreferrer" href={network.url}><i
                    className={network.className}/></a></li>
            })
        }
        console.log(this.props.visible);
        const visible = this.props.visible ? "fadeIn" : "fadeOut";
        const opaque = this.props.opaque ? "opaque" : "";

        return (
            <header id="home">
                <Waypoint
                    topOffset="250px"
                    onEnter={() => this.props.setVisible()}
                    onLeave={() => this.props.setInvisible()}
                />
                <nav id="nav-wrap" className={[visible, opaque].join(" ")}>

                    <a className="mobile-btn" href="#nav-wrap" title="Show navigation">Show navigation</a>
                    <a className="mobile-btn" href="#nav" title="Hide navigation">Hide navigation</a>

                    <ul id="nav" className="nav">
                        <li><Link style={{cursor: this.props.visible ? "pointer" : "default"}} activeclassname="current" activeClass="active"
                                  to="home"
                                  spy={true} smooth={true} duration={750}>Home</Link></li>
                        <li><Link style={{cursor: this.props.visible ? "pointer" : "default"}} activeclassname="current" activeClass="active"
                                  to="about"
                                  spy={true} smooth={true} duration={750}>About</Link></li>
                        <li><Link style={{cursor: this.props.visible ? "pointer" : "default"}} activeclassname="current" activeClass="active"
                                  to="resume"
                                  spy={true} smooth={true} duration={750}>Resume</Link></li>
                        <li><Link style={{cursor: this.props.visible ? "pointer" : "default"}} activeclassname="current" activeClass="active"
                                  to="portfolio"
                                  spy={true} smooth={true} duration={750}>works</Link></li>
                    </ul>


                </nav>

                <div className="row banner">

                    <div className="banner-text">
                        <h1 className="responsive-headline">I'm {name}.</h1>
                        <h3>I'm a {city} based <span>{occupation}</span>. {description}.</h3>
                        <hr/>
                        <ul className="social">
                            {networks}
                        </ul>
                    </div>
                </div>

                <p className="scrolldown">
                    <Link style={{cursor: "pointer"}} to="about" spy={true}
                          smooth={true} duration={1000}><i className="icon-down-circle"/></Link>
                </p>

            </header>
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
        setInvisible: () => dispatch({type: "SET_INVISIBLE"}),
        setVisible: () => dispatch({type: "SET_VISIBLE"})
    }

};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
