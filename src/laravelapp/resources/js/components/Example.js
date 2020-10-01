import React from 'react';
import ReactDOM from 'react-dom';
import ReactMarkdown from 'react-markdown';

if (document.getElementById('example')) {
    const input = '# This is a header\n\n## This is a second header\n\nAnd this is a paragraph';
    ReactDOM.render(<ReactMarkdown source={input} />, document.getElementById('example'));
}
