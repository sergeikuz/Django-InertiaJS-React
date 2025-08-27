import "vite/modulepreload-polyfill";
import { createRoot } from "react-dom/client";
import { createInertiaApp } from "@inertiajs/react";
import { InertiaProgress } from '@inertiajs/progress';
import axios from 'axios';
import { Page } from "@inertiajs/core";
import React from 'react';


document.addEventListener('DOMContentLoaded', () => {

    const csrfToken = document.querySelector('meta[name=csrf-token]').getAttribute('content');
    axios.defaults.headers.common['X-CSRF-Token'] = csrfToken;

    InertiaProgress.init();

    createInertiaApp({
        resolve: (name) => {
            // Явно перечисляем все страницы для code splitting
            switch (name) {
                case 'About':
                    return import('./pages/About.tsx');
                case 'Index':
                    return import('./pages/Index.tsx');
                case 'ProductDetail':
                    return import('./pages/ProductDetail.jsx');
                case 'ProductsList':
                    return import('./pages/ProductsList.jsx');
                default:
                    throw new Error(`Page ${name} not found`);
            }
        },
        setup({ el, App, props }: {
            el: HTMLElement,
            App: React.ComponentType<{ page: Page }>,
            props: any
        }) {
            const root = createRoot(el);
            root.render(<App {...props} />);
        },
    });

});