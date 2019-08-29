import React from 'react';
import ReactDOM from 'react-dom';
import CommentButton from './CommentButton';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CommentButton />, div);
    ReactDOM.unmountComponentAtNode(div);
});
