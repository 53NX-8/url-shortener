<script>
	import '../app.pcss';
	import { MetaTags } from 'svelte-meta-tags';
</script>

<MetaTags
	title="Url Shortener"
	titleTemplate="%s | APP"
	description="This tool is used to generate tiny url"
/>

<div class="flex h-screen w-full flex-col overflow-hidden overflow-y-auto">
	<div class="grow">
		<slot />
	</div>
</div>
