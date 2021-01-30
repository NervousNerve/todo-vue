<template>
	<div class="grid-col gap-sm">
		<TodoItem v-for="item in $store.state.items" :key="item.id" :item="item" />
	</div>
</template>

<script>
import TodoItem from "@/components/TodoItem";

export default {
	components: {
		TodoItem,
	},
};
</script>
