<template>
	<div class="view container grid-col gap-sm">
		<button class="btn grid-center" @click="$router.push('edit')">
			<i class="fas fa-plus"></i>
			<span>Add new todo</span>
		</button>
		<TodoList v-if="$store.state.items.length" />
	</div>
</template>

<script>
import TodoList from "@/components/TodoList";

export default {
	components: {
		TodoList,
	},
};
</script>

<style scoped>
</style>
