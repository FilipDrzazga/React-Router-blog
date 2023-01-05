import React from 'react';
import { createRoot } from 'react-dom/client';

import { HashRouter } from 'react-router-dom';

import { PrismicProvider } from '@prismicio/react'
import { client } from './prismic'

import GlobalStyle from './styled/globalStyles';

import App from './components/App';

const root = createRoot(document.querySelector('#root'));
root.render(
    <PrismicProvider client={client}>
    <HashRouter>
        <GlobalStyle/>
        <App />
    </HashRouter>
    </PrismicProvider>
);