import React, { Component } from 'react';
import { Router, Route, browserHistory } from 'react-router';

import Home from './components/Home.js';
import TopicContainer from './containers/TopicContainer';

class App extends Component {

    render() {

        browserHistory.listen(function(ev) {
            console.log('listen', ev.pathname);
        });

        return (
            <Router history={browserHistory}>
                <Route path="/" component={Home}/>
                <Route path="/topic/:currentTopic" component={TopicContainer}/>
            </Router>
        );
    }
}

export default App;
