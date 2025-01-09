<script lang="ts">
	import { fade } from 'svelte/transition';
	import { cubicOut } from 'svelte/easing';

	interface Props {
		currentSlide: number;
		slides: { src: string }[];
	}

	let { currentSlide = 0, slides }: Props = $props();
</script>

{#key currentSlide}
	<div
		class="absolute inset-0"
		in:fade={{ duration: 700, easing: cubicOut }}
		out:fade={{ duration: 700, easing: cubicOut }}
	>
		<img
			src={slides[currentSlide].src}
			alt="Product {currentSlide}"
			class="h-full w-full object-cover"
		/>
	</div>
{/key}
