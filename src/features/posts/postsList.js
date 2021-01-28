import React from 'react'
import { useSelector } from 'react-redux' //used to read data from the store

export const PostsList = () => {
    const posts = useSelector(state => state.posts)

    //map function used to read posts from posts array
    const renderedPosts = posts.map(post => (
        <article className="post-excerpt" key={post.id}>
            <h3>{post.title}</h3>
            <p className="post-content">{post.content.substring(0, 100)}</p>
        </article>
    ))

    return (
        <section className="posts-list">
            <h2>Posts</h2>
            {renderedPosts}
        </section>
    )
}