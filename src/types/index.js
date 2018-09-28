import { shape, string, arrayOf} from 'prop-types';

const UserType = shape({
    id: string.isRequired,
    name: string.isRequired,
    email: string.isRequired,
    subscriptions: arrayOf(string).isRequired
});

export default UserType;