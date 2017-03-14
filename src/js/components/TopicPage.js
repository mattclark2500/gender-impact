import React, { Component, PropTypes } from "react";
import Description from "./Description";
import HeroImage from "./HeroImage";
import Menu from "./Menu";
import SubTopicContainer from "../containers/SubTopicContainer";

class TopicPage extends Component {

    componentWillMount() {
        this.props.setInitialTopic(this.props.params.currentTopic)
    }

    render() {
        const {
            changeTopic,
            description,
            params,
            sectionTitle,
            topics,
            topicTitle
        } = this.props;
        return (
            <div className="page-container">
                <Menu topics={topics} sectionTitle={sectionTitle} topicTitle={topicTitle} currentTopic={params.currentTopic} changeTopic={changeTopic} />
                <HeroImage imageLocation={params.currentTopic}/>
                <div className="topic-header">
                    <Description text={description}/>
                </div>
                <SubTopicContainer />
            </div>
        )
    }
}

TopicPage.propTypes = {
    backgroundImageSrc: PropTypes.string.isRequired,
    changeTopic: PropTypes.func.isRequired,
    description: PropTypes.string,
    params: PropTypes.object.isRequired,
    sectionTitle: PropTypes.string.isRequired,
    topics: PropTypes.array.isRequired,
    topicTitle: PropTypes.string,
    setInitialTopic: PropTypes.func.isRequired
};

export default TopicPage;