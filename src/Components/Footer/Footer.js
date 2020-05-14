import { Button } from '@material-ui/core';
import InstagramIcon from '@material-ui/icons/Instagram';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import GetQuoteIcon from '../../Assets/Images/GetQuoteIcon.svg';
import ITClubIcon from '../../Assets/Images/ITClubIcon.svg';
import Logo from '../../Assets/Images/logo.svg';
import NewsletterIcon from '../../Assets/Images/NewsletterIcon.svg';
import './Footer.css';


const footer = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
      }
    return (
        <div className="Footer">
            <div className="Wrap">
                <div className="Info">
                    <img src={Logo} alt="addad" width="50%" className="FooterLogoImg" />
                    <p className="InfoText">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed molestiae ducimus itaque recusandae cupiditate labore nesciunt nostrum soluta, nisi repellat? 
                    </p>
                    <span className="InfoContact">
                        <p>office@it.co</p>
                        <p>+381 64 000 0000</p>
                    </span>
                    <span className="InfoLocation">
                        <p><strong>BELGRADE, SERBIA</strong><br />
                            Bulevar Mihaila Pupina
                        </p>
                    </span>
                </div>
                <div className="Nav">
                    <ul  className="FooterSpan">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">What we do</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Careers</a></li>    
                        <li><a href="#">Contact</a></li>
                    </ul>
                </div>
                <div className="fServices">
                    <ul>
                        <li><a href="#">Backend development</a></li>
                        <li><a href="#">Frontend development</a></li>
                        <li><a href="#">Mobile development</a></li>
                        <li><a href="#">Web design</a></li>
                        <li><a href="#">Marketing & SEO</a></li>
                        <li><a href="#">Business Consulting</a></li>
                    </ul>
                </div>
                
                <div className="Actions">
                    <p className="ButtonResp">
                        <button className= "ToTop" onClick={scrollToTop} >
                            <KeyboardArrowUpIcon className="ArrowUpIcon"/>
                        </button>
                    </p>
                    <div className="ITClub">
                        <img src={ITClubIcon} alt="IT Club Icon" width="7%" />
                        <p className="ITClubText">
                            IT Club
                        </p>
                    </div>
                    <div className="ViewJoin">
                        <Button variant="outlined" className="FooterBtn">
                            View
                        </Button>
                        <Button variant="outlined" className="FooterBtn">
                            Join
                        </Button>
                    </div>
                    <div className="FooterGetQuote">
                        <img src={GetQuoteIcon} alt="Get quote Icon" width="4%" />
                        <p className="FooterGetQuoteText">
                            Get quoute
                        </p>
                    </div>
                        <Button variant="outlined" className="FooterBtnBOOK">
                            BOOK A CALL
                        </Button>
                    <div className="FooterNewsLetter">
                        <img src={NewsletterIcon} alt="Get quote Icon" width="7%" />
                        <p className="NewsLetterText">
                            Newsletter
                        </p>
                    </div>
                    <div className="FooterSubscribe">
                        <input placeholder="E-mail here" className="InputEmail" />
                        <Button variant="outlined" className="FooterBtn">
                            SUBSCRIBE
                        </Button>
                    </div>
                </div>
            </div>
            <hr className="FooterHR"/>  
            <div className="CopyRight">
                <p>&copy; IT Tehnologies - powered by IT Group</p>
                <div className="CopyRightSocial">
                    <a href="#"><InstagramIcon className="IgIcon" /></a>
                    <a href="#" className="Insta">
                        in
                    </a>
                </div>
                <div className="PrivacyPolicy">
                    <p>Privacy policy</p>&nbsp;
                    <p>Terms and conditions</p>
                </div>
            </div>
        </div>
    )
}

export default footer;