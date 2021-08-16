import React from "react";

const ToggleBtn = ({ title, id, checked, onChange, htmlFor, disabled }) => {
    return (
        <div className="toggle" id="power-toggle">
            <div>{title}</div>
            <label className="switch" htmlFor={htmlFor}>
                <input
                    id={id}
                    type="checkbox"
                    checked={checked}
                    onChange={onChange}
                    disabled={disabled}
                />
                <span className="slider round"></span>
                <span className="label-hidden">Toggle Button</span>
            </label>
        </div>
    );
};

export default ToggleBtn;
