import React from "react";
import Switch from "@material-ui/core/Switch";

const PowerBtn = ({ powerToggle, handlePower }) => {
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
