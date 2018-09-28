import React from 'react';

import types from '../../types/index.js';
import style from './Channel.css'

const Channel = ({ channel }) => {
    return (
        <div className={style.Channel}>
            <h2>{channel.name}</h2>
        </div>
    );
};

Channel.propTypes = {
    channel: types.ChannelType.isRequired
};

export default Channel;