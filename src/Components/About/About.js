import React from 'react';

import './About.css';
import Logo from '../../Assets/Images/logo.svg';

const about = () => {
    return (
        <div className="About" id="About">
            <h1 className="AboutH1">
                We are 
                <span>
                    <img src={Logo} alt="logo" width="30%" className="AboutLogo" />
                </span>
            </h1>
            <div className="MobAbout">
                <div className="Left">
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci eaque reprehenderit sapiente ipsa eum aut accusamus dolor nihil saepe consequuntur?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci eaque reprehenderit sapiente ipsa eum aut accusamus dolor nihil saepe consequuntur?</p>
                </div>
                <div className="Right">

                </div>
            </div>
        </div>
    )
}

export default about;