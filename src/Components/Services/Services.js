import Grid from '@material-ui/core/Grid';
import CheckIcon from '@material-ui/icons/Check';
import React from 'react';
import SERVICES1 from '../../Assets/Images/S1.svg';
import SERVICES2 from '../../Assets/Images/S2.svg';
import SERVICES3 from '../../Assets/Images/S3.svg';
import SERVICES4 from '../../Assets/Images/S4.svg';
import SERVICES5 from '../../Assets/Images/S5.svg';
import SERVICES6 from '../../Assets/Images/S6.svg';
import './Services.css';


const services = () => {
    return (
        <div id="ServicesWrap">
            <div className="Services" id="services" >
                <h2>
                    IT lab
                </h2>
                    <p className="Center">We never build something your business doesn`t need. Our developers live for the thrill, and break the boundaries of digital. By engaging even one developer, you recive an entire machinery of experts to back you up. Whatever the Q, we got the A.</p>
                    <p className="AlignCenter">
                        <button className="Link">
                            ourtools
                        </button>
                    </p>   
                <h3>
                    SOFTWARE DEVELOPMENT
                </h3>
                <Grid container spacing={3} className="GridContainer" style={{width:'126%',marginLeft:'-13%',overflow:'visible',height:'auto'}}>
                    <Grid item  md={4} sm={6} xs={12}  className="GridItemServ">
                        <img src={SERVICES1} alt= "BACKEND WEB DEVELOPMENT" width="100%" className="sImageServ"/>
                        <h3 style={{marginTop:'8.5%',marginBottom:'8.5%'}}>
                            BACKEND WEB DEVELOPMENT
                        </h3>
                        <p>
                            <CheckIcon fontSize="small" className="CheckIcon"/>
                            Custom functionalities
                        </p>
                        <p>
                            <CheckIcon fontSize="small" className="CheckIcon"/>
                            Databases
                        </p>
                        <p>
                            <CheckIcon fontSize="small" className="CheckIcon"/>
                            Administration
                        </p>
                        <p className="Center">
                            <button className="Link">
                                Learn more
                            </button>
                        </p>
                    </Grid>
                    <Grid item  md={4} sm={6} xs={12}  className="GridItemServ">
                        <img src={SERVICES2} alt= "FRONTEND WEB DEVELOPMENT" width="100%" className="sImageServ"/>
                        <h3 style={{marginTop:'8.5%',marginBottom:'8%'}}>
                            FRONTEND WEB DEVELOPMENT
                        </h3>
                        <p className="LeftIndent">
                            <CheckIcon fontSize="small" className="CheckIcon" />
                            HTML
                        </p>
                        <p className="LeftIndent">
                            <CheckIcon fontSize="small" className="CheckIcon" />
                            CSS
                        </p>
                        <p className="LeftIndent">
                            <CheckIcon fontSize="small" className="CheckIcon" />
                            JavaScript
                        </p>
                        <p className="Center">
                            <button className="Link">
                                Learn more
                            </button>
                        </p>
                    </Grid>
                    <Grid item  md={4} sm={6} xs={12}  className="GridItemServ">
                        <img src={SERVICES3} alt= "MOBILE DEVELOPMENT" width="100%" className="sImageServ"/>
                        <h3 style={{marginTop:'8.5%',marginBottom:'8%'}}>
                            MOBILE<br /> DEVELOPMENT
                        </h3>
                        <p className="MobileIndent">
                            <CheckIcon fontSize="small" className="CheckIcon" />
                            Android Apps
                        </p>
                        <p className="MobileIndent">
                            <CheckIcon fontSize="small" className="CheckIcon" />
                            iOS Apps
                        </p>
                        <p className="MobileIndent">
                            <CheckIcon fontSize="small" className="CheckIcon" />
                            Web Apps
                        </p>
                        <p className="Center">
                            <button className="Link">
                                Learn more
                            </button>
                        </p>
                    </Grid>
                </Grid>
                <h3 className="DesignMarketingConsulting">
                    DESIGN | MARKETING | CONSULTING
                </h3>
                <Grid container spacing={3} className="GridContainer" style={{width:'126%',marginLeft:'-13%',overflow:'visible',height:'auto',paddingTop:'5%'}}>
                    <Grid item  md={4} sm={6} xs={12}  className="GridItemServ">
                        <img src={SERVICES4} alt= "DESIGN" width="100%" className="sImageServ"/>
                        <h3 style={{marginTop:'9%',marginBottom:'8%'}}>
                            DESIGN<br />&nbsp;
                        </h3>
                        <p>
                            <CheckIcon fontSize="small" className="CheckIcon" />
                            Branding
                        </p>
                        <p>
                            <CheckIcon fontSize="small" className="CheckIcon" />
                            UX/UI Design
                        </p>
                        <p>
                            <CheckIcon fontSize="small" className="CheckIcon" />
                            Custom Design
                        </p>
                        <p className="Center">
                            <button className="Link">
                                Learn more
                            </button>
                        </p>
                    </Grid>
                    <Grid item  md={4} sm={6} xs={12}  className="GridItemServ" style={{marginLeft:'-1%'}}>
                        <img src={SERVICES5} alt= "MARKETING & SEO" width="100%" className="sImageServ"/>
                        <h3 style={{marginTop:'8%',marginBottom:'8%'}}> 
                            MARKETING &<br />SEO
                        </h3>
                        <p>
                            <CheckIcon fontSize="small" className="CheckIcon" />
                            Sales strategy
                        </p>
                        <p>
                            <CheckIcon fontSize="small" className="CheckIcon" />
                            We Analitycs
                        </p>
                        <p>
                            <CheckIcon fontSize="small" className="CheckIcon" />
                            Keyword campagines
                        </p>
                        <p className="Center">
                            <button className="Link">
                                Learn more
                            </button>
                        </p>
                    </Grid>
                    <Grid item  md={4} sm={6} xs={12}  className="GridItemServ" style={{marginLeft:'1%'}}>
                        <img src={SERVICES6} alt= "BUSINESS CONSULTING" width="100%" className="sImageServ"/>
                        <h3 style={{marginTop:'9%',marginBottom:'8%'}}>
                            BUSINESS<br />CONSULTING
                        </h3>
                        <p>
                            <CheckIcon fontSize="small" className="CheckIcon" />
                            Business dev
                        </p>
                        <p>
                            <CheckIcon fontSize="small" className="CheckIcon" />
                            Goal-Attaining
                        </p>
                        <p>
                            <CheckIcon fontSize="small" className="CheckIcon" />
                            Problem solving
                        </p>
                        <p className="Center">
                            <button className="Link">
                                Learn more
                            </button>
                        </p>
                    </Grid>
                </Grid>
            </div>
        </div>
    )
}

export default services;