import React from 'react';
import Link from 'next/link'
import styles from './post.module.css'
const Post = ({ item }) => {
    let { id, title, body } = item
    return (<li key={id} className={styles.listItem}>
        <h3>
            <Link href={`/posts/[id]`} as={`/posts/${id}`}>
                <a className="link">{title}</a>
            </Link>
        </h3>
        <p>{body}</p>
    </li>);
}

export default Post;