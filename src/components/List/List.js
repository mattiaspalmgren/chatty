import React from 'react';
import { ListType } from "../../types/ListType";
import ListItem from "../ListItem/ListItem";
import style from "./List.css";

const List = ({ items }) => {
    return (
        <div className={style.List}>
            {
                items.map(item => <ListItem key={item.id} title={item.title} fields={item.fields}></ListItem>)
            }
        </div>
    );
};

List.propType = ListType;

export default List;
