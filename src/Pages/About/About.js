import React from 'react'
import Layout from '../../Components/Layout/Layout'
import AfterHeader from '../About/Components/AfterHeader/AfterHeader'
import Buttons from '../About/Components/Buttons/Buttons'
import HeaderSection from '../About/Components/HeaderSection/HeaderSection'
import JoinITClub from '../About/Components/JoinITClub/JoinITClub'
import LoyaltyProgram from '../About/Components/LoyaltyPrograms/LoyaltyPrograms'
import Niche from '../About/Components/Niche/Niche'
import ITPartners from './Components/ITPartners/ITPartners'


const about = () => {
    return (
        <React.Fragment>
            <Layout>
                <HeaderSection />
                <AfterHeader />
                <Niche />
                <LoyaltyProgram />
                <Buttons />
                <ITPartners />
                <JoinITClub />
            </Layout>
        </React.Fragment>
    )
}

export default about;