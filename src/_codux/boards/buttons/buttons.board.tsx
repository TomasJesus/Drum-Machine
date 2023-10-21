import { createBoard } from '@wixc3/react-board';
import Buttons from '../../../components/Buttons';

export default createBoard({
    name: 'Buttons',
    Board: () => <Buttons />,
    isSnippet: true,
});
