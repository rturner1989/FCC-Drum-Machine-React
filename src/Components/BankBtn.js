import React from "react";
import Switch from "@material-ui/core/Switch";
import { useGlobalContext } from "../Context";

const BankBtn = () => {
    const { bankToggle, handleToggle } = useGlobalContext();
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
