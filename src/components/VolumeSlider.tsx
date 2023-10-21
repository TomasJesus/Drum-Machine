import { useState } from 'react';

type Props = {
    setVolume: (volumeLevel: number) => void;
    volumeLevel: number;
    changeDisplayWord: (word: string) => void;
};

function VolumeSlider(props: Props) {
    const setVolume = (VolumeLevel: number) => {
        props.setVolume(VolumeLevel);
    };

    const changeDisplayWord = (word: string) => {
        props.changeDisplayWord('Volume: ' + word);
    };

    return (
        <div>
            <input
                type="range"
                min={0}
                max={1}
                step={0.01}
                value={props.volumeLevel}
                onChange={(event) => {
                    setVolume(event.target.valueAsNumber);
                    changeDisplayWord((event.target.valueAsNumber * 100).toString());
                }}
            />
        </div>
    );
}

export default VolumeSlider;
