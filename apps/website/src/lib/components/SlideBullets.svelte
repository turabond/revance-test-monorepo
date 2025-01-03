<script lang="ts">
	export let slides: { src: string }[];
	export let currentSlide: number;
	export let goToSlide: (index: number) => void;
</script>

<div class="flex gap-10 py-2 xl:gap-20">
	{#each slides as _, i}
		<button
			type="button"
			class="h-2 w-2 rounded-full bg-white {currentSlide === i ? 'opacity-100' : 'opacity-50'}"
			aria-label="Slide {i + 1}"
			on:click={() => goToSlide(i)}
		></button>
	{/each}
</div>
