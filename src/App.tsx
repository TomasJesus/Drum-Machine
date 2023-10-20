import { useState } from 'react';
import styles from './App.module.scss';
import Buttons from './components/Buttons';
import { Sounds } from './types';
import sounds from './SoundLinks.json';

function App() {
    const allSounds = sounds as Sounds;

    const [onState, setOnState] = useState(true);

    return (
        <div id="drum-machine">
            <Buttons sounds={allSounds} on={true} volume={0.1} />
        </div>
    );
}

export default App;
