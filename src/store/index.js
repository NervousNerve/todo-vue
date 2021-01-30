import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

// Utility function for formatting a timestamp
function formatTime(time) {
	return new Date(time).toLocaleDateString('sv-SE', {
		day: '2-digit',
		month: '2-digit',
		year: 'numeric',
		hour: '2-digit',
		minute: '2-digit',
	});
}

export default new Vuex.Store({
	state: {
		items: [
			{
				id: 0,
				content: "Learn all the programming languages in the world",
				author: "Author Authorsson",
				timestamp: "2021-01-27 16:02",
				done: false,
			},
			{
				id: 1,
				content: "Pilot a rocket ship to the mooooon!",
				author: "Buzz Lightyear",
				timestamp: "2021-01-29 08:35",
				done: false,
			},
			{
				id: 2,
				content: "Take out the trash",
				author: "Someone",
				timestamp: "2021-01-27 14:54",
				done: true,
			},
			{
				id: 3,
				content: "Call mother",
				author: "Steve Stevenson",
				timestamp: "2021-01-25 09:39",
				done: true,
			},
		],
	},
	mutations: {
		// Replace items with new data
		setData(state, data) {
			state.items = data;
		},
		// Move item up in the list
		moveUp(state, id) {
			const index = state.items.findIndex(val => val.id === id);
			if (index === 0) {
				// First item cannot be moved up
				return;
			} else if (index < 0) {
				throw new Error("Error: Invalid id:", id);
			}
			const item = state.items.splice(index, 1)[0];
			state.items.splice(index - 1, 0, item);
			this.dispatch("saveData");
		},
		// Move item down in the list
		moveDown(state, id) {
			const index = state.items.findIndex(val => val.id === id);
			if (index === state.items.length - 1) {
				// Last item cannot be moved down
				return;
			} else if (index < 0) {
				throw new Error("Error: Invalid id:", id);
			}
			const item = state.items.splice(index, 1)[0];
			state.items.splice(index + 1, 0, item);
			this.dispatch("saveData");
		},
		// Delete item from list
		deleteItem(state, id) {
			const index = state.items.findIndex(val => val.id === id);
			if (index < 0) {
				throw new Error("Error: Invalid id:", id);
			}
			state.items.splice(index, 1);
			this.dispatch("saveData");
		},
		// Add new item to beginning of list
		addItem(state, item) {
			item.id = state.items.reduce((acc, val) => acc > val.id ? acc : val.id, 0) + 1;
			item.timestamp = formatTime(Date.now());
			item.done = false;
			state.items.unshift(item);
			this.dispatch("saveData");
		},
		// Replace an item in the list with the passed in object,
		// if an existing item with the same 'id' is found.
		// 'timestamp' gets overwritten with current time
		updateItem(state, item) {
			const index = state.items.findIndex(val => val.id === item.id);
			if (index < 0) {
				throw new Error("Error: Invalid id:", item.id);
			}
			item.timestamp = formatTime(Date.now());
			item.done = state.items[index].done;
			state.items.splice(index, 1, item);
			this.dispatch("saveData");
		},
		// Toggles state of 'done' on an item
		// If 'done' becomes 'true', move item to bottom of list
		toggleItem(state, id) {
			const index = state.items.findIndex(val => val.id === id);
			if (index < 0) {
				throw new Error("Error: Invalid id:", id);
			}
			let isDone = !state.items[index].done;
			Vue.set(state.items[index], "done", isDone);
			if (isDone) {
				// Move to bottom of list
				const item = state.items.splice(index, 1)[0];
				state.items.push(item);
			}
			this.dispatch("saveData");
		},
	},
	actions: {
		// Read data from local storage if there is any, and update state
		fetchData() {
			let localData = localStorage.getItem("todoList");
			if (!localData) return;
			this.commit("setData", JSON.parse(localData));
		},
		// Write current state to local storage
		saveData(context) {
			localStorage.setItem("todoList", JSON.stringify(context.state.items));
		},
	},
});
