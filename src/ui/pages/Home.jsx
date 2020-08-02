import React, { Fragment } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { AppNavbar, AppFooter, AppHeader, AppSection, AppSocial } from '../containers';
import FeatureItem from '../components/molecules/FeatureItem';

const Home = () => {
  return (
    <Fragment>
      <AppNavbar showBand={false} />
      <AppHeader>
        <div className="col-lg-7 my-auto">
          <div className="header-content mx-auto">
            <h2 className="mb-5">Repetitive processes reduce ROI. Engineers find unique solutions to real life, world changing problems and help plug wastage.</h2>
            <h6>Find out how I am changing my world now, and how I can help change yours.</h6>
            <br />
            <a href="#download" className="btn btn-outline btn-xl js-scroll-trigger">Start Here</a>
          </div>
        </div>
        <div className="col-lg-5 my-auto">
          <div className="device-container">
            <div className="device-mockup iphone6_plus portrait white">
              <div className="device">
                {/* <div className="screen">
                  
                </div> */}
                <div className="button" />
              </div>
            </div>
          </div>
        </div>
      </AppHeader>

      <AppSection className='features' id='features'>
        <div className="section-heading text-center">
          <h2>Services</h2>
          <p className="text-muted">What can I Engineer for you?</p>
        </div>
        <Row>
          <Col lg='12' className='my-auto'>
            <Container fluid>
              <Row>
                <Col lg='4'>
                  <FeatureItem 
                    headerText='SOFTWARE'
                    paraText='I love working with interesting teams to build mobile and web applications that scale well across all platforms'
                    iconClassName='icon-screen-desktop text-primary'
                  />
                </Col>
             
                <Col lg='4'>
                  <FeatureItem 
                    headerText='DEVOPS'
                    paraText='Over the years, I developed invaluable skills in digital pipeline development and various automation tools'
                    iconClassName='icon-settings text-primary'
                  />
                </Col>
              
                <Col lg='4'>
                  <FeatureItem 
                    headerText='MENTORSHIP'
                    paraText='Giving back to the dev community by providing mentorship and support for aspiring Engineers is fun'
                    iconClassName='icon-share text-primary'
                  />
                </Col>
              </Row>
            </Container>
          </Col>
        </Row>
      </AppSection>
      
      <hr />
      <AppSocial />
      <AppFooter />
    </Fragment>
  )
}

export default Home;
