import React from 'react';
import ReactDOM from 'react-dom/client';

const label = React.createElement('h1', {id: 'label'}, 'Demo Apps!!!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(label);