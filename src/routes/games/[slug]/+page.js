import { base } from '$app/paths';

export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch, params }) {
    const res = await fetch(base + '/games/' + params.slug + '.json');

    const game = await res.json();
    console.log(game);
    if (!game || Object.keys(game).length === 0) {
        return;
    }

    return { game };
}