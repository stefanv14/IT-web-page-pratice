import React from 'react';
import './LoyaltyPrograms.css';
import Grid from '@material-ui/core/Grid';
import LoyalityIcon from '../../../../Assets/Images/loyality.svg';
import BlogImg from '../../../../Assets/Images/blog.png'
import ShareIcon from '../../../../Assets/Icons/ShareIcon.svg'

const loyaltyPrograms = () => {
    return (
        <div className="LoyaltyPrograms">
            <h2>Loyalty programs</h2>
            <p>We’re constantly staying on the edge of the new technology - taking the best, changing, adapting to what fits us best. We never stop at just "good enough", but always strive for “great” — and then some more. Our loyal clients caught a glimpse of that.</p>
            <Grid container spacing={3} className="GridContainer" style={{height:'auto'}}>
                    <Grid item  md={4} sm={6} xs={12}  className="GridItem">
                        <img src={LoyalityIcon} alt= "BACKEND WEB DEVELOPMENT" width="100%" style={{padding:'20px'}}/>
                        <h3 style={{color:'#333',marginBottom:'10%'}}>
                            LOYALTY PROGRAM
                        </h3>
                    </Grid>
                    <Grid item  md={4} sm={6} xs={12}  className="GridItem">
                        <img src={LoyalityIcon} alt= "BACKEND WEB DEVELOPMENT" width="100%" style={{padding:'20px'}}/>
                        <h3 style={{color:'#333',marginBottom:'10%'}}>
                            LOYALTY PROGRAM
                        </h3>
                    </Grid>
                    <Grid item  md={4} sm={6} xs={12}  className="GridItem">
                        <img src={LoyalityIcon} alt= "BACKEND WEB DEVELOPMENT" width="100%" style={{padding:'20px'}}/>
                        <h3 style={{color:'#333',marginBottom:'10%'}}>
                            LOYALTY PROGRAM
                        </h3>
                    </Grid>
                </Grid>
            <div className="Blog">
                <div className="BlogLeft">
                    <img src={BlogImg} alt= "company" width="100%"/>
                    <h4>React vs. Angular. Battle for the Front-End</h4>
                    <p style={{lineHeight:'20px'}}>Yuri Markov<br />19 June, 2019</p>
                    <p>7 min read</p>
                    <div className="Share">
                        <img src={ShareIcon} alt="share icon" width="30%" />
                    </div>
                </div>
                <div className="BlogRight">
                    <h5>React vs. Angular. Battle for the Front-End</h5>
                    <p>Anastasiia Avramenko</p>
                    <hr style={{margin:'25px 0',opacity:'0.3',width:'70%'}} />
                    <h5>Google Sheets Tutorial for Beginners</h5>
                    <p>Artur Hebda</p>
                    <hr style={{margin:'25px 0',opacity:'0.3',width:'70%'}} />
                    <h5>Product Development Roadmap – Your Guide Through the Product Strategy</h5>
                    <p>Yuri Markov</p>
                    <hr style={{margin:'25px 0',opacity:'0.3',width:'70%'}} />
                    <h5>React vs. Angular. Battle for the Front-End</h5>
                    <p>Anastasiia Avramenko</p>
                </div>
            </div>
        </div>
    );
}

export default loyaltyPrograms;
