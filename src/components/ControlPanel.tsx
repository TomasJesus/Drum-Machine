type Props = {
    powerSwitch: () => void;
    displayWorkd: string;
    setVolume: (volumeLevel: number) => void;
    on: boolean;
};

function ControlPanel(props: Props) {
    let onOff = '';

    if (props.on) {
        onOff = 'OFF';
    } else {
        onOff = 'ON';
    }

    const onOffSwitch = () => {
        props.powerSwitch();
        if (props.on) {
            onOff = 'OFF';
        } else {
            onOff = 'ON';
        }
    };

    return (
        <div>
            <button onClick={onOffSwitch}>{onOff}</button>
        </div>
    );
}

export default ControlPanel;
