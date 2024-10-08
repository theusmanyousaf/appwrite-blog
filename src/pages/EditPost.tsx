import { useEffect, useState } from 'react'
import { Container, PostForm } from '../components'
import appwriteService from "../appwrite/config_service";
import { useNavigate, useParams } from 'react-router-dom';
import { Post } from '../types/Types';

function EditPost() {
    const [post, setPost] = useState<Post>()
    const { slug } = useParams()
    const navigate = useNavigate()

    useEffect(() => {
        if (slug) {
            const fetchPost = async () => {

                const response = await appwriteService.getPost(slug)
                if (response) {
                    const transformedPost = {...response as unknown as Post}
                    setPost(transformedPost)
                } else {
                    navigate('/')
                }
            }

            fetchPost();
        }
    }, [slug, navigate])

    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
    ) : null
}

export default EditPost