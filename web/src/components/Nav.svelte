<script>
	export let segment;
</script>

<style>
	nav {
		padding: 0 0.5rem;
	}

	ul {
		margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
    flex-direction: column;
    float: left;
    background-color: hsla(0, 100%, 100%, 0.1);
	}

	li {
		display: block;
	}

	.selected {
		position: relative;
		display: inline-block;
	}

	.selected::after {
		position: absolute;
		content: '';
		width: 0.5rem;
		height: 0.5rem;
		background-color: hsl(13, 100%, 52%);
    display: block;
    border-radius: 20rem;
    right: -0.75rem;
    top: 50%;
    margin-top: -0.5rem;
	}

	a {
		text-decoration: none;
		padding: 0.5rem;
		display: block;
  }
  img {
    width: 2rem;
  }
</style>

<nav>
	<ul>
		<li><a class:selected={segment === undefined} href='.'><img src="logo.svg" alt="Home"></a></li>
		<li><a class:selected={segment === "projects"} href='projects'><img src="projects.svg" alt="Projects"></a></li>

		<!-- for the blog link, we're using rel=prefetch so that Sapper prefetches
		     the blog data when we hover over the link or tap it on a touchscreen -->
		<li><a rel=prefetch class:selected={segment === "learned"} href='learned'><img src="learned.svg" alt="Things I Learned"></a></li>
	</ul>
</nav>
