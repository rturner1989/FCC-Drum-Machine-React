import React, { useRef, useEffect } from "react";
import { useGlobalContext } from "../Context";

const Button = ({ link }) => {
    const { handleClick, bankToggle, powerToggle, volume } = useGlobalContext();
    const { keyCode, keyTrigger, bank1, bank2, className } = link;
    const audioRef = useRef(null);

    const playAudio = () => {
        audioRef.current.volume = volume / 100;
        audioRef.current.currentTime = 0;
        audioRef.current.play();
    };

    const handleKeyPress = (e) => {
        if (!powerToggle) {
            return;
        }
        if (e.keyCode === keyCode) {
            playAudio();
            handleClick(!bankToggle ? bank1.id : bank2.id);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [volume, powerToggle, bankToggle]);

    return (
        <button
            id={!bankToggle ? bank1.id : bank2.id}
            disabled={!powerToggle}
            keytrigger={keyTrigger}
            onClick={() => {
                playAudio();
                handleClick(!bankToggle ? bank1.id : bank2.id);
            }}
            className={`drum-pad ${className}`}
            // className={className}
        >
            <audio
                src={!bankToggle ? bank1.url : bank2.url}
                className="clip"
                id={keyTrigger}
                ref={audioRef}
            />
            {keyTrigger}
        </button>
    );
};

export default Button;
