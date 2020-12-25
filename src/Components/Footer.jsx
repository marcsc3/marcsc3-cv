import React, {Component} from 'react';
import {Link} from "react-scroll";

class Footer extends Component {
    render() {

        let networks;
        if (this.props.data) {
            networks = this.props.data.social.map(function (network) {
                return <li key={network.name}><a target="_blank" rel="noopener noreferrer" href={network.url}><i
                    className={network.className}/></a></li>
            })
        }

        return (
            <footer>
                <div className="row">
                    <div className="twelve columns">
                        <ul className="social-links">
                            {networks}
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
}

export default Footer;
