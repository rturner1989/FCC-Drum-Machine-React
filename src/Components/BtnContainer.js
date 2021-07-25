import React from "react";
import BankBtn from "./BankBtn";
import PowerBtn from "./PowerBtn";
import VolumeSlider from "./VolumeSlider";

const BtnContainer = ({
    bankToggle,
    powerToggle,
    handleToggle,
    handlePower,
}) => {
    return (
        <div>
            <PowerBtn powerToggle={powerToggle} handlePower={handlePower} />
            <BankBtn bankToggle={bankToggle} handleToggle={handleToggle} />
            <VolumeSlider powerToggle={powerToggle} />
        </div>
    );
};

export default BtnContainer;
