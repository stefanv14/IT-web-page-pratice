import React from 'react'
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

const layout = (props) => {
    return (
        <React.Fragment>
            <Header />
                <main>
                    {props.children}
                </main>
            <Footer />
        </React.Fragment>
    )
}

export default layout;