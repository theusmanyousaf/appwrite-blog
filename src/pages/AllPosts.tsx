import { useState, useEffect } from 'react'
import { Container, PostCard } from '../components'
import appwriteService from "../appwrite/config_service";
import { Models } from 'appwrite';  // Assuming you're using Appwrite's SDK
import { PostDocument } from '../types/Types';



function AllPosts() {
    // Specify the type of posts as an array of PostDocument
    const [posts, setPosts] = useState<PostDocument[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await appwriteService.getPosts([]);
                
                if (response) {
                    // Transform the response to match the PostDocument structure
                    const transformedPosts = response.documents.map((post: Models.Document) => ({
                        ...post,
                        title: post.title || 'Untitled',  // Default values if not present
                        content: post.content || 'No content',
                        featuredImage: post.featuredImage || '/path/to/default-image.jpg',  // Add your default image path
                    })) as PostDocument[];  // Cast the result to PostDocument[]

                    setPosts(transformedPosts);
                }
            } catch (error) {
                console.error("Error fetching posts:", error);
            }
        };

        fetchPosts();
    }, []);

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

export default AllPosts