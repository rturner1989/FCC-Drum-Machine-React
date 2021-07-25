import React, { useContext, useState, useEffect } from "react";

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
    };

    const volumeControl = (volume) => {
        setVolume(volume);
    };

    useEffect(() => {
        let timer;
        if (!powerToggle && display === "") {
            setDisplay("FCC Drum Machine");
        } else if (powerToggle) {
            setDisplay("Hello");
            timer = setTimeout(() => {
                setDisplay(" ");
            }, 2000);
        } else {
            setDisplay("Goodbye");
            timer = setTimeout(() => {
                setDisplay("FCC Drum Pad");
            }, 2000);
        }

        return () => {
            clearTimeout(timer);
        };
    }, [powerToggle]);

    useEffect(() => {
        if (!powerToggle) {
            return;
        }
        setDisplay(volume);
        let timer = setTimeout(() => {
            setDisplay(" ");
        }, 2000);
        return () => {
            clearTimeout(timer);
        };
    }, [volume]);

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
