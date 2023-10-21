import { useState, useRef, useEffect } from 'react';

type Props = {
    sound: string;
    name: string;
    volume: number;
    keyboardKeyH: string;
    keyboardKeyL: string;
    onPress: (word: string) => void;
};

function Button(props: Props) {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const playSound = () => {
        audioRef.current?.play();
        props.onPress(props.name);
    };

    useEffect(() => {
        if (audioRef.current) {
            audioRef.current.addEventListener('canplay', () => {
                audioRef.current!.volume = props.volume;
            });

            return () => {
                audioRef.current!.removeEventListener('canplay', () => {
                    audioRef.current!.volume = props.volume;
                });
            };
        }
    }, [props.volume]);

    useEffect(() => {
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key === props.keyboardKeyL || event.key === props.keyboardKeyH) {
                playSound();
            }
        };

        // Attach the event listener to the document
        document.addEventListener('keydown', handleKeyPress);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [props.keyboardKeyH]);

    return (
        <div className="drum-pad" id={props.name} onClick={playSound}>
            <button onClick={playSound}>{props.keyboardKeyH} </button>
            <audio ref={audioRef} className="clip" id={props.keyboardKeyH} src={props.sound}>
                <source src={props.sound} type="audio/mp3" />
            </audio>
        </div>
    );
}

export default Button;
