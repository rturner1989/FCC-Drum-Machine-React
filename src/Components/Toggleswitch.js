import React from "react";
import Switch from "@material-ui/core/Switch";

const Toggleswitch = ({ toggle, handleToggle }) => {
    return (
        <div className="toggle">
            <Switch
                checked={toggle}
                onChange={handleToggle}
                color="primary"
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
            />
        </div>
    );
};

export default Toggleswitch;
