import React from "react";
import Display from "./Components/Display";
import Drumpad from "./Components/Drumpad";
import BtnContainer from "./Components/BtnContainer";

const Container = () => {
    return (
        <div id="drum-machine">
            <Display />
            <hr className="break"></hr>
            <BtnContainer />
            <Drumpad />
        </div>
    );
};

export default Container;
