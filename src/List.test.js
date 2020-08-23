import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import List from './List';
/*import STORE from './store';*/

describe('List component', () => {
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<List cards={list.cardIds.map(id => props.store.allCards[id])}/>, div);
        ReactDOM.unmountComponentAtNode(div);
    });
    
    it('renders the UI as expected', () => {
        const tree = renderer
            .create(<List cards={list.cardIds.map(id => props.store.allCards[id])}/>)
            .toJSON();
        expect(tree).toMatchSnapshot();
    });
});