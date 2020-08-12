import React from 'react';
import Post from './post'

const Posts = ({ posts }) => {
    console.log("Posts -> posts", posts)
    return (<div>
        <ul>
            {
                posts.map((item) => <Post item={item} />)
            }
        </ul>
    </div>
    );
}

export default Posts;

// export async function getStaticProps() {
//     const res = await fetch("http://jsonplaceholder.typicode.com/posts")
//     return {
//         props: {
//             posts: await res.json()
//         }
//     }
// }

export async function getServerSideProps() {
    const res = await fetch("http://jsonplaceholder.typicode.com/posts")
    return {
        props: {
            posts: await res.json()
        }
    }
}