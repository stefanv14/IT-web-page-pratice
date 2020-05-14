import React from 'react';
import JoinITClub from '../../../../Assets/Images/IT-white.svg';
import './JoinITClub.css';


const joinITClub = () => {
    return (
        <div className="JoinITClub">
            <div style={{display:'flex',width:'60%',margin: '0 auto'}} className="MobRespJoin">
                <div className="TextJoinLeft">
                    <img src={JoinITClub} alt="adada" width="50%" style={{paddingRight:'30px'}} />
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