import React from 'react';

import './Subscribe.css'
import EmailInput from '../EmailInput/EmailInput';

const subscribe = (props) => {
    return (
        <div className="Subscribe">
            <div className="DivLeft">
                <p>Subscribe & get a hand picked list of the best development links every week.</p>
                <EmailInput />
            </div>

            <div className="DivRight">

            </div>
        </div>
    )
}

export default subscribe;