<header>
    <a href="/" id="home"><img src="/computer.svg" alt="site brand logo"></a>
    <nav>
        <ul>
            <li><a href="/blog" data-svelte-prefetch>blog</a></li>
            <li><a href="/about" data-svelte-prefetch>about</a></li>
        </ul>
    </nav>
</header>

<style lang="scss">
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    a#home {
      font-size: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;
      margin-top: .3rem;
      margin-left: .2rem;

      img {
        width: 2.5rem;
      }
    }

    nav {
      display: flex;
      flex-direction: column;
      margin-top: 30rem;
      justify-content: center;
      align-items: center;
    }
  }

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
</style>