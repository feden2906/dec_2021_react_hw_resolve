import { useEffect, useState } from 'react';

import { postsService } from '../../services';
import { Post } from '../Post/Post';

export const Posts = () => {
    const [posts, setPosts] = useState(null);

    useEffect(() => {
        postsService.getAllPosts().then(value => value.slice(0, 10)).then(value => setPosts(value));
    }, [])

    return (
        <div>
            {
                posts && posts.map((post) => <Post key={post.id} post={post}/>)
            }
        </div>
    );
}
