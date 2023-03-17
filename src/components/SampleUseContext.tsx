import React, { useState } from "react";
import { Accordion, Icon, Segment } from "semantic-ui-react";

const SampleUseContext = () => {
    const [activeIndex, setActiveIndex] = useState(-1);

    const handleClick = (e: any, titleProps: any) => {
        const { index } = titleProps;
        const newIndex = activeIndex === index ? -1 : index;
        setActiveIndex(newIndex);
    };

    return (
        <><div className="ui top fixed inverted collapsible menu">
            <div className="container">
                <div className="header">
                    <a className="left floated item brand">Collapsible-Menu</a>
                    <div className="ui mini right floated button">
                        <i className="list icon"></i>
                    </div>
                    <a className="right floated item">Other</a>
                </div>
                <div className="content">
                    <a className="left floated item">One</a>
                    <a className="left floated item">Two</a>
                    <div className="right menu">
                        <a className="item">Three</a>
                    </div>
                </div>
            </div>
        </div><div className="description view">
                <div className="ui blue segment">
                </div>
            </div></>
    );
};

export default SampleUseContext;
