import React from "react";
import Switch from "@material-ui/core/Switch";

const BankBtn = ({ bankToggle, handleToggle }) => {
    return (
        <div className="toggle">
            <span>Bank</span>
            <Switch
                checked={bankToggle}
                onChange={handleToggle}
                color="primary"
                name="checkedA"
                inputProps={{ "aria-label": "secondary checkbox" }}
            />
        </div>
    );
};

export default BankBtn;
