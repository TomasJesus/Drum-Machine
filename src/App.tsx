import { useState } from 'react';
import styles from './App.module.scss';
import Buttons from './components/Buttons';
import { Sounds } from './types';
import sounds from './SoundLinks.json';
import ControlPanel from './components/ControlPanel';

function App() {
    const allSounds = sounds as Sounds;

    const [onState, setOnState] = useState(true);
    const [displayWord, setDisplayWord] = useState('');
    const [volumeLevel, setVolumeLevel] = useState(0.5);

    const powerSwitch = () => {
        setOnState(!onState);
    };

    const changeDisplayWord = (word: string) => {
        setDisplayWord(word);
    };

    const setVolume = (volumeLevel: number) => {
        setVolumeLevel(volumeLevel);
    };

    return (
        <div id="drum-machine">
            <Buttons
                sounds={allSounds}
                on={onState}
                volume={volumeLevel}
                onPress={changeDisplayWord}
            />
            <ControlPanel
                powerSwitch={powerSwitch}
                displayWorkd={displayWord}
                setVolume={setVolume}
                on={onState}
            />
        </div>
    );
}

export default App;
