import PropTypes from 'prop-types';

const UserType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    subscriptions: PropTypes.arrayOf(PropTypes.string)
});

const ChannelType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    subscribers: PropTypes.arrayOf(PropTypes.string)
});

export default { UserType, ChannelType };