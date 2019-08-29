import React from 'react';
import ReactDOM from 'react-dom';
import SubmitPost from './SubmitPost';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<SubmitPost />, div);
    ReactDOM.unmountComponentAtNode(div);
});
