<script>
    import '$lib/styles/style.scss'
    import '$lib/styles/prismjs.scss'
    import SideNav from "$lib/components/SideNav.svelte";
</script>

<SideNav></SideNav>

<main>
    <slot></slot>
</main>
