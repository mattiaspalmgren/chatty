import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from "../components/Form/Form.js";
import { addChannel } from "../actions/channelActions.js";

const mapDispatchToProps = dispatch => ({
    addChannel: channel => dispatch(addChannel(channel))
});

const mapStateToProps = state => {
    const { channels: { loading, error } } = state;
    return { loading, error };
};

class ChannelForm extends Component {
    render() {
        const { addChannel, loading, error } = this.props;
        return (
            <Form
                title="Add channel"
                fields={["name"]}
                onSubmit={addChannel}
                submitText={"Submit"}
                loading={loading}
                error={error}
            />
        );
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ChannelForm);
