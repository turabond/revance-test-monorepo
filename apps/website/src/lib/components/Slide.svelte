<script lang="ts">
	import { cubicOut } from 'svelte/easing';
	import { fade } from 'svelte/transition';

	export let currentSlide = 0;
	export let slides: { src: string }[];
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
