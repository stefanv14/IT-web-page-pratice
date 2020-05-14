import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import About from './Components/About/About';
import GetQuote from './Components/GetQuote/GetQuote';
import HeaderSectionHome from './Components/HeaderSection/HeaderSection';
import JoinITClub from './Components/JoinITClub/JoinITClub';
import Layout from './Components/Layout/Layout';
import OurClients from './Components/OurClients/OurClients';
import Services from './Components/Services/Services';
import Subscribe from './Components/Subscribe/Subscribe';
import Teams from './Components/Teams/Teams';
import WhyUs from './Components/WhyUs/WhyUs';
import AboutPage from './Pages/About/About';


const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' render={sections =>
            <React.Fragment>
              <Layout>
                <HeaderSectionHome />
                <Services />
                <Teams />
                <About />
                <GetQuote />
                <OurClients />
                <WhyUs />
                <Subscribe />
                <JoinITClub />
              </Layout>
            </React.Fragment>} 
          />
        <Route path="/about" component={AboutPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;