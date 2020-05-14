import React from 'react';

import './Teams.css';
import Team1 from '../../Assets/Images/teams1.svg';
import Team2 from '../../Assets/Images/teams2.svg';

const teams = () => {
    return (
        <div className="Teams" id="Teams">
            <h1>
                Choose your play
            </h1>
            <div className="MobTeams">
                <div className="DedicatedTeams">
                    <img src={Team1} alt="team1" />
                    <h2>
                        Dedicated teams
                    </h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quod placeat cum eaque doloremque sapiente quas eligendi corrupti minus excepturi? Doloremque expedita nam dolore recusandae modi officia unde. Repellat, dignissimos?</p>
                </div>
                <p className="HR">
                    OR
                </p>
                <div className="ProjectTeams">
                    <img src={Team2} alt="team2" />
                    <h2>
                        Project teams
                    </h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dicta quod placeat cum eaque doloremque sapiente quas eligendi corrupti minus excepturi? Doloremque expedita nam dolore recusandae modi officia unde. Repellat, dignissimos?</p>
                </div>
            </div>
        </div>
    )
}

export default teams;