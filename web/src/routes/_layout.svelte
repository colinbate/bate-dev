<script>
	import Nav from '../components/Nav.svelte';

	export let segment;
</script>

<style>
	main {
		position: relative;
		max-width: 40em;
		background-color: white;
		padding: 1.5em;
		margin: 0 auto;
    box-sizing: border-box;
    line-height: 1.7;
  }

  @media (min-width: 800px) {
    main {
      padding: 2em;
    }
  }
</style>

<Nav {segment}/>

<main>
	<slot></slot>
</main>
