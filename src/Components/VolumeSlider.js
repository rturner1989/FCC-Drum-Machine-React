import React from "react";
import { useGlobalContext } from "../Context";

const VolumeSlider = () => {
    const { powerToggle, volume, volumeControl } = useGlobalContext();
    return (
        <div className="slidecontainer">
            <p>Volume:</p>
            <input
                type="range"
                min="1"
                max="100"
                value={volume}
                onChange={(e) => volumeControl(e.target.value)}
                className="slider"
            />
        </div>
    );
};

export default VolumeSlider;
