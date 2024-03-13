<script lang="ts">
	/** @type {import('./$types').PageData} */
	import Card from '$lib/components/url_shortner/Card.svelte';
	import { Button } from '$lib/components/ui/button';
	import { Input } from '$lib/components/ui/input';
	import Logo from '$lib/components/ui/logo/logo.svelte';
	import { PUBLIC_SERVER_URL } from '$env/static/public';
	// import { LinkPreview } from 'svelte-link-preview';
	export let data;

	let fullUrl = '';

	async function store() {
		const response = await fetch(PUBLIC_SERVER_URL, {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({ fullUrl })
		});

		if (response.ok) {
			// If the request was successful, refresh the page
			location.reload();
		} else {
			console.error('Error:', response.statusText);
		}
	}

	async function onDelete(event: any) {
		const response = await fetch(`${PUBLIC_SERVER_URL}${event.detail}`, {
			method: 'DELETE',
			headers: {
				'Content-Type': 'application/json'
			}
		});

		if (response.ok) {
			location.reload();
		} else {
			console.error('Error:', response.statusText);
		}
	}
</script>

<div class="mx-auto flex h-full max-w-6xl flex-col space-y-10 px-4 py-6 md:px-6">
	<div class="flex flex-col items-center justify-end space-y-8 text-center md:h-2/5">
		<Logo />
		<h1>URL Shortener API</h1>
		<form method="POST" class="flex w-full flex-col gap-4 md:w-1/2 md:flex-row">
			<Input
				class="w-full"
				bind:value={fullUrl}
				type="url"
				placeholder="Enter a URL to shorten..."
			/>
			<div class="flex justify-end">
				<Button on:click={store}>Shorten!</Button>
			</div>
		</form>
	</div>
	<div class="grid grid-cols-2 gap-8 p-4 md:grid-cols-4">
		{#each data.items as url, index (index)}
			<Card {...url} on:onDelete={onDelete} />
		{/each}
	</div>
</div>
