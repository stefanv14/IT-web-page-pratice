import React from 'react';
import PartnersImg from '../../../../Assets/Icons/partners.svg';
import EmailInput from '../EmailInput/EmailInput';
import './ITPartners.css';

const ITPartners = () => {
    return (
        <div className="ITPartners">
            <h2>IT Partners</h2>
            <div>
                <div className="PartnersImg">
                    <img src={PartnersImg} alt="partners" width="100%"/>
                    <img src={PartnersImg} alt="partners" width="100%"/>
                    <img src={PartnersImg} alt="partners" width="100%"/>
                </div>
                <div className="PartnersImg2">
                    <img src={PartnersImg} alt="partners" width="100%"/>
                    <img src={PartnersImg} alt="partners" width="100%"/>
                </div>
            </div>
            <div className="SubscribeAbout">
                <div className="DivLeftAbout">
                    <p style={{lineHeight:'50px'}}>Subscribe & get a hand picked list of the best development links every week.</p>
                    <EmailInput />
                </div>

                <div className="DivRightAbout">

                </div>
            </div>
        </div>
    );
}

export default ITPartners;
