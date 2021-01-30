<template>
	<div class="navbar">
		<nav class="container">
			<router-link to="/" class="logo">./todo-vue</router-link>
			<router-link to="/about" class="nav-button">
				<i class="far fa-question-circle"></i>
			</router-link>
		</nav>
	</div>
</template>

<style scoped>
.navbar {
	background-color: var(--navbar-color);
}

nav {
	padding: var(--gap-sm);
	font-size: 2rem;

	display: flex;
	justify-content: space-between;
	align-items: center;
}

.logo {
	color: var(--text-color);
	font-weight: bold;
	text-decoration: none;
}
.logo:hover {
	text-decoration: underline;
}
.logo:focus {
	outline: none;
	color: var(--focus-color);
}

.nav-button {
	color: var(--text-color);
	outline: none;
}
.nav-button:hover {
	transform: scale(1.2);
}
.nav-button:focus {
	color: var(--focus-color);
}
</style>
