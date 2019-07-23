<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
    // this file is called [slug].html
    const { slug } = params
    const res = await this.fetch(`/projects/${slug}_content`);
    const project = await res.json();
    return {project};
	}
</script>

<script>
	export let project;
</script>

<style>
	/*
		By default, CSS is locally scoped to the component,
		and any unused styles are dead-code-eliminated.
		In this page, Svelte can't know which elements are
		going to appear inside the {{{post.html}}} block,
		so we have to use the :global(...) modifier to target
		all elements inside .content
	*/

  .mainImage {
    max-width: 100%;
    box-shadow: 0 3px 6px hsla(0, 0%, 0%, 0.2), 0 10px 20px hsla(0, 0%, 0%, 0.15);
  }

	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

	/* .content :global(pre) {
		padding: 0.5em;
		border-radius: 2px;
		overflow-x: auto;
    position: relative;
	}

	.content :global(pre) :global(code) {

		background-color: transparent;
		padding: 0;
	} */

  .content :global(img) {
    display: block;
    max-width:100%;
  }

  .content :global(figure) {
    margin: 0;
  }

	.content :global(ul) {
		line-height: 1.5;
	}

	.content :global(li) {
		margin: 0 0 0.5em 0;
	}

</style>

<svelte:head>
	<title>{project.title}</title>
</svelte:head>
<h1>{project.title} ({project.projectYear})</h1>
<a href={project.projectUrl}>{project.projectUrl}</a>
{#if project.intro}
<div class='content'>
	{@html project.intro}
</div>
{/if}
{#if project.mainImage}
<img class="mainImage" src={project.mainImage} alt="mainImage">
{/if}
