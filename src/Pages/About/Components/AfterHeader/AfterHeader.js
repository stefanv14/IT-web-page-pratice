import React from 'react'

import './AfterHeader.css'
import Grid from '@material-ui/core/Grid';
import CompanyIcon from '../../../../Assets/Icons/company.svg'
import ValueIcon from '../../../../Assets/Icons/value.svg'
import TeamIcon from '../../../../Assets/Icons/team.svg'
import CareerIcon from '../../../../Assets/Icons/careers.svg'

const afterHeader = () => {
    return (
        <div className="AfterHeader">
            <Grid container spacing={3} className="GridContainerAbout" style={{height:'auto',width:'50%',margin:'0 auto',justifyContent:'space-between'}}>
                <Grid item  md={4} sm={6} xs={12}  className="GridItemAbout">
                    <p style={{textAlign:'center'}}>
                        <img src={CompanyIcon} alt= "company" width="30%"/>
                        <h1>COMPANY</h1>
                    </p>
                </Grid>
                <Grid item  md={4} sm={6} xs={12}  className="GridItemAbout">
                    <p style={{textAlign:'center'}}>
                        <img src={ValueIcon} alt= "company" width="30%"/>
                        <h1>VALUES</h1>
                    </p>
                </Grid>
            </Grid>
            <Grid container spacing={3} className="GridContainerAbout" style={{height:'auto',width:'50%',margin:'0 auto',justifyContent:'space-between'}}>
                <Grid item  md={4} sm={6} xs={12}  className="GridItemAbout">
                    <p style={{textAlign:'center'}}>
                        <img src={TeamIcon} alt= "company" width="30%"/>
                        <h1>TEAM</h1>
                    </p>
                </Grid>
                <Grid item  md={4} sm={6} xs={12}  className="GridItemAbout">
                    <p style={{textAlign:'center'}}>
                        <img src={CareerIcon} alt= "company" width="30%"/>
                        <h1>CAREERS</h1>
                    </p>
                </Grid>
            </Grid>
                
            
            
        </div>
    )
}

export default afterHeader;