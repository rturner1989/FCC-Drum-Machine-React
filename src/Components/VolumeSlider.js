import React from "react";
import { useGlobalContext } from "../Context";
import { BsVolumeDown, BsVolumeUp } from "react-icons/bs";

const VolumeSlider = () => {
    const { volume, volumeControl, powerToggle } = useGlobalContext();
    return (
        <div className="volume-container">
            <p>Volume:</p>
            <BsVolumeDown className="volume-icon" />
            <input
                type="range"
                min="1"
                max="100"
                value={volume}
                onChange={(e) => volumeControl(e.target.value)}
                className="volume-slider"
                disabled={!powerToggle}
            />
            <BsVolumeUp className="volume-icon" />
        </div>
    );
};

export default VolumeSlider;
