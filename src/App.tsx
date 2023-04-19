import React, {useState} from 'react';
import './App.css';
import {OnOff} from "./components/OnOff/OnOff";
import {UncontrolledAccordeon} from "./components/UncontrolledAccordeon/UncontrolledAccordeon";
import {UncontrolledRating} from "./components/UncontrolledRating/UncontrolledRating";
import {Rating, RatingValueType} from "./components/Rating/Rating";
import {Accordeon} from "./components/Accordeon/Accordeon";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";
import {Select} from "./components/Select/Select";

function App() {
    let [ratingValue, setRatingValue] = useState<RatingValueType>(0)
    let [accordeonCollapsed, setAccordeonCollapsed] = useState<boolean>(false)
    let[switchOn, setSwitchOn]=useState(false)
    return (
        <div className={"App"}>
            {/*<Rating value={ratingValue} onClick={setRatingValue}/>*/}
            <UncontrolledAccordeon titleValue={"Menu"}  />
            {/*<UncontrolledAccordeon titleValue={"Users"}  />*/}
            {/*<Accordeon*/}
            {/*    items={items}*/}
            {/*    titleValue={"Users"}*/}
            {/*    onChange={() => {*/}
            {/*        setAccordeonCollapsed(!accordeonCollapsed)*/}
            {/*    }}*/}
            {/*    collapsed={accordeonCollapsed}/>*/}

            <UncontrolledOnOff onChange={setSwitchOn}/>{switchOn.toString()}
            {/*<OnOff on={switchOn} onChange={setSwitchOn}/>*/}

        </div>
    );
}

type PageTitlePropsType = {
    title: string
}

function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}

export default App;
