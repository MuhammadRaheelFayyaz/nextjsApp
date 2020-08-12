import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router'
import PostComp from './post'


const Post = ({ post }) => {
    const router = useRouter()
    // const [post, setPost] = useState({})

    // useEffect(() => {
    //     let post = posts.find(({ id }) => id === id)
    //     setPost(post)
    // }, [])
    return (router.isFallback ? <div>Loading...</div> : <PostComp item={post} />);
}

export default Post;

// Post.getInitialProps = async ({ query }) => {
//     return await query
// }

// export async function getServerSideProps({ query }) {
//     let res = await fetch("http://jsonplaceholder.typicode.com/posts/" + query.id)
//     return {
//         props: {
//             post: await res.json()
//         }
//     }
// }

export async function getStaticPaths() {
    const paths = ["/posts/1", "/posts/2"]
    return { paths, fallback: true }
}
export async function getStaticProps({ query, params }) {
    let { id } = query || params
    let res = await fetch("http://jsonplaceholder.typicode.com/posts/" + id)
    return {
        props: {
            post: await res.json()
        }
    }
}