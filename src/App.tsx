import { useState } from 'react';
import styles from './App.module.scss';
import Buttons from './components/Buttons';
import { Sounds } from './types';
import sounds from './SoundLinks.json';
import ControlPanel from './components/ControlPanel';

function App() {
    const allSounds = sounds as Sounds;

    const [displayWord, setDisplayWord] = useState('');
    const [volumeLevel, setVolumeLevel] = useState(0.5);

    const changeDisplayWord = (word: string) => {
        setDisplayWord(word);
    };

    const setVolume = (volumeLevel: number) => {
        setVolumeLevel(volumeLevel);
    };

    return (
        <div id="drum-machine">
            <Buttons sounds={allSounds} volume={volumeLevel} onPress={changeDisplayWord} />
            <ControlPanel
                displayWord={displayWord}
                setVolume={setVolume}
                volumeLevel={volumeLevel}
                changeDisplayWord={changeDisplayWord}
            />
        </div>
    );
}

export default App;
