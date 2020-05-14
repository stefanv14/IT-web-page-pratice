import React from 'react';

import './GetQuote.css';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Input from './Input';
import SERVICES1 from '../../Assets/Images/S1.svg';
import SERVICES2 from '../../Assets/Images/S2.svg';
import SERVICES3 from '../../Assets/Images/S3.svg';
import SERVICES4 from '../../Assets/Images/S4.svg';
import SERVICES5 from '../../Assets/Images/S5.svg';
import SERVICES6 from '../../Assets/Images/S6.svg';
import Team1 from '../../Assets/Images/teams1.svg';
import Team2 from '../../Assets/Images/teams2.svg';
import Grid from '@material-ui/core/Grid';

const getQuote = () => {
    const open = () => {
        // document.getElementsByClassName("Hide")[0].style.display = "block";
        var x = document.getElementsByClassName("Hide")[0];
        if (x.style.display === "none") {
            x.style.display = "block";
            document.getElementsByClassName("btnIcon")[0].style.transform = "rotate(0deg)";
        } else {
            x.style.display = "none";
            document.getElementsByClassName("btnIcon")[0].style.transform = "rotate(180deg)";
        }
    }
    return (
        <div className="GetQuote">
            <div className="MobQuote" >
                <div className="MobGetQuote">
                    <h1>Get</h1>
                    <button className="btnBOOK" onClick={open}>
                        <ExpandLessIcon className="btnIcon" fontSize="large" /> &nbsp;&nbsp; 
                        BOOK A CALL
                    </button>
                </div>
                <hr />
                <div className="Hide">
                <h3 className="RespLineHeight">
                    SEND US AN EMAIL AND WE WILL GET BACK TO YOU IN NO TIME!
                </h3>
                <div className="GetQuoteForm">
                    <Input />
                </div>
                <div className="MobServices">
                    <div className="RespMob">
                    <h3 className="RespAsset">
                        WORK METHOD
                    </h3>
                        <div className="MobRow">
                        <div className="DedicatedTeamsGet">
                            <img src={Team1} alt="team1" /> 
                            <h3>
                                Dedicated teams
                            </h3>
                        </div>
                        <div className="ProjectTeamsGet">
                            <img src={Team2} alt="team2" />
                            <h3>
                                Project teams
                            </h3>
                        </div>
                        </div>
                    </div>
                    <div className="GetQuoteServices">
                    <h3>
                        SERVICES
                    </h3>
                        <Grid container spacing={3} className="GridContainer">
                            <Grid item  md={4} sm={6} xs={4}  className="GridItemGet">
                                <img src={SERVICES1} alt= "BACKEND WEB DEVELOPMENT" width="100%" className="sImageGet"/>
                                <h3>
                                    Backend
                                </h3>
                            </Grid>
                            <Grid item  md={4} sm={6} xs={4}  className="GridItemGet">
                                <img src={SERVICES2} alt= "FRONTEND WEB DEVELOPMENT" width="100%" className="sImageGet"/>
                                <h3>
                                    Frontend
                                </h3>
                            </Grid>
                            <Grid item  md={4} sm={6} xs={4}  className="GridItemGet">
                                <img src={SERVICES3} alt= "MOBILE WEB DEVELOPMENT" width="100%" className="sImageGet"/>
                                <h3>
                                    Mobile
                                </h3>
                            </Grid>
                            <Grid item  md={4} sm={6} xs={4}  className="GridItemGet">
                                <img src={SERVICES4} alt= "DESIGN WEB DEVELOPMENT" width="100%" className="sImageGet"/>
                                <h3>
                                    Design
                                </h3>
                            </Grid>
                            <Grid item  md={4} sm={6} xs={4}  className="GridItemGet">
                                <img src={SERVICES5} alt= "MARKETING & SEO" width="100%" className="sImageGet"/>
                                <h3>
                                    Marketing & SEO
                                </h3>
                            </Grid>
                            <Grid item  md={4} sm={6} xs={4}  className="GridItemGet">
                                <img src={SERVICES6} alt= "BUSSINESS DEVELOPMENT" width="100%" className="sImageGet"/>
                                <h3>
                                    Business dev
                                </h3>
                            </Grid>
                        </Grid>
                    </div>
                </div>
                <div className="SendInquiry">
                    <button className="btnBOOK">
                        SEND INQUIRY
                    </button>
                </div>
                </div>
            </div>
        </div>
    )
}

export default getQuote;