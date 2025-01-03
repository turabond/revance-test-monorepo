<script lang="ts">
	import { fade } from 'svelte/transition';

	const languages: string[] = ['ENG', 'FR'];
	const menuList: string[] = ['Home', 'About', 'Services', 'Contact'];

	let isMenuOpen = false;
	let currentLanguage = 'ENG';

	const toggleMenu = () => (isMenuOpen = !isMenuOpen);
</script>

<header
	class="fixed left-0 right-0 top-0 z-50 flex items-center justify-between p-6 xl:px-16 xl:py-12"
>
	<button
		class="flex gap-4 text-sm font-medium text-white"
		aria-label="Open Menu"
		on:click={toggleMenu}
	>
		<svg
			class="h-5 w-5"
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			width="800px"
			height="800px"
			viewBox="0 0 32 32"
			enable-background="new 0 0 32 32"
			id="Editable-line"
			version="1.1"
			xml:space="preserve"
			><line
				fill="none"
				id="XMLID_103_"
				stroke="#ffffff"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-miterlimit="10"
				stroke-width="2"
				x1="7"
				x2="25"
				y1="16"
				y2="16"
			/><line
				fill="none"
				id="XMLID_102_"
				stroke="#ffffff"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-miterlimit="10"
				stroke-width="2"
				x1="7"
				x2="25"
				y1="25"
				y2="25"
			/><line
				fill="none"
				id="XMLID_101_"
				stroke="#ffffff"
				stroke-linecap="round"
				stroke-linejoin="round"
				stroke-miterlimit="10"
				stroke-width="2"
				x1="7"
				x2="25"
				y1="7"
				y2="7"
			/></svg
		>
		Menu
	</button>

	<div class="flex items-center gap-5 lg:gap-10">
		{#each languages as language}
			<button
				class="text-sm font-semibold uppercase text-gray-400 transition-colors"
				aria-label={`Change language to ${language}`}
				class:text-gray-800={currentLanguage === language}
				on:click={() => (currentLanguage = language)}
			>
				{language}
			</button>
		{/each}
	</div>
</header>

{#if isMenuOpen}
	<nav
		in:fade={{ duration: 100 }}
		class="fixed bottom-0 left-0 right-0 top-0 z-50 flex flex-col items-center justify-center gap-10 bg-white"
	>
		<button
			type="button"
			aria-label="Close Menu"
			on:click={toggleMenu}
			class="absolute left-6 top-6 flex h-6 w-6 items-center justify-center text-lg text-gray-800 xl:left-16 xl:top-12"
		>
			x
		</button>

		{#each menuList as item}
			<a on:click|preventDefault={toggleMenu} href="#" class="text-lg font-medium">{item}</a>
		{/each}
	</nav>
{/if}
