import {Link} from "react-router-dom";

import {useAppSelector} from "shared/hooks/reduxHooks";

import {getPosts} from "../../model/getPosts";

export const PostsList = () => {
  const posts = useAppSelector(getPosts);

  const renderPosts = posts.map(post => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <Link to={`/posts/${post.id}`}>View Post</Link>
    </article>
  ));

  return (
    <section>
      <h2>Posts</h2>

      {renderPosts}
    </section>
  );
};
