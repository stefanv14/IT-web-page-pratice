import { Button } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import React from 'react';
import GetQuoteIcon from '../../../../Assets/Images/GetQuoteIcon.svg';
import ITClubIcon from '../../../../Assets/Images/ITClubIcon.svg';
import Logo from '../../../../Assets/Images/logo.svg';
import NewsletterIcon from '../../../../Assets/Images/NewsletterIcon.svg';
import './Footer.css';


const footer = () => {
    return (
        <div className="Footer">
            <div className="Wrap">
                <div className="Info">
                    <img src={Logo} alt="addad" width="50%" style={{padding:'20% 0'}} />
                    <p style={{lineHeight:'25px',width:'80%'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed molestiae ducimus itaque recusandae cupiditate labore nesciunt nostrum soluta, nisi repellat? </p>
                    <span style={{color:'var(--theme-color)',padding:'10%'}}>
                        <p>office@IT.co</p>
                        <p>+381 64 397 4918</p>
                    </span>
                    <span style={{color:'#ccc',lineHeight:'30px'}}>
                        <p><strong>BELGRADE, SERBIA</strong><br />Bulevar Mihaila Pupina 422/5</p>
                    </span>
                </div>
                <div className="Nav">
                    <ul  className="FooterSpan">
                        <li>Home</li>
                        <li>What we do</li>
                        <li>About</li>
                        <li>Careers</li>    
                        <li>Contact</li>
                    </ul>
                </div>
                <div className="fServices">
                    <ul>
                        <li>Backend development</li>
                        <li>Frontend development</li>
                        <li>Mobile development</li>
                        <li>Web design</li>
                        <li>Marketing & SEO</li>
                        <li>Business Consulting</li>
                    </ul>
                </div>
                
                <div className="Actions">
                    <p className="ButtonResp">
                        <button className= "ToTop" >
                            <KeyboardArrowUpIcon style={{color:'#ccc',fontSize:'50px'}}/>
                        </button>
                    </p>
                    <div style={{display:'flex',color:'#A7A9AC'}}>
                        <img src={ITClubIcon} alt="IT Club Icon" width="7%" />
                        <p style={{paddingLeft:'5%',width:'40%'}}>
                            IT Club
                        </p>
                    </div>
                    <div style={{display:'flex', justifyContent:'space-between'}}>
                        <Button variant="outlined" className="FooterBtn">
                            View
                        </Button>
                        <Button variant="outlined" className="FooterBtn">
                            Join
                        </Button>
                    </div>
                    <div style={{display:'flex',color:'#A7A9AC'}}>
                        <img src={GetQuoteIcon} alt="Get quote Icon" width="4%" />
                        <p style={{paddingLeft:'5%'}}>
                            Get quoute
                        </p>
                    </div>
                        <Button variant="outlined" className="FooterBtn"
                            style={{width:'100%', fontWeight:'900'}}>
                            BOOK A CALL
                        </Button>
                    <div style={{display:'flex',color:'#A7A9AC'}}>
                        <img src={NewsletterIcon} alt="Get quote Icon" width="7%" />
                        <p style={{paddingLeft:'5%'}}>
                            Newsletter
                        </p>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                        <input placeholder="E-mail here" className="InputEmail" />
                        <Button variant="outlined" className="FooterBtn">
                            SUBSCRIBE
                        </Button>
                    </div>
                </div>
                
            </div>
            <hr style={{margin:'3% auto 0 auto',width:'80%',color:'#fff'}} />  
            <div className="CopyRight">
                <p>&copy;IT Tehnologies - powered by IT Group</p>
                <div style={{display:'flex',alignItems:'flex-start'}}>
                    <InstagramIcon style={{fontSize:'40px',marginTop:'7px'}} />
                    <p className="Insta">
                        in
                    </p>
                </div>
                <div style={{display:'flex'}}>
                    <p>Privacy policy</p>
                    <p>Terms and conditions</p>
                </div>
            </div>
        </div>
    )
}

export default footer;