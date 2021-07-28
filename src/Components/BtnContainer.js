import React from "react";
import ToggleBtn from "./ToggleBtn";
import VolumeSlider from "./VolumeSlider";

const BtnContainer = () => {
    return (
        <div className="control-container">
            <ToggleBtn />
            <VolumeSlider />
        </div>
    );
};

export default BtnContainer;
