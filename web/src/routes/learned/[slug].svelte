<script context="module">
	export async function preload({ params }) {
		// the `slug` parameter is available because
    // this file is called [slug].html
    const { slug } = params
    const res = await this.fetch(`/learned/${slug}_content`);
    const learning = await res.json();
    return {learning};
	}
</script>

<script>
	export let learning;
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



	.content :global(h2) {
		font-size: 1.4em;
		font-weight: 500;
	}

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
	<title>{learning.title}</title>
</svelte:head>

<h1>{learning.title}</h1>
{#if learning.body}
<div class='content'>
	{@html learning.body}
</div>
{/if}
{#if learning.mainImage}
<img class="mainImage" src={learning.mainImage} alt="mainImage">
{/if}
