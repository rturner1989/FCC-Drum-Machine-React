import React from "react";
import { useGlobalContext } from "../Context";

const Display = () => {
    const { display } = useGlobalContext();

    return <section id="display">{display}</section>;
};

export default Display;
