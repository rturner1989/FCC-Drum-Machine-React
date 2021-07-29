import React from "react";
import { useGlobalContext } from "../Context";
import { BsVolumeDown, BsVolumeUp } from "react-icons/bs";

const VolumeSlider = () => {
    const { volume, volumeControl, powerToggle } = useGlobalContext();
    return (
        <div className="volume-container">
            <p>Volume:</p>
            <BsVolumeDown
                className="volume-icon"
                aria-hidden={true}
                focusable={false}
            />
            {/* <label id="volume-label" htmlFor="volume-slider">
                Volume Slider
            </label> */}
            <input
                type="range"
                min="1"
                max="100"
                value={volume}
                onChange={(e) => volumeControl(e.target.value)}
                className="volume-slider"
                id="volume-slider"
                disabled={!powerToggle}
            />
            <BsVolumeUp
                className="volume-icon"
                aria-hidden={true}
                focusable={false}
            />
        </div>
    );
};

export default VolumeSlider;
