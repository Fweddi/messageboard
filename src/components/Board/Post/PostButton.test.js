import React from 'react';
import ReactDOM from 'react-dom';
import PostButton from './PostButton';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<PostButton />, div);
    ReactDOM.unmountComponentAtNode(div);
});
