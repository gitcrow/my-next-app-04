import PostFragment from "@/components/PostFragment";
import { notFound } from "next/navigation";
import samplePosts from '@/lib/constants/sample-posts.json'

interface PageProps {
    params: Promise<{ postId: string}>;
}

async function PostItemPage(props: PageProps) {
    const { params } = props;
    const { postId } = await params;
    const post = samplePosts.find((item) => {
        return item.id === postId
    })

    if (!post) {
        notFound();
    }

    return (
        <div className='box page'>
            <p>{`Intercepted PostItemPage ${postId}`}</p>
            <PostFragment post={post} />
        </div>
    );
}

export default PostItemPage;