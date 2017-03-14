import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

class Menu extends Component {

    constructor(props) {
        super(props);
        this.state = { menuActive: false };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        this.setState(prevState => ({
            menuActive: !prevState.menuActive
        }))
    }

    render() {
        let activeClass = (this.state.menuActive) ? 'active' : '';
        return (
            <div className={`menu-wrapper ${activeClass}`} id="mainMenuBar" onClick={() => this.handleClick()}>
                <div className="menu-toggle" id="menuToggle"><span className="fa fa-bars"/></div>
                <div className="main-menu-bar">
                    <h3>{this.props.sectionTitle}</h3>
                    <p>{this.props.topicTitle}</p>
                </div>
                <div className="menu-panel" id="menuPanel">
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        {this.props.topics.map(topic =>
                            <li key={topic.id}><Link to={`/topic/${topic.contentPath}`} onClick={() => this.props.changeTopic(topic.contentPath)}>{topic.title}</Link></li>
                        )}
                    </ul>
                </div>
            </div>
        )
    }
}

Menu.propTypes = {
    currentTopic: PropTypes.string,
    changeTopic: PropTypes.func,
    sectionTitle: PropTypes.string.isRequired,
    topics: PropTypes.array.isRequired,
    topicTitle: PropTypes.string
};

export default connect()(Menu);