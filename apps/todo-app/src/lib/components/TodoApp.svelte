<script lang="ts">
	import { scale } from 'svelte/transition';
	import type { Todo } from '$lib/types/todo';
	import TodoList from '$lib/components/TodoList.svelte';
	import TodoInput from '$lib/components/TodoInput.svelte';

	let todos: Todo[] = $state([
		{ id: 1, text: 'Navigation hover', completed: true },
		{ id: 2, text: 'Gradient background logo', completed: true },
		{ id: 3, text: 'Website', completed: true },
		{ id: 4, text: 'To do application', completed: true }
	]);

	let newTodo = $state('');

	const addTodo = () => {
		if (newTodo.trim()) {
			todos = [...todos, { id: Date.now(), text: newTodo, completed: false }];
			newTodo = '';
		}
	};

	const toggleComplete = (todoId: number) => {
		todos = todos.map((todo) =>
			todo.id === todoId ? { ...todo, completed: !todo.completed } : todo
		);
	};

	const removeTodo = (todoId: number) => {
		todos = todos.filter((todo) => todo.id !== todoId);
	};

	const onInput = (event: Event) => {
		newTodo = (event.target as HTMLInputElement).value;
	};

	const onKeyDown = (event: KeyboardEvent) => {
		if (event.key === 'Enter') addTodo();
	};
</script>

<div class="w-full max-w-3xl rounded-xl bg-white p-6 shadow-lg md:p-12">
	<h1 class="mb-8 text-center text-3xl font-extrabold text-gray-800 md:text-5xl">To-Do List</h1>

	<TodoInput value={newTodo} oninput={onInput} onkeydown={onKeyDown} onclick={addTodo} />

	{#if todos.length > 0}
		<TodoList {todos} onToggleComplete={toggleComplete} onRemove={removeTodo} />
	{:else}
		<p in:scale={{ duration: 200 }} class="mt-6 text-center text-lg text-gray-500">
			No todo yet. Start by adding one!
		</p>
	{/if}
</div>
