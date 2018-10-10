import React, { Component } from 'react';
import { connect } from 'react-redux';
import List from "../components/List/List";

function mapStateToProps(state) {
    const { channels: { channels } } = state;
    return { channels };
}

class ChannelList extends Component {
    render() {
        const { channels } = this.props;
        const items = channels.map(channel => ({ id: channel.id, title: channel.name }));
        return (
            <div>
                <List items={items}/>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,
)(ChannelList);
