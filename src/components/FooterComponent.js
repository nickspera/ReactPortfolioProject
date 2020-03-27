import React from 'react';
import { Link } from 'react-router-dom';

function Footer(props) {
    return ( 
        <footer className="page-footer">
            <div className="container">
                <div className="row text-center d-flex justify-content-center">
                    <div className="col-sm-4">
                        <h6 className="text-uppercase">
                            <Link className="btn text-white" role="button" to='/home'>Home</Link>
                        </h6>
                    </div>
                    <div className="col-sm-4">
                        <h6 className="text-uppercase">
                            <Link className="btn text-white" role="button" to='/contactus'>Contact</Link>
                        </h6>
                    </div>
                </div>
                <hr className="rgba-white-light footline" />
                <div className="row justify-content-center">
                    <div className="col-2 text-center">
                        <a className="btn text-white" href="http://facebook.com">
                            <i className="fa fa-facebook fa-lg"></i>
                        </a>
                    </div>
                    <div className="col-2 text-center">
                        <a className="btn text-white" href="http://instagram.com">
                            <i className="fa fa-instagram fa-lg"> </i>
                        </a>
                    </div>
                </div>
                <div className="footer-copyright text-center">
                    &copy; GainsFitness LLC
                </div>
            </div>
        </footer>
    )
}

export default Footer;