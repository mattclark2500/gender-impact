import React, { PropTypes } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';


const Menu = ({topics, changeTopic }) => {



    return (
        <ul>
            <li><Link to="/">Home</Link></li>
            {topics.map(topic =>
                <li key={topic.id}><Link to={`/topic/${topic.contentPath}`} onClick={() => changeTopic(topic.contentPath)}>{topic.title}</Link></li>
            )}
        </ul>
    )
};

Menu.propTypes = {
    topics : PropTypes.array.isRequired,
    currentTopic: PropTypes.string.isRequired,
    changeTopic: PropTypes.func.isRequired
};

export default connect() (Menu);