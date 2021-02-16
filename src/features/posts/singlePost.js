import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';



export const SinglePost = () => {


    const posts = useSelector(state => state.posts);
    const activePostId = useSelector(state => state.singlePostId);

    const selectedPost = posts.filter(post => post.name === activePostId);

    return (
        <section >
            <Link to="/"><button> Go back to all posts</button></Link>
            {selectedPost.map(post => (

                <section key={post.id}>

                    <div>
                        <h2>{post.title}</h2>
                        <p>{post.selftext}</p>
                        <img src={post.url} onError={(e) => e.target.style.display = "none" } alt=''/>
                    </div>
                </section>

            ))}
        </section>
    );
}