import React from "react";
import style from "./ListItem.css";
import { ListItemType } from "../../types/ListItemType";

const ListItem = ({ title, fields }) => {
    return (
        <div className={style.ListItem}>
            <h2>{title}</h2>
            {
                fields &&
                fields.map(field => <p key={field}>{field}</p>)
            }
        </div>
    );
};

ListItem.propType = ListItemType;

export default ListItem;
