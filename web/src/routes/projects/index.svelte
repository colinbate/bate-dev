<script context="module">
  import client from '../../sanityClient'
	export async function preload({ params, query }) {
    const res = await this.fetch(`/projects/index_content`);
    const projects = await res.json();
    return projects;
	}
</script>

<script>
  export let projects;

  function formatDate(date) {
    return (new Date(date)).getUTCFullYear();
  }
</script>

<style>
	ul {
		margin: 0 0 1em 0;
		line-height: 1.5;
	}
</style>

<svelte:head>
	<title>Projects</title>
</svelte:head>

<h1>Projects</h1>

<ul>
	{#each projects as project}
		<!-- we're using the non-standard `rel=prefetch` attribute to
				tell Sapper to load the data for the page as soon as
				the user hovers over the link or taps it, instead of
				waiting for the 'click' event -->
		<li><a rel='prefetch' href='projects/{project.slug.current}'>{project.title}</a> ({formatDate(project.publishedAt)})</li>
	{/each}
</ul>
