import React from "react";
import Display from "./Components/Display";
import Drumpad from "./Components/Drumpad";

const Container = () => {
    return (
        <div id="drum-machine">
            <Display />
            <Drumpad />
        </div>
    );
};

export default Container;
