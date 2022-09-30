<script>
    import Header from '$lib/components/Header.svelte'
    import '$lib/styles/style.scss'
</script>

<Header></Header>

<main>
    <slot></slot>
</main>

<footer>This is the footer</footer>
