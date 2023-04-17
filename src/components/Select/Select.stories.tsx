import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select stories',
    component: Select,
};

export const WithValue = () =>
    <>
        <Select
            items={[
                {value:1, title:"Minsk"},
                {value:2, title:"Moskow"},
                {value:3, title:"Kiev"}
            ]}
            onChange={action("value changed")}
            value={"2"}/>;
    </>
export const Withoutvalue = () =>
    <>
<Select
    items={[
        {value:1, title:"Minsk"},
        {value:2, title:"Moskow"},
        {value:3, title:"Kiev"}
    ]}
    onChange={action("value changed")}
  />;
    </>
