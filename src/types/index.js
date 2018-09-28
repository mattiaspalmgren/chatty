import { shape, string, arrayOf, func } from 'prop-types';

const UserType = shape({
    id: string.isRequired,
    name: string.isRequired,
    email: string.isRequired,
    subscriptions: arrayOf(string).isRequired
});

const ChannelType = shape({
    id: string.isRequired,
    name: string.isRequired,
    subscribers: arrayOf(string).isRequired
});

const InputForm = shape({
    title: string.isRequired,
    fields: arrayOf(string).isRequired,
    onSubmit: func.isRequired
});

export default { UserType, ChannelType, InputForm };