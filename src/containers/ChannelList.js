import React, { Component } from 'react';
import { connect } from 'react-redux';
import Channel from '../components/Channel/Channel';

function mapStateToProps(state) {
    const { channels } = state;
    return { channels };
}

class ChannelList extends Component {
    render() {
        const { channels } = this.props;
        return (
            <div>
                {
                    channels.map(channel => <Channel key={channel.id} channel={channel}></Channel>)
                }
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(ChannelList);
