import React from 'react';
import { Link } from 'react-router-dom';

import { useSelector, useDispatch } from 'react-redux';
import {changeActivePostId} from './singlePostSlice';

const Posts = () => {

    const activeSearchInput = useSelector(state => state.search);
    const posts = useSelector(state => state.posts);
    const dispatch = useDispatch();
    const filteredPosts = posts.filter(post => post.title.toLowerCase().includes(activeSearchInput.toLowerCase()));  

    return (
        <section>
            {filteredPosts.map(post => (
                <section key={post.id}>
                    <div>
                        <Link to={"/singlePost"} onClick={() => dispatch(changeActivePostId(post.name))}>
                            <h2>{post.title}</h2>
                            <img src={post.url} onError={(e) => e.target.style.display = "none"} alt=''/>
                            <p>{post.selftext.substring(0, 600) + (post.selftext.length > 600 ? " [...]" : "")}</p>
                        </Link>
                    </div>
                </section>
            ))}
        </section>
    );
}
export default Posts;