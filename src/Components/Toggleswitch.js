import React from "react";
import Switch from "@material-ui/core/Switch";

const Toggleswitch = ({ toggle, handleToggle }) => {
    return (
        <div class="toggle">
            <Switch
                checked={toggle.checkedA}
                onChange={(e) => handleToggle(e)}
                color="primary"
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
            />
        </div>
    );
};

export default Toggleswitch;
