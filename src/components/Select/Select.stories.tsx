import React, {useState} from 'react';
import {Select} from "./Select";
import {action} from "@storybook/addon-actions";


export default {
    title: 'Select stories',
    component: Select,
};

export const WithValue = () => {
    const [value, setValue] = useState("2")

    return <>
        <Select
            items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Moskow"},
                {value: "3", title: "Kiev"}
            ]}
            onChange={setValue}
            value={value}/>;
    </>
}
export const Withoutvalue = () =>{
    const [value, setValue] = useState(null)

    return <>
        <Select

            items={[
                {value: "1", title: "Minsk"},
                {value: "2", title: "Moskow"},
                {value: "3", title: "Kiev"}
            ]}
            onChange={setValue}
            value={value}
        />;
    </>

}
