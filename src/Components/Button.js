import React, { useRef, useEffect } from "react";

const Button = ({ link, handleClick, powerToggle, bankToggle }) => {
    const audioRef = useRef(null);

    const { keyCode, keyTrigger, bank1, bank2 } = link;

    const playAudio = () => {
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
    }, [powerToggle, bankToggle]);

    return (
        <button
            id={!bankToggle ? bank1.id : bank2.id}
            disabled={!powerToggle}
            keytrigger={keyTrigger}
            onClick={() => {
                playAudio();
                handleClick(!bankToggle ? bank1.id : bank2.id);
            }}
            className="drum-pad"
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
