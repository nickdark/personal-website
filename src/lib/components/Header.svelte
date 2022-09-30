<header>
    <a href="/" id="home"><img src="/computer.svg" alt="site brand logo">Nick Prieto</a>
    <nav>
        <ul>
            <li><a href="/blog" sveltekit:prefetch>Blog</a></li>
            <li><a href="/about" sveltekit:prefetch>About</a></li>
        </ul>
    </nav>
</header>

<style lang="scss">
  header {
    display: flex;
    flex-direction: column;
    justify-content: center;

    a#home {
      font-size: 2rem;
      display: flex;
      justify-content: center;
      align-items: center;
      align-self: center;
      margin-top: .3rem;
      margin-left: .2rem;

      img {
        width: 2rem;
      }
    }

    nav {
      display: flex;
      flex-direction: column;
      margin-top: 20rem;
      justify-content: center;
      align-items: center;
    }
  }

  ul {
    margin: 0;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    font-size: 2rem;
    gap: 1rem;
  }

  a {
    text-decoration: none;
    color: inherit;
  }
</style>