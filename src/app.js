import React from 'react';
import { createRoot } from 'react-dom/client';

import { PrismicProvider } from '@prismicio/react'
import { client } from './prismic'

import App from './components/App';

const root = createRoot(document.querySelector('#root'));
root.render(
    <PrismicProvider client={client}>
        <App />
    </PrismicProvider>
);