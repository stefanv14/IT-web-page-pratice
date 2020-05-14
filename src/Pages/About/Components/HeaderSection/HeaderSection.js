import React from 'react';

import './HeaderSection.css';
import Header from '../Header/Header';
import { Button } from '@material-ui/core';
import DownloadIcon from '../../../../Assets/Icons/downloadIcon.svg'

const headerSection = () => {
    return (
        <React.Fragment>
            <header className="HeaderAbout">
                <div className="TextLeftAbout" style={{color:'#184C7F'}}>
                    <p>Specific info about company, values and philosophy. Sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis.</p>
                    <Button variant="outlined"
                        style={{background:'#fff',
                                width:'100%',
                                color:'#DC143C',
                                padding:'1px 50px',
                                marginTop:'6%',
                                fontSize:'28px'
                                }} className="RespBtn">
                        <img src={DownloadIcon} alt="download icon" width="5%" />DOWNLOAD MEDIA KIT
                    </Button>
                </div>
                <div className="TextRightAbout">

                </div>
            </header>
        </React.Fragment>
    )
}

export default headerSection;
