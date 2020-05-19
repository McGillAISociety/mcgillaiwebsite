import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { Transition, TransitionGroup } from 'react-transition-group';
import { play, exit } from './timeline.js'
import styled from '@emotion/styled'

import Navigation from './components/navbar/navbar.js'
import Home from './components/home/home.js';
import OurTeam from './components/execs/Exec.js';
import Mais202 from './components/mais202/mais202.js';
import Faq from './components/faq/faq.js';
import Mtlai from './components/mtlai/mtlai.js'
import Footer from './components/footer/footer.js'
import NotFound from './components/notfound/notfound.js';

import Background from './components/home/assets/background.jpg'

const Container = styled('div')`
  background-image: url(${Background});
  background-size: cover; /* or contain depending on what you want */
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
`;

class App extends React.Component {
  render() {
    return (
        <BrowserRouter>
        <Container>
          <Navigation></Navigation>
          <Route render={({ location }) => {
            const { pathname, key } = location;

            return (
              <TransitionGroup component = {null} >
                <Transition
                  key={key}
                  appear={true}
                  onEnter={(node, appears) => play(pathname, node, appears)}
                  onExit={(node, appears) => exit(node, appears)}
                  timeout={{enter: 750, exit: 150}}
                >
                <div>
                <Switch location={location}>
                  <Route exact path="/" component={Home} />
                  <Route path="/ourteam" component={OurTeam} />
                  <Route path="/mais202" component={Mais202} />
                  <Route path="/faq" component={Faq} />
                  <Route path="/mtlai" component = {Mtlai} />
                  <Route component={NotFound} />
                </Switch>
                <Footer></Footer>
                </div>
                </Transition>
              </TransitionGroup>
            )
          }}/>

        </Container>
      </BrowserRouter>
    )
  }
}

export default App;
