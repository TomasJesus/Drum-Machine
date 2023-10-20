import { Sounds } from '../types';
import Button from './Button';

type Props = {
    sounds: Sounds;
    on: Boolean;
    volume: number;
};

function Buttons(props: Props) {
    return (
        <div>
            <Button
                sound={props.sounds.sounds[0].sound}
                name={props.sounds.sounds[0].name}
                on={props.on}
                volume={props.volume}
                keyboardKey="Q"
            />
            <Button
                sound={props.sounds.sounds[1].sound}
                name={props.sounds.sounds[1].name}
                on={props.on}
                volume={props.volume}
                keyboardKey="W"
            />
            <Button
                sound={props.sounds.sounds[2].sound}
                name={props.sounds.sounds[2].name}
                on={props.on}
                volume={props.volume}
                keyboardKey="E"
            />
            <Button
                sound={props.sounds.sounds[3].sound}
                name={props.sounds.sounds[3].name}
                on={props.on}
                volume={props.volume}
                keyboardKey="A"
            />
            <Button
                sound={props.sounds.sounds[4].sound}
                name={props.sounds.sounds[4].name}
                on={props.on}
                volume={props.volume}
                keyboardKey="S"
            />
            <Button
                sound={props.sounds.sounds[5].sound}
                name={props.sounds.sounds[5].name}
                on={props.on}
                volume={props.volume}
                keyboardKey="D"
            />
            <Button
                sound={props.sounds.sounds[6].sound}
                name={props.sounds.sounds[6].name}
                on={props.on}
                volume={props.volume}
                keyboardKey="Z"
            />
            <Button
                sound={props.sounds.sounds[7].sound}
                name={props.sounds.sounds[7].name}
                on={props.on}
                volume={props.volume}
                keyboardKey="X"
            />
            <Button
                sound={props.sounds.sounds[8].sound}
                name={props.sounds.sounds[8].name}
                on={props.on}
                volume={props.volume}
                keyboardKey="C"
            />
        </div>
    );
}

export default Buttons;
