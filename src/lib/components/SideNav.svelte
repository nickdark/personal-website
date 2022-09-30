<script>
    import Header from "$lib/components/Header.svelte";
    import Footer from "$lib/components/Footer.svelte";
</script>

<div class="sidenav">
    <Header></Header>
    <Footer></Footer>
</div>

<style lang="scss">
  .sidenav {
    position: fixed;
    width: 25rem;
    height: 100%;
    z-index: 1;
    top: 0;
    left: 0;
    overflow-x: hidden;
    display: flex;
    flex-direction: column;
    border-right-color: #222222;
    border-right-style: solid;
    border-right-width: .3rem;
  }

</style>
