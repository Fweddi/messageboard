import React from 'react';
import ReactDOM from 'react-dom';
import CommentSection from './CommentSection';

it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<CommentSection />, div);
    ReactDOM.unmountComponentAtNode(div);
});
