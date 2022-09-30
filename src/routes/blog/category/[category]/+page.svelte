<script>
    export let data
    const {posts, category} = data
</script>
<h1>{category.charAt(0).toUpperCase() + category.slice(1)} Posts</h1>
<ul>
    {#each posts as post}
        <li>
            <h2>
                <a href="{post.path}">{post.meta.title}</a>
            </h2>
            Published {post.meta.date}
        </li>
    {/each}
</ul>