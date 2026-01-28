'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';

function FeedPage() {
    const [posts, setPosts] = useState<MyNextApp.Post[]>([]);

    useEffect(() => {
        async function fetchPosts() {
            const data = await fetch('/api/posts').then((response) => 
                response.json()
            );
            setPosts(data);
        }

        fetchPosts();
    }, []);

    return (
        <div className='box page'>
            <h4>Page</h4>
            <ul style={{ listStylePosition: 'inside'}}>
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
            </ul>
        </div>
    );
}

export default FeedPage;