import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [display, setDisplay] = useState("");
    const [bankToggle, setBanktoggle] = useState(false);
    const [powerToggle, setPowertoggle] = useState(false);
    const [volume, setVolume] = useState(50);

    const handleClick = (e) => {
        setDisplay(e);
    };

    const handleToggle = () => {
        setBanktoggle(!bankToggle);
    };

    const handlePower = () => {
        setPowertoggle(!powerToggle);
        updateDisplay();
    };

    const updateDisplay = () => {
        if (!powerToggle) {
            setDisplay("Hello");
            setTimeout(() => {
                setDisplay(" ");
            }, 2000);
        } else {
            setDisplay("Goodbye");
            setTimeout(() => {
                setDisplay("");
            }, 2000);
        }
    };

    const volumeControl = (volume) => {
        setVolume(volume);
    };

    return (
        <AppContext.Provider
            value={{
                display,
                bankToggle,
                powerToggle,
                volume,
                handleClick,
                handlePower,
                handleToggle,
                volumeControl,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export { AppContext, AppProvider };
export const useGlobalContext = () => {
    return useContext(AppContext);
};