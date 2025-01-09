<script lang="ts">
	interface Props {
		slides: { src: string }[];
		currentSlide: number;
		goToSlide: (index: number) => void;
	}

	let { slides, currentSlide, goToSlide }: Props = $props();

	let nextIndex = $derived((currentSlide + 1) % slides.length);
	let prevIndex = $derived((currentSlide - 1 + slides.length) % slides.length);
</script>

<div class="flex h-full w-full flex-1 gap-6 lg:flex-col lg:justify-end lg:gap-10">
	<button
		type="button"
		class="lg:h-1/2 lg:w-full"
		onclick={() => goToSlide(nextIndex)}
		aria-label="Next Slide"
	>
		<img
			src={slides[nextIndex].src}
			alt="Product {nextIndex}"
			class="block lg:ml-auto lg:h-full lg:object-contain"
		/>
	</button>

	<button
		type="button"
		class="lg:h-1/3 lg:w-full"
		onclick={() => goToSlide(prevIndex)}
		aria-label="Previous Slide"
	>
		<img
			src={slides[prevIndex].src}
			alt="Product {prevIndex}"
			class="block lg:mr-auto lg:h-full lg:object-contain"
		/>
	</button>
</div>
