/** @type {import('./$types').PageLoad} */
import { PUBLIC_SERVER_URL } from '$env/static/public';

export async function load({ fetch }) {
    const res = await fetch(PUBLIC_SERVER_URL);
    const items = await res.json();
    return { items };
}