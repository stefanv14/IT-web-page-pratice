import React from 'react';
import JoinITClub from '../../Assets/Images/IT-white.svg';
import './JoinITClub.css';


const joinITClub = () => {
    return (
        <div className="JoinITClub">
            <div className="MobRespJoin">
                <div className="TextJoinLeft">
                    <img src={JoinITClub} alt="adada" width="50%" className="ClubImg" />
                    <p>
                        IT
                        <br />
                        <span className="Group">
                            GROUP
                        </span>
                    </p>
                </div>
                <div className="TextJoinRight">
                    <p>
                        Join <strong>IT Club</strong><br />and get special offers from our team
                    </p>
                    <button className="BtnJoin">
                        JOIN
                    </button>
                </div>
            </div>
        </div>
    )
}

export default joinITClub;