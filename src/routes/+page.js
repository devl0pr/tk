import { base } from '$app/paths';

export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const res = await fetch(base + '/games.json');
    const games = await res.json();

    return { games };
}