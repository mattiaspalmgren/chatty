import PropTypes from 'prop-types';

export const UserType = PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    subscriptions: PropTypes.arrayOf(PropTypes.string)
});
