import React from "react";
import ToggleBtn from "./ToggleBtn";
import VolumeSlider from "./VolumeSlider";
import { useGlobalContext } from "../Context";

const BtnContainer = () => {
    const { bankToggle, powerToggle, handlePower, handleToggle } =
        useGlobalContext();
    return (
        <section className="control-container">
            <div className="btn-container">
                <ToggleBtn
                    title="Power:"
                    id="power-button"
                    checked={powerToggle}
                    onChange={handlePower}
                    htmlFor="power-button"
                />
                <ToggleBtn
                    title="Bank:"
                    id="bank-button"
                    checked={bankToggle}
                    onChange={handleToggle}
                    htmlFor="bank-button"
                    disabled={!powerToggle}
                />
            </div>
            <VolumeSlider />
        </section>
    );
};

export default BtnContainer;
