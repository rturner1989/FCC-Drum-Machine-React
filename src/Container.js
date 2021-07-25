import React, { useState, useEffect, useRef } from "react";
import Display from "./Components/Display";
import Drumpad from "./Components/Drumpad";
import BtnContainer from "./Components/BtnContainer";

const Container = () => {
    const [display, setDisplay] = useState("");
    const [bankToggle, setBanktoggle] = useState(false);
    const [powerToggle, setPowertoggle] = useState(false);

    const handleClick = (e) => {
        setDisplay(e);
    };

    const handleToggle = () => {
        setBanktoggle(!bankToggle);
    };

    const handlePower = () => {
        setPowertoggle(!powerToggle);
        updateDisplay();
    };

    const updateDisplay = () => {
        if (!powerToggle) {
            setDisplay("Hello");
            setTimeout(() => {
                setDisplay(" ");
            }, 2000);
        } else {
            setDisplay("Goodbye");
            setTimeout(() => {
                setDisplay("");
            }, 2000);
        }
    };

    // useEffect(() => {
    //     clearTimeout();
    // }, [updateDisplay]);

    return (
        <div id="drum-machine">
            <Display display={display} />
            <Drumpad
                handleClick={handleClick}
                powerToggle={powerToggle}
                bankToggle={bankToggle}
            />
            <BtnContainer
                bankToggle={bankToggle}
                powerToggle={powerToggle}
                handleToggle={handleToggle}
                handlePower={handlePower}
            />
        </div>
    );
};

export default Container;
