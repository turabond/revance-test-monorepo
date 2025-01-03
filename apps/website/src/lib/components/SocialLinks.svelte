<script lang="ts">
	const socialLinks: { name: string; url: string }[] = [
		{ name: 'FB', url: '#' },
		{ name: 'PIN', url: '#' },
		{ name: 'IG', url: '#' }
	];
</script>

<div class="flex items-center gap-5 lg:gap-10">
	{#each socialLinks as { name, url }}
		<a href={url} class="text-sm font-semibold uppercase text-white">{name}</a>
	{/each}
</div>
