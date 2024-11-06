import React from 'react';
import { Helmet } from 'react-helmet';
import { useLoaderData } from 'react-router-dom';
import Post from './Post';

const Posts = () => {

    const posts = useLoaderData();



    
    return (
        <div className='w-8/12 mx-auto grid grid-cols-3 gap-10 mt-10'>

            <Helmet>
                <meta charSet="utf-8" />
                <title>Posts</title>
                {/* <link rel="canonical" href="http://mysite.com/example" /> */}
            </Helmet>


            {
                posts.map(post=><Post key={post.id} post = {post}></Post>)
            }

        </div>
    );
};

export default Posts;