import { useState, useRef, useEffect } from 'react';

type Props = {
    sound: string;
    name: string;
    on: Boolean;
    volume: number;
    keyboardKey: string;
};

function Button(props: Props) {
    const audioRef = useRef<HTMLAudioElement | null>(null);

    const playSound = () => {
        if (props.on) {
            audioRef.current?.play();
        }
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
        // Add an event listener for the keydown event
        const handleKeyPress = (event: KeyboardEvent) => {
            if (event.key == props.keyboardKey) {
                playSound();
            }
        };
        // Attach the event listener to the document
        document.addEventListener('keydown', handleKeyPress);

        // Clean up the event listener when the component unmounts
        return () => {
            document.removeEventListener('keydown', handleKeyPress);
        };
    }, [props.keyboardKey]);

    return (
        <div className="drum-pad" id={props.name} onClick={playSound}>
            <button onClick={playSound}>{props.keyboardKey}</button>
            <audio ref={audioRef} className="clip" id={props.keyboardKey} src={props.sound}>
                <source src={props.sound} type="audio/mp3" />
            </audio>
        </div>
    );
}

export default Button;
