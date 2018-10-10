import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from "../components/Form/Form.js";
import { addChannel } from "../actions/channelActions.js";

const mapDispatchToProps = dispatch => ({
    addChannel: channel => dispatch(addChannel(channel))
});

class ChannelForm extends Component {
    render() {
        const { addChannel } = this.props;
        return (
            <Form
                title="Add channel"
                fields={["name"]}
                onSubmit={addChannel}
                submitText={"Submit"}
            />
        );
    }
}

export default connect(
    null,
    mapDispatchToProps
)(ChannelForm);
