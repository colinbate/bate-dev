<script context="module">
	export async function preload({ params, query }) {
    const res = await this.fetch(`/learned/index_content`);
    const learned = await res.json();
    return {learned};
	}
</script>

<script>
  export let learned;

  function formatDate(date) {
    return new Date(date).toLocaleDateString()
  }
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Blog</title>
</svelte:head>

<h1>Things I've Learned</h1>

<ul>
	{#each learned as learning}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='learned/{learning.slug}'>{learning.title}</a> ({formatDate(learning.publishDate)})</li>
	{/each}
</ul>
