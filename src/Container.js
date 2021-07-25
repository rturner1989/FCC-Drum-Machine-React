import React from "react";
import Display from "./Components/Display";
import Drumpad from "./Components/Drumpad";
import BtnContainer from "./Components/BtnContainer";

const Container = () => {
    return (
        <div id="drum-machine">
            <Display />
            <Drumpad />
            <BtnContainer />
        </div>
    );
};

export default Container;
