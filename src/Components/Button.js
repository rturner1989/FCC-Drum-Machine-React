import React, { useRef, useEffect } from "react";

const Button = ({ link, handleClick }) => {
    const audioRef = useRef(null);

    const { keyCode, keyTrigger, id, url } = link;

    const playAudio = () => {
        audioRef.current.play();
    };

    const handleKeyPress = (e) => {
        if (e.keyCode === keyCode) {
            playAudio();
            handleClick(id);
        }
    };

    useEffect(() => {
        document.addEventListener("keydown", handleKeyPress);
        return () => {
            document.removeEventListener("keydown", handleKeyPress);
        };
    }, []);

    return (
        <button
            id={id}
            keytrigger={keyTrigger}
            onClick={() => {
                playAudio();
                handleClick(id);
            }}
            className="drum-pad"
        >
            <audio src={url} className="clip" id={keyTrigger} ref={audioRef} />
            {keyTrigger}
        </button>
    );
};

export default Button;
