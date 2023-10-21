import { useState } from 'react';
import VolumeSlider from './VolumeSlider';
import Display from './Display';

type Props = {
    displayWord: string;
    setVolume: (volumeLevel: number) => void;
    volumeLevel: number;
    changeDisplayWord: (word: string) => void;
};

function ControlPanel(props: Props) {
    return (
        <div>
            <VolumeSlider
                setVolume={props.setVolume}
                volumeLevel={props.volumeLevel}
                changeDisplayWord={props.changeDisplayWord}
            />
            <Display displayWord={props.displayWord} />
        </div>
    );
}

export default ControlPanel;
