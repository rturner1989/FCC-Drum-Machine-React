import React, { useRef, useEffect } from "react";

const Button = ({ link, handleClick, toggle }) => {
    const audioRef = useRef(null);

    const { keyCode, keyTrigger, bank1, bank2 } = link;

    const playAudio = () => {
        audioRef.current.play();
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === keyCode) {
            playAudio();
            handleClick(!toggle ? bank1.id : bank2.id);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, [toggle]);

    return (
        <button
            id={!toggle ? bank1.id : bank2.id}
            keytrigger={keyTrigger}
            onClick={() => {
                playAudio();
                handleClick(!toggle ? bank1.id : bank2.id);
            }}
            className="drum-pad"
        >
            <audio
                src={!toggle ? bank1.url : bank2.url}
                className="clip"
                id={keyTrigger}
                ref={audioRef}
            />
            {keyTrigger}
        </button>
    );
};

export default Button;
