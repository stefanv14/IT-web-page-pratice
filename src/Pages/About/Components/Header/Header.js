import { Button, Fade, Paper, Popper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import React from 'react';
import HamburgerIcon from '../../../../Assets/Icons/B22_IT__header hamburger.svg';
import LoginIcon from '../../../../Assets/Icons/B22_IT__header login.svg';
import Logo from '../../../../Assets/Images/logo.svg';
import Auth from '../Header/Auth/Auth';
import './Header.css';


const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor:'orange'
  },
  button: {
    alignSelf:'flex-end',
    width:'120px',
    padding:0,
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
      display:'flex', width:'17%',justifyContent:'space-between',alignItems:'center',
      [theme.breakpoints.down('sm')]: {
        width:'90%',
        fontSize:'10px',
     }
  },
  LoginIcon: {
      marginRight:'100%',
      [theme.breakpoints.down('sm')]: {
        width:'20%',
        marginRight:'10%'
      }
  },
  MenuIcon: {
      [theme.breakpoints.down('sm')]: {
        width:'20%'
      }
  },
  Navigation: {
    display:'flex', justifyContent:'space-between',width:'20%',
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
  }

  window.addEventListener('scroll', function() {
    if (document.body.scrollTop > 160 || document.documentElement.scrollTop > 160) {
      document.getElementsByClassName("Head")[0].style.background = "#fff";
    }
    else {
      document.getElementsByClassName("Head")[0].style.background = "transparent";
    }     
  });

  return (
      <div className="Head">
        <div className="Logo" style={{width:'10%',alignContent:'flex-start'}}>
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
              <img src={HamburgerIcon} alt="" width="55%" className={classes.MenuIcon} />
            </nav>
        </div>
    </div>
  );
}