import { Button, Fade, Paper, Popper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import InstagramIcon from '@material-ui/icons/Instagram';
import React from 'react';
import { Link } from 'react-router-dom';
import { animateScroll as scroll } from 'react-scroll';
import HamburgerIcon from '../../Assets/Icons/B22_IT__header hamburger.svg';
import LoginIcon from '../../Assets/Icons/B22_IT__header login.svg';
import GetQuoteIcon from '../../Assets/Images/GetQuoteIcon.svg';
import ITClubIcon from '../../Assets/Images/ITClubIcon.svg';
import Logo from '../../Assets/Images/logo.svg';
import NewsletterIcon from '../../Assets/Images/NewsletterIcon.svg';
import Auth from '../Header/Auth/Auth';
import './Header.css';



const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor:'orange'
  },
  button: {
    alignSelf:'flex-end',
    width:'128%',
    marginLeft:'5%',
    padding:'1% 9%',
    fontSize:'1.2em',
    background:'#fff',
    [theme.breakpoints.down('sm')]: {
      display:'none',
    }
  },
  menuButton: {
    
    marginRight: theme.spacing(2),
  },
  Nav: {
      display: 'flex',
  },
  Paper: {
      width: 'auto',
      height: 'auto',
      marginTop: '8%',
      display: 'flex',
      flexDirection: 'column',
      padding: '0.8rem',
      [theme.breakpoints.down('xs')]: {
        marginRight: 0
      }
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  dense: {
    marginTop: theme.spacing(2),
    color: '#333'
  },
  LoginButton: {
    backgroundColor: 'var(--theme-color)',
    width: '60%',
    borderRadius: '20px',
    color: 'white',
    marginTop: '3%',
    alignSelf: 'flex-end',
    border: 'none'
  },
  RespNav: {
      display:'flex', width:'15%',justifyContent:'space-between',
      alignItems:'center',
      [theme.breakpoints.down('sm')]: {
        width:'90%',
        fontSize:'10px',
     }
  },
  LoginIcon: {
      width:'102%',
      marginRight:'100%',
      [theme.breakpoints.down('sm')]: {
        width:'20%',
        marginRight:'10%'
      }
  },
  MenuIcon: {
      width:'130%',
      marginLeft:'60%',
      cursor:'pointer',
      [theme.breakpoints.down('sm')]: {
        width:'20%',
        marginLeft:'1%'
      }
  },
  Navigation: {
    display:'flex', 
    justifyContent:'space-between',
    width:'10%',
      [theme.breakpoints.down('sm')]: {
        width:'55%',
        alignItems: 'center',
        height:'75px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'row',
        paddingLeft: 0,
        justifyContent:'flex-end'
      }
  },
  GetQuote: {
    color:'#DC143C',
    lineHeight:'0.5rem',
    fontWeight:'bold'
  },
  Logo: {
    width:'10%',
    alignContent:'flex-start'
  }
}));

export default function Header(props) {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [loggedIn, setLoggedIn] = React.useState(false);

  const handleClick = event => {
    event.preventDefault();
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  const loginHandle = event => {
    setLoggedIn(true);
  }

  const logoutHandle = event => {
    setLoggedIn(false);
    document.getElementById("myNav").style.width = "0%";
  }

  window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
      document.getElementsByClassName("Head")[0].style.background = "#fff";
      document.getElementsByClassName("Head")[0].style.top = 0;

    }
    else {
      document.getElementsByClassName("Head")[0].style.background = "transparent";
      document.getElementsByClassName("Head")[0].style.top = '4%';
    }     
  });

  const openNav = () => {
    document.getElementById("myNav").style.width = "100%";
  }
  
  const closeNav = () => {
    document.getElementById("myNav").style.width = "0%";
  }

  const scrollToTop = () => {
    scroll.scrollToTop();
  }

  return (
      <div className="Head">
        <div className="Logo">
            <img src={Logo} alt="FOOD Recipes" className="LogoImg" width="80%"/>
        </div>
        <div  className={classes.RespNav}>
          <div className="MobNav">
            <Button variant="contained" color="#fff" className={classes.button}>
              <p className={classes.GetQuote}>
                GET QUOTE
              </p>
            </Button>
          </div>
            <nav className={classes.Navigation} >
              <img onMouseEnter={handleClick} src={LoginIcon} alt="bla" width="55%" className={classes.LoginIcon} />
              {loggedIn ? null :
              <Popper id={id} 
                      open={open} 
                      anchorEl={anchorEl} 
                      transition 
                      className="Popper"> 
                  {({ TransitionProps }) => (
                      <Fade {...TransitionProps} timeout={350}>
                        <Paper className={classes.Paper}>
                          <Auth classes={classes} 
                                loginHandle={loginHandle} />
                        </Paper>
                      </Fade>
                      )}
              </Popper>
              }
              <img src={HamburgerIcon} alt="" width="55%" className={classes.MenuIcon} onClick={openNav} />
              <div id="myNav" className="overlay">
              <img src={Logo} alt="FOOD Recipes" className="LogoImg" width="10%" style={{position:'absolute',top:'2%',left:'2%'}}/>
                <a href="javascript:void(0)" className="closebtn" onClick={closeNav} style={{padding:0}}>&times;</a>
                <div class="overlay-content">
                  <div style={{display:'flex',justifyContent:'space-between'}} className="ForMobile">
                    <div className="Actions" style={{width:'43%'}}>
                    <div className="ITClub">
                        <img src={ITClubIcon} alt="IT Club Icon" width="7%" />
                        <p className="ITClubText" style={{width:'26%'}}>
                        IT Club
                        </p>
                    </div>
                    <div className="ViewJoin">
                        <Button variant="outlined" className="FooterBtn" style={{background:'#D31654',color:'#fff'}}>
                            View
                        </Button>
                        <Button variant="outlined" className="FooterBtn" style={{background:'#D31654',color:'#fff'}}>
                            Join
                        </Button>
                    </div>
                    <div className="FooterGetQuote">
                        <img src={GetQuoteIcon} alt="Get quote Icon" width="4%" />
                        <p className="FooterGetQuoteText" style={{width:'30%'}}>
                            Get quoute
                        </p>
                    </div>
                        <Button variant="outlined" className="FooterBtnBOOK" style={{background:'#D31654',color:'#fff'}}>
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
                        <Button variant="outlined" className="FooterBtn" style={{marginLeft:'5%',background:'#D31654',color:'#fff'}}>
                            SUBSCRIBE
                        </Button>
                    </div>
                    <div style={{display:'flex',justifyContent:'space-between'}}>
                      <span style={{lineHeight:'14px',color:'var(--theme-color)'}}>
                          <p style={{lineHeight:'14px'}}>office@IT.co</p>
                          <p style={{lineHeight:'14px'}}> +381 64 397 4918</p>
                      </span>
                      <span className="InfoLocation">
                          <p style={{fontSize:'0.7em',color:'#333'}}><strong>BELGRADE, SERBIA</strong><br />
                              Bulevar Mihaila Pupina
                          </p>
                      </span>
                    </div>
                    </div>
                    <div style={{width:'30%',textAlign:'right'}} className="MenuLink">
                      <p>menu</p>
                      <Link to="/" className="MenuLinks" onClick={scrollToTop}>
                        HOME
                      </Link>
                      <Link to="/about" className="MenuLinks" onClick={scrollToTop}>
                        ABOUT
                      </Link>
                      <a className="MenuLinks">CONTACT</a>
                      <a className="MenuLinks">WHAT WE DO</a>
                      {loggedIn === true ? <a className="MenuLinks" onClick={logoutHandle}>LOGOUT</a> : null}
                    </div>
                    
                    </div>
                    <hr style={{marginTop:'8%'}}/>  
                    <div className="CopyRight" style={{fontSize:'0.8em'}}>
                        <p>&copy; IT Tehnologies - powered by IT Group</p>
                        <div className="CopyRightSocial">
                            <InstagramIcon className="IgIcon" />
                            <p className="Insta">
                                in
                            </p>
                        </div>
                        <div className="PrivacyPolicy">
                            <p>Privacy policy</p>&nbsp;
                            <p>Terms and conditions</p>
                        </div>
                    </div>
                  </div>
                </div>
            </nav>
        </div>
    </div>
  );
}