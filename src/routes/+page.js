export const ssr = false;

/** @type {import('./$types').PageLoad} */
export async function load({ fetch }) {
    const res = await fetch('/games.json');
    const games = await res.json();

    return { games };
}