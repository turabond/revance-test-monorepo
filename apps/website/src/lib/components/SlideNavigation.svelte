<script lang="ts">
	export let onPrevSlide: () => void;
	export let onNextSlide: () => void;
</script>

<div class="flex items-center gap-4 lg:gap-6">
	<button type="button" aria-label="prev" on:click={onPrevSlide}>Previous</button>
	<span class="h-px w-10 bg-white lg:w-24"></span>
	<button type="button" aria-label="next" on:click={onNextSlide}>Next</button>
</div>
