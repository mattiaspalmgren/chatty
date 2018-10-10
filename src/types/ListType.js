import PropTypes from 'prop-types';
import { ListItemType } from "./ListItemType";

export const ListType = PropTypes.shape({
    items: PropTypes.arrayOf(ListItemType)
});
