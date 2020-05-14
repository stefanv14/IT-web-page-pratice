import { Button } from '@material-ui/core';
import React from 'react';
import { Link } from 'react-scroll';
import './HeaderSection.css';



const headerSection = () => {
    return (
        <React.Fragment>
            <header className="Header">
                <div className="TextLeft">
                    <h1 className="Heading">
                        A luxury fashion brand for Digital Presence!
                    </h1>
                    <p className="hsText">
                        IT technologies creates the product you desire with cutting edge technology and following the latest trends in design and user-experiance
                    </p><br />
                    <Button variant="outlined" className="hsBtn">
                    <Link   activeClass="active"
                            to="About"
                            spy={true}
                            smooth={true}
                            hashSpy={true}
                            offset={50}
                            duration={2000}
                        >
                        Learn more
                        </Link>
                    </Button>
                </div>
                <div className="TextRight">

                </div>
            </header>
        </React.Fragment>
    )
}

export default headerSection;
