<template>
	<div id="app">
		<NavBar />
		<router-view/>
	</div>
</template>

<script>
import NavBar from "@/components/NavBar";

export default {
	components: {
		NavBar,
	},
	created() {
		this.$store.dispatch("fetchData");
	},
};
</script>

<style>
:root {
	--max-width: 1600px;
	--text-color: white;
	--focus-color: #ffa500;
	--navbar-color: black;
	--gap-sm: 0.5rem;
	--gap-lg: 1.5rem;
	--border-radius: 0.2rem;
	--border-width: 0.2rem;
	--hover-bg-color: #fff1;

	font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
	font-size: clamp(1rem, 1.75vw, 2rem);
	color: white;
}

* {
	box-sizing: border-box;
}

body {
	width: 100%;
	height: 100vh;
	margin: 0;
	background: radial-gradient(circle at center, #555, #444 50%, #222 100%);
}

.view {
	padding: var(--gap-sm);
}

.container {
	width: 100%;
	max-width: var(--max-width);
	margin-left: auto;
	margin-right: auto;
}

.grid-col {
	display: grid;
	gap: var(--gap-sm);
	grid-auto-flow: row;
}

.grid-row {
	display: grid;
	gap: var(--gap-sm);
	grid-auto-flow: column;
}

.grid-center {
	display: grid;
	justify-content: center;
	align-items: center;
}

.grid-spread {
	justify-content: space-between;
}

button {
	color: var(--text-color);
	border: none;
	outline: none;
	background: transparent;
	cursor: pointer;
}
button:focus {
	color: var(--focus-color);
}

.btn {
	padding: var(--gap-sm) var(--gap-lg);
	font-size: 1rem;
	border-radius: var(--border-radius);

	display: grid;
	grid-auto-flow: column;
	align-content: center;
	align-items: center;
	gap: var(--gap-sm);
}
.btn:hover {
	background: var(--hover-bg-color);
}
</style>
