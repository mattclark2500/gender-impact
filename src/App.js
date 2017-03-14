import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import HomeContainer from './js/containers/HomeContainer.js';
import TopicContainer from './js/containers/TopicContainer';

class App extends Component {

    render() {

        browserHistory.listen(function(ev) {
            console.log('listen', ev.pathname);
        });

        return (
            <Router history={browserHistory}>
                <Route path="/" component={HomeContainer}/>
                <Route path="/topic/:currentTopic" component={TopicContainer}/>
            </Router>
        );
    }
}

export default App;
