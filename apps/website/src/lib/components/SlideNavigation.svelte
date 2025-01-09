<script lang="ts">
	interface Props {
		onPrevSlide: () => void;
		onNextSlide: () => void;
	}

	let { onPrevSlide, onNextSlide }: Props = $props();
</script>

<div class="flex items-center gap-4 lg:gap-6">
	<button type="button" aria-label="prev" onclick={onPrevSlide}>Previous</button>
	<span class="h-px w-10 bg-white lg:w-24"></span>
	<button type="button" aria-label="next" onclick={onNextSlide}>Next</button>
</div>
