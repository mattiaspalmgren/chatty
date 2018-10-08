import React from 'react';

import { ChannelType } from '../../types/ChannelType.js';
import style from './Channel.css'

const Channel = ({ channel }) => {
    return (
        <div className={style.Channel}>
            <h2>{channel.name}</h2>
        </div>
    );
};

Channel.propTypes = {
    channel: ChannelType.isRequired
};

export default Channel;