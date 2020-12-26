import React, {Component} from 'react';
import {Link} from "react-scroll";

class Footer extends Component {

    render() {
        if (this.props.data) {
            return (
                <footer>
                    <div className="row">
                        <div className="twelve columns">
                            <ul className="social-links">
                                {this.props.data.social.map(network => {
                                    return <li key={network.name}><a target="_blank" rel="noopener noreferrer" href={network.url}><i
                                        className={network.className}/></a></li>
                                })}
                            </ul>

                            <ul className="copyright">
                                <li>Design by <a title="Styleshout" href="http://www.styleshout.com/">Styleshout</a></li>
                            </ul>

                        </div>
                        <div id="go-top"><Link style={{cursor: "pointer"}} to="home" spy={true}
                                               smooth={true} duration={750}><i className="icon-up-open"/></Link></div>
                    </div>
                </footer>
            );
        }
        else return (<div/>);


    }
}

export default Footer;
