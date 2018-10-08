import PropTypes from 'prop-types';

export const FormType = PropTypes.shape({
    title: PropTypes.string.isRequired,
    fields: PropTypes.arrayOf(PropTypes.string),
    onSubmit: PropTypes.func.isRequired,
    submitText: PropTypes.string.isRequired
});
