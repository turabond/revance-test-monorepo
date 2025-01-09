<script lang="ts">
	interface Props {
		value: string;
		onclick: () => void;
		onkeydown: (event: KeyboardEvent) => void;
		oninput: (event: Event) => void;
	}

	let { value, onclick, oninput, onkeydown }: Props = $props();
</script>

<div class="mb-6 flex flex-col gap-4 md:flex-row">
	<input
		bind:value
		{oninput}
		{onkeydown}
		type="text"
		placeholder="What needs to be done?"
		class="flex-grow rounded-lg border border-gray-300 p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
	/>

	<button
		{onclick}
		class="transform rounded-lg bg-blue-500 px-6 py-3 font-semibold text-white shadow-lg transition-transform hover:scale-105 hover:bg-blue-600"
	>
		Add Task
	</button>
</div>
