import { Sounds } from '../types';
import Button from './Button';

type Props = {
    sounds: Sounds;
    volume: number;
    onPress: (word: string) => void;
};

function Buttons(props: Props) {
    return (
        <div>
            <Button
                sound={props.sounds.sounds[0].sound}
                name={props.sounds.sounds[0].name}
                volume={props.volume}
                keyboardKeyH="Q"
                keyboardKeyL="q"
                onPress={props.onPress}
            />
            <Button
                sound={props.sounds.sounds[1].sound}
                name={props.sounds.sounds[1].name}
                volume={props.volume}
                keyboardKeyH="W"
                keyboardKeyL="w"
                onPress={props.onPress}
            />
            <Button
                sound={props.sounds.sounds[2].sound}
                name={props.sounds.sounds[2].name}
                volume={props.volume}
                keyboardKeyH="E"
                keyboardKeyL="e"
                onPress={props.onPress}
            />
            <Button
                sound={props.sounds.sounds[3].sound}
                name={props.sounds.sounds[3].name}
                volume={props.volume}
                keyboardKeyH="A"
                keyboardKeyL="a"
                onPress={props.onPress}
            />
            <Button
                sound={props.sounds.sounds[4].sound}
                name={props.sounds.sounds[4].name}
                volume={props.volume}
                keyboardKeyH="S"
                keyboardKeyL="s"
                onPress={props.onPress}
            />
            <Button
                sound={props.sounds.sounds[5].sound}
                name={props.sounds.sounds[5].name}
                volume={props.volume}
                keyboardKeyH="D"
                keyboardKeyL="d"
                onPress={props.onPress}
            />
            <Button
                sound={props.sounds.sounds[6].sound}
                name={props.sounds.sounds[6].name}
                volume={props.volume}
                keyboardKeyH="Z"
                keyboardKeyL="z"
                onPress={props.onPress}
            />
            <Button
                sound={props.sounds.sounds[7].sound}
                name={props.sounds.sounds[7].name}
                volume={props.volume}
                keyboardKeyH="X"
                keyboardKeyL="x"
                onPress={props.onPress}
            />
            <Button
                sound={props.sounds.sounds[8].sound}
                name={props.sounds.sounds[8].name}
                volume={props.volume}
                keyboardKeyH="C"
                keyboardKeyL="c"
                onPress={props.onPress}
            />
        </div>
    );
}

export default Buttons;
