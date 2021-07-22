import React from "react";
import { data } from "../Data";
import Button from "./Button";
import "../index.css";

const Drumpad = ({ handleClick, bank }) => {
    return (
        <div id="btn-container">
            {bank
                ? data.bank1.map((link) => {
                      return (
                          <Button
                              key={link.id}
                              link={link}
                              handleClick={handleClick}
                          />
                      );
                  })
                : data.bank2.map((link) => {
                      return (
                          <Button
                              key={link.id}
                              link={link}
                              handleClick={handleClick}
                          />
                      );
                  })}
        </div>
    );
};

export default Drumpad;
