import PropTypes from 'prop-types';

export const ChannelType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    subscribers: PropTypes.arrayOf(PropTypes.string)
});
