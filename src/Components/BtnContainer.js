import React from "react";
import BankBtn from "./BankBtn";
import PowerBtn from "./PowerBtn";
import VolumeSlider from "./VolumeSlider";

const BtnContainer = () => {
    return (
        <div>
            <PowerBtn />
            <BankBtn />
            <VolumeSlider />
        </div>
    );
};

export default BtnContainer;
