<template>
	<div class="todo-item grid-row" :class="{ done: item.done }" @click="editItem">
		<div class="grid-center">
			<button class="todo-btn check-icon" @click.stop="toggleItem">
				<i class="far" :class="{ 'fa-check-square': item.done, 'fa-square': !item.done }"></i>
			</button>
		</div>
		<div>
			<p class="content">{{ item.content }}</p>
			<p class="byline">{{ item.author }} | {{ item.timestamp }}</p>
		</div>
		<div class="grid-row grid-center">
			<button class="todo-btn up-icon" @click.stop="moveUp">
				<i class="fas fa-chevron-up"></i>
			</button>
			<button class="todo-btn down-icon" @click.stop="moveDown">
				<i class="fas fa-chevron-down"></i>
			</button>
			<button class="todo-btn delete-icon" @click.stop="deleteItem">
				<i class="fas fa-times"></i>
			</button>
		</div>
	</div>
</template>

<script>
export default {
	props: [
		"item",
	],
	methods: {
		toggleItem() {
			this.$store.commit("toggleItem", this.item.id);
		},
		moveUp(event) {
			event.currentTarget.blur();
			this.$store.commit("moveUp", this.item.id);
		},
		moveDown(event) {
			event.currentTarget.blur();
			this.$store.commit("moveDown", this.item.id);
		},
		deleteItem() {
			this.$store.commit("deleteItem", this.item.id);
		},
		editItem() {
			this.$router.push('edit/' + this.item.id);
		},
	},
};
</script>

<style scoped>
.todo-item {
	padding: var(--gap-sm) var(--gap-lg);
	border-radius: var(--border-radius);

	grid-template-columns: auto 1fr auto;
	gap: var(--gap-lg);
}
.todo-item:hover,
.todo-item:focus-within {
	background: var(--hover-bg-color);
}

.content {
	margin: 0;
}
.todo-item.done .content {
	opacity: 25%;
	text-decoration: line-through;
}

.byline {
	margin: 0;
	font-size: .8rem;
	opacity: 50%;
}
.todo-item.done .byline {
	opacity: 25%;
}

.todo-btn {
	opacity: 0;
	padding: 0;
	width: 1.5rem;
	height: 1.5rem;
	font-size: 1.5rem;
	line-height: 1.5rem;
}
.todo-btn:hover {
	transform: scale(1.2);
}
.todo-btn:focus {
	color: var(--focus-color);
}
.todo-item:hover .todo-btn,
.todo-item:focus-within .todo-btn {
	opacity: 100%;
}
.todo-item.done:hover .todo-btn,
.todo-item.done:focus-within .todo-btn {
	opacity: 25%;
}
.todo-item:first-child .up-icon,
.todo-item:last-child .down-icon {
	display: none;
}
</style>
