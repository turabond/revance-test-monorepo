<script lang="ts">
	import { onDestroy, onMount } from 'svelte';
	import Slide from '$lib/components/Slide.svelte';
	import SlideNavigation from './SlideNavigation.svelte';
	import SlideBullets from './SlideBullets.svelte';
	import SlideThumbnails from './SlideThumbnails.svelte';
	import SocialLinks from './SocialLinks.svelte';

	const slides: { src: string }[] = [
		{ src: '/product/3_1.jpg' },
		{ src: '/product/3_2.jpg' },
		{ src: '/product/3_3.jpg' }
	];

	let currentSlide = $state(0);
	let interval: ReturnType<typeof setInterval>;

	const playSlides = () => {
		interval = setInterval(nextSlide, 5000);
	};

	const stopSlides = () => {
		clearInterval(interval);
	};

	const nextSlide = () => {
		stopSlides();
		currentSlide = (currentSlide + 1) % slides.length;
		playSlides();
	};

	const prevSlide = () => {
		stopSlides();
		currentSlide = (currentSlide - 1 + slides.length) % slides.length;
		playSlides();
	};

	const goToSlide = (index: number) => {
		stopSlides();
		currentSlide = index;
		playSlides();
	};

	onMount(() => {
		playSlides();
	});

	onDestroy(() => {
		stopSlides();
	});
</script>

<section class="flex flex-col lg:h-screen lg:flex-row">
	<!-- Left Side -->
	<div class="w-full lg:h-full lg:w-1/2 xl:w-3/5">
		<div class="relative h-screen w-full">
			<Slide {currentSlide} {slides} />

			<div
				class="relative flex h-full w-full flex-col justify-end gap-24 p-6 text-white xl:px-16 xl:py-12"
			>
				<div class="flex items-center justify-between gap-6">
					<p class="text-sm font-light">Summer<br />Collection<br />2020</p>

					<SlideNavigation onPrevSlide={prevSlide} onNextSlide={nextSlide} />
				</div>

				<h1 class="font-playfair text-7xl/0.7 md:text-8xl/0.7 lg:text-8xl/0.7 xl:text-9xl/0.7">
					Summer<br />2020
				</h1>

				<div class="flex justify-between">
					<SocialLinks />

					<SlideBullets {slides} {currentSlide} {goToSlide} />
				</div>
			</div>
		</div>
	</div>

	<!-- Right Side -->
	<div class="relative w-full bg-white p-6 lg:h-full lg:w-1/2 xl:w-2/5 xl:px-16 xl:py-12">
		<div class="flex h-full min-h-min justify-between gap-6 lg:gap-10">
			<SlideThumbnails {slides} {currentSlide} {goToSlide} />

			<div class="m-auto flex items-center gap-8 text-sm text-gray-600 [writing-mode:vertical-lr]">
				<p class="">Ref: 6687/787</p>
				<div class="h-20 w-px bg-gray-600"></div>
				<p class="">White loose dress</p>
			</div>
		</div>

		<div
			class="flex items-center justify-center p-6 lg:absolute lg:bottom-0 lg:right-0 xl:pb-12 xl:pr-16"
		>
			<button
				class="border border-gray-800 bg-white px-16 py-3 text-xs font-medium uppercase text-gray-800 transition-colors hover:bg-gray-800 hover:text-white"
			>
				Shop Now
			</button>
		</div>
	</div>
</section>
