type Props = {
    displayWord: string;
};

function Display(props: Props) {
    return (
        <div>
            <h3 id="display">{props.displayWord}</h3>
        </div>
    );
}

export default Display;
