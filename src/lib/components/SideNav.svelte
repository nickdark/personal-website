<script></script>

<div class="sidenav">
    <a href="/" id="home"><img src="/computer.svg" alt="site brand logo"></a>
    <!-- TODO: Complete dark-mode toggle    -->
    <!--    <img class="theme-toggle" id="light-mode" src="/light-mode-toggle-icon.svg" alt="night mode" on:click={modeToggle}>-->
    <nav>
        <ul>
            <li><a href="/blog" data-svelte-prefetch>blog</a></li>
            <li><a href="/projects" data-svelte-prefetch>projects</a></li>
        </ul>
    </nav>
    <div class="social-media">
        <a href="https://www.github.com/nickdark" target="_blank"><img src="/github.svg" alt="github"></a>
        <a href="https://www.linkedin.com/in/nickprieto" target="_blank"><img src="/linkedin.svg" alt="linkedin"></a>
    </div>
    <span>©2022 Nick Prieto</span>
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
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
    padding-bottom: 6rem;
    flex-grow: 1;

    div {
      padding-bottom: 1rem;
      display: flex;
      gap: 1rem;

      img {
        width: 2rem;
      }
    }

    a#home {
      font-size: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-top: 1rem;

      img {
        width: 2.5rem;
      }
    }

    nav {
      display: flex;
      flex-direction: column;
      margin-top: auto;
      margin-bottom: auto;
      justify-content: center;
      align-items: center;
      padding-bottom: 10rem;
      padding-top: 10rem;
    }

    //.theme-toggle {
    //  position: absolute;
    //  left: 80%;
    //  top: 1rem;
    //  width: 3.5rem;
    //
    //  &:hover {
    //    cursor: pointer;
    //  }
    //}
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 2rem;
      gap: 1.5rem;
    }

    a {
      text-decoration: none;
      color: inherit;
    }
  }

</style>
