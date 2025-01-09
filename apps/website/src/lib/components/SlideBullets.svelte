<script lang="ts">
	interface Props {
		slides: { src: string }[];
		currentSlide: number;
		goToSlide: (index: number) => void;
	}

	let { slides, currentSlide, goToSlide }: Props = $props();
</script>

<div class="flex gap-10 py-2 xl:gap-20">
	{#each slides as { src }, i (src)}
		<button
			type="button"
			class="h-2 w-2 rounded-full bg-white {currentSlide === i ? 'opacity-100' : 'opacity-50'}"
			aria-label="Slide {i + 1}"
			onclick={() => goToSlide(i)}
		></button>
	{/each}
</div>
