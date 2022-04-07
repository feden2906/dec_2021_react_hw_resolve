export const Post = ({ post }) => {
  return (
      <div>
        <hr/>
        <div>userId: {post.userId}</div>
        <div>id: {post.id}</div>
        <div>title: {post.title}</div>
        <div>body: {post.body}</div>
        <hr/>
      </div>
  );
}
