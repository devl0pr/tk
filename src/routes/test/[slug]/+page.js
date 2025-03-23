import { error } from '@sveltejs/kit';

/** @type {import('./$types').PageLoad} */
export function load({ params }) {
    if (params.slug === 'tk') {
        return {
            title: 'Devl0pr',
            content: 'Welcome to the test page',
        }
    }

    error(404, 'Not found!');
}