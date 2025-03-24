import { base } from '$app/paths';

export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const res = await fetch(base + '/games/' + params.slug + '.md');
    const game = await res.text();

    return { game };
}