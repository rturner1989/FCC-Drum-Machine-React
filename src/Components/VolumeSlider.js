import React from "react";
import { useGlobalContext } from "../Context";
import { BsVolumeDown, BsVolumeUp } from "react-icons/bs";

const VolumeSlider = () => {
    const { volume, volumeControl, powerToggle, setVolume } =
        useGlobalContext();

    const sliderKeyPress = (e) => {
        var s = document.getElementById("volume-slider");
        var v = s.value;
        if (e.keyCode === 39) {
            setVolume(v++);
        } else {
            setVolume(v--);
        }
    };

    return (
        <div className="volume-container">
            <p>Volume:</p>
            <div className="volume-slider-container">
                <BsVolumeDown
                    className="volume-icon"
                    aria-hidden={true}
                    focusable={false}
                />
                <label className="label-hidden" htmlFor="volume-slider">
                    Volume Slider
                </label>
                <input
                    type="range"
                    min="1"
                    max="100"
                    value={volume}
                    step="1"
                    aria-valuemin="1"
                    aria-valuemax="100"
                    aria-valuenow={volume}
                    focusable={true}
                    onChange={(e) => volumeControl(e.target.value)}
                    onKeyDown={(e) => sliderKeyPress(e)}
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
        </div>
    );
};

export default VolumeSlider;
