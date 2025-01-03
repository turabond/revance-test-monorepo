<script lang="ts">
	const tabs: string[] = ['Animation', 'Branding', 'Illustration'];
	let activeTab: string = tabs[1];
</script>

<div class="flex h-screen items-center justify-center bg-gradient-to-b from-black to-blue-900">
	<nav class="flex flex-col gap-10 sm:flex-row sm:gap-20">
		{#each tabs as tab}
			<button
				class="relative py-4 text-3xl font-medium text-gray-400 transition duration-300 hover:text-white sm:flex-row"
				class:text-white={activeTab === tab}
				on:click={() => (activeTab = tab)}
			>
				{tab}
				<span
					class="absolute -bottom-3 left-0 right-0 mx-auto h-1.5 w-1/2 scale-x-0 rounded-full bg-white transition-transform duration-300 ease-out"
					class:scale-x-100={activeTab === tab}
				></span>
			</button>
		{/each}
	</nav>
</div>
