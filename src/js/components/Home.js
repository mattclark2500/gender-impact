import React, { Component, PropTypes } from 'react';
import Menu from "./Menu";
import { Link } from 'react-router';

class Home extends Component {



    render() {
        const topicsList = this.props.topics.map(function(topic) {
            return (
                <li key={topic.id} className={`item ${topic.contentPath}`}>
                    <Link to={`/topic/${topic.contentPath}`} onClick={() => this.props.changeTopic(topic.contentPath)}>
                        {topic.title}
                    </Link>
                </li>
            )
        });

        return (
            <div className="home-page-container">
                <Menu topics={this.props.topics} sectionTitle={this.props.sectionTitle} />
                <ul className="nav-items">
                    {topicsList}
                </ul>
            </div>
        )
    };

}

Home.propTypes = {
    topics: PropTypes.array.isRequired,
    sectionTitle: PropTypes.string.isRequired,
    changeTopic: PropTypes.func.isRequired
};

export default Home;