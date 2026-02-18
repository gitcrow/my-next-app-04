//'use client';

//import { useState, useEffect } from 'react';
//import Link from 'next/link';
import { Suspense } from "react";
import PostList from '@/components/PostList';
import { readPostsAction, readPostsActionWithCache, resetCache } from "@/lib/actions/posts";

function FeedPage() {
    //const [posts, setPosts] = useState<MyNextApp.Post[]>([]);
    //const postsPromise = readPostsAction();
    const postsPromise = readPostsActionWithCache();

    // useEffect(() => {
    //     async function fetchPosts() {
    //         const data = await fetch('/api/posts').then((response) => 
    //             response.json()
    //         );
    //         setPosts(data);
    //     }

    //     fetchPosts();
    // }, []);

    return (
        <div className='box page'>
            <h4>Page</h4>
            {/* <ul style={{ listStylePosition: 'inside'}}>
                {posts.map((post, index) => {
                    const postId = index + 1;
                    return (
                        <li key={index}>
                            <Link href={`/posts/${postId}`}>
                                {post.title}
                            </Link>
                        </li>
                    );
                })}
            </ul> */}
            <Suspense fallback={<div>Loading...</div>}>
                <PostList postsPromise={postsPromise} />
            </Suspense>

            <button onClick={resetCache}>Reset Cache</button>
        </div>
    );
}

export default FeedPage;