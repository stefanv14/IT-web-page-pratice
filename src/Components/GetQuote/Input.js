import Checkbox from '@material-ui/core/Checkbox';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormHelperText from '@material-ui/core/FormHelperText';
import Input from '@material-ui/core/Input';
import { makeStyles } from '@material-ui/core/styles';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import CheckIcon from '@material-ui/icons/Check';
import ClearIcon from '@material-ui/icons/Clear';
import React from 'react';
import './GetQuote.css';


const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    flexDirection:'column'
  },
  formControl: {
    margin: theme.spacing(1),
    width: '100%'
  }
}));

export default function InputText() {
  const [name, setName] = React.useState('');
  const classes = useStyles();

  const handleChange = event => {
    setName(event.target.value);
    const email = document.getElementById("emailValid").value;
    console.log(email);
    const reEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/;
    if(reEmail.test(email)){        
        document.getElementsByClassName("ClearIcon")[0].style.display = "none";
        document.getElementsByClassName("CheckIcon")[0].style.display = "block";
        document.getElementsByClassName("emailValid")[0].style.color = "#333";
        document.getElementsByClassName("errText1")[0].style.display = "none";
        document.getElementsByClassName("errText1")[0].style.display = "none";
        document.getElementsByClassName("errText2")[0].style.display = "block";

    }else{
      document.getElementsByClassName("ClearIcon")[0].style.display = "block";
      document.getElementsByClassName("emailValid")[0].style.color = "red";
      document.getElementsByClassName("CheckIcon")[0].style.display = "none";
      document.getElementsByClassName("errText1")[0].style.display = "block";
      document.getElementsByClassName("errText2")[0].style.display = "none";
    }
  };
  
  const blurChange = () => {
    document.getElementsByClassName("ClearIcon")[0].style.display = "none";
    document.getElementsByClassName("CheckIcon")[0].style.display = "none";
    document.getElementsByClassName("emailValid")[0].style.color = "#333";
  }
  
  return (
    <div style={{margin:'0 auto'}}>
      <div className={classes.container}>
        <div>
          <FormControl className={classes.formControl}>
              <div className="MobWidth">
                  <Input
                      id="emailValid"
                      className="emailValid"
                      value={name}
                      placeholder="Enter your email address"
                      onChange={handleChange}
                      onBlur={blurChange}
                      aria-describedby="component-error-text"
                      style={{color:'#333',position:'relative',width:'95%'}}
                  />
                  <CheckIcon fontSize="small" className="CheckIcon" style={{display:'none',color:'var(--theme-color)',position:'absolute',right: '15px' , top:'2px'}} />
                  <ClearIcon fontSize="small" className="ClearIcon" style={{display:'none',color:'red',position:'absolute',right: '15px' , top:'2px'}} />
              </div>
              <FormHelperText className="errText1" id="component-error-text" style={{display:'none',color:'#ccc'}}>
                Error
              </FormHelperText>
              <FormHelperText className="errText2" id="component-error-text" style={{display:'none',color:'#ccc'}}>
                Ceo at
              </FormHelperText>
            
          </FormControl>
          <TextareaAutosize aria-label="minimum height" rows={13} placeholder="Message" className="TextArea" />
        </div>
        
          <FormControlLabel
            control={
              <Checkbox
                checked={true}
                color="#fff"
              />
            }
            label="I would like to recive IT club newsletter "
          />
      </div>
      <hr />
    </div>
  );
}