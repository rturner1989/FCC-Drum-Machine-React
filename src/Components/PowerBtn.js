import React from "react";
import Switch from "@material-ui/core/Switch";
import { useGlobalContext } from "../Context";

const PowerBtn = () => {
    const { powerToggle, handlePower } = useGlobalContext();
    return (
        <div className="toggle">
            <span>Power</span>
            <Switch
                checked={powerToggle}
                onChange={handlePower}
                color="primary"
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
            />
        </div>
    );
};

export default PowerBtn;
