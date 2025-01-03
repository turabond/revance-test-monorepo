<script lang="ts">
	import type { Todo } from '$lib/types/todo';
	import { fade, slide } from 'svelte/transition';

	export let todos: Todo[] = [];
	export let onToggleComplete: (id: number) => void;
	export let onRemove: (id: number) => void;
</script>

<ul class="space-y-4">
	{#each todos as todo (todo.id)}
		<li
			in:fade={{ duration: 200 }}
			out:slide={{ duration: 200 }}
			class="flex transform items-center justify-between rounded-lg bg-gray-100 p-4 shadow-md transition-all hover:scale-105"
		>
			<button
				type="button"
				class="flex items-center gap-4"
				on:click={() => onToggleComplete(todo.id)}
			>
				<input
					type="checkbox"
					checked={todo.completed}
					class="form-checkbox h-6 w-6 text-blue-500 transition-all duration-300"
				/>
				<span
					class="text-lg font-medium transition-all duration-300 ease-in-out {todo.completed
						? 'text-gray-400 line-through'
						: 'text-gray-800'}"
				>
					{todo.text}
				</span>
			</button>

			<button
				type="button"
				on:click={() => onRemove(todo.id)}
				class="flex h-6 w-6 items-center justify-center text-lg text-red-500 transition-colors hover:text-red-700"
			>
				×
			</button>
		</li>
	{/each}
</ul>
