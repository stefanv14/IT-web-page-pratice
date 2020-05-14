import React from 'react';
import './Buttons.css'
import { Button } from '@material-ui/core';
import DownloadIcon from '../../../../Assets/Icons/download-icon.svg'
import ClientsHand from '../../../../Assets/Icons/clients-hand.svg'

const buttons = () => {
    return (
        <div className="Buttons">
            <div className="WrapDiv">
                <Button variant="outlined" className="Btn">
                    <img src={ClientsHand} alt="download icon" width="8%" className="IconImg" />
                    CLIENTS
                </Button>
                <Button variant="outlined" className="Btn">
                    <img src={DownloadIcon} alt="download icon" width="5%" className="IconImg" />
                    DOWNLOAD PRESENTATION
                </Button>
            </div>
        </div>
    );
}

export default buttons;
