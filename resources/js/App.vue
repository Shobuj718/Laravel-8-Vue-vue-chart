<template>
	<div class="container">
		<nav class="navbar navbar-expand-lg navbar-light bg-light">
			<div class="collapse navbar-collapse">
				<div class="navbar-nav">
					<router-link to="/" class="nav-item nav-link">Product List</router-link>
					<router-link to="/create" class="nav-item nav-link">Create Product</router-link>
					<router-link to="/add-coin" class="nav-item nav-link">Add Coin</router-link>
					<router-link to="/chart" class="nav-item nav-link">Chart</router-link>
					<router-link to="/post" class="nav-item nav-link">Post</router-link>
				</div>
			</div>
		</nav>

		<router-view></router-view>

	</div>
</template>

<script>
	export default {
		mounted() {
			console.log('app vue page ')
		}
	}
</script>


