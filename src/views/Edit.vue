<template>
	<form class="view container grid-col" @submit.prevent="submitForm">
		<h1 v-if="id === undefined">New</h1>
		<h1 v-else>Edit</h1>
		<div>
			<label for="content">Content</label>
			<textarea v-model="content" id="content" cols="30" rows="2" @input="inputChanged"></textarea>
			<p class="error" v-if="contentErr">• This field is required</p>
		</div>

		<div>
			<label for="author">Author</label>
			<input v-model="author" type="text" id="author" @input="inputChanged">
			<p class="error" v-if="authorErr">• This field is required</p>
		</div>

		<div class="grid-row grid-spread">
			<button class="btn" type="button" @click="$router.push('/')">
				<i class="fas fa-chevron-left"></i>
				<span>Cancel</span>
			</button>

			<button class="btn" type="submit">
				<i class="fas fa-check"></i>
				<span>Submit</span>
			</button>
		</div>
	</form>
</template>

<script>
export default {
	props: [
		"id",
	],
	data() {
		return {
			content: "",
			author: "",
			contentErr: false,
			authorErr: false,
		};
	},
	created() {
		if (this.id === undefined) return;
		const item = this.$store.state.items.find(val => val.id === this.id);
		this.content = item.content;
		this.author = item.author;
	},
	methods: {
		inputChanged(event) {
			const target = event.currentTarget;
			this[target.id + "Err"] = target.value === "";
		},
		submitForm() {
			if (this.content === "") this.contentErr = true;
			if (this.author === "") this.authorErr = true;
			if (this.contentErr || this.authorErr)
				return;

			const item = {
				content: this.content,
				author: this.author,
			};
			if (this.id === undefined) {
				this.$store.commit("addItem", item);
			} else {
				item.id = this.id;
				this.$store.commit("updateItem", item);
			}
			this.$router.push('/');
		},
	},
};
</script>

<style scoped>
form {
	width: 100%;
	max-width: 1200px;
}

h1 {
	font-size: 1.5rem;
	text-align: center;
	margin: 0;
}

label {
	display: block;
	font-size: .8rem;
	opacity: 50%;
}

input, textarea {
	display: block;
	width: 100%;
	font-size: 1rem;
	padding: var(--gap-sm);
	border-radius: var(--border-radius);
	border: var(--border-width) solid transparent;
	outline: none;
	background: var(--hover-bg-color);
	color: var(--text-color);
}
input:hover, textarea:hover {
	background: #fff2;
}
input:focus, textarea:focus {
	background: #fff2;
	border: var(--border-width) solid var(--focus-color);
}

textarea {
	resize: vertical;
}

.error {
	margin: 0;
	padding: .2em var(--gap-sm);
	font-size: .8rem;
	line-height: .8rem;
	/* color: brown; */
	background: brown;
	/* background: linear-gradient(#a52a2a80, #a52a2a); */
	border-bottom-left-radius: var(--border-radius);
	border-bottom-right-radius: var(--border-radius);
	/* border-radius: var(--border-radius); */
}
</style>
