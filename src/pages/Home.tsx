import { useEffect, useState } from 'react'
import appwriteService from "../appwrite/config_service";
import { Container, PostCard } from '../components'
import { PostDocument } from '../types/Types';
import { Models } from 'appwrite';

function Home() {
    const [posts, setPosts] = useState<PostDocument[]>([])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await appwriteService.getPosts([]);

                if (response) {
                    // Transform the response to match the PostDocument structure
                    const transformedPosts = response.documents.map((post: Models.Document) => ({
                        ...post,
                        title: post.title,
                        content: post.content,
                        featuredImage: post.featuredImage,
                    })) as PostDocument[];

                    setPosts(transformedPosts);
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, [])

    if (posts.length === 0) {
        return (
            <div className="w-full py-8 mt-4 text-center">
                <Container>
                    <div className="flex flex-wrap">
                        <div className="p-2 w-full">
                            <h1 className="text-2xl font-bold hover:text-gray-500">
                                Login to read posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
    return (
        <div className='w-full py-8'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    )
}

export default Home