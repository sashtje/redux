import {Link, useParams} from "react-router-dom";

import {useAppSelector} from "shared/hooks/reduxHooks";
import {getPost} from "entities/posts/model/getPosts";

export const PostPage = () => {
  const { postId } = useParams<{postId?: string}>();

  const post = useAppSelector(getPost(postId));

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <article className="post">
        <h2>{post.title}</h2>

        <p className="post-content">{post.content}</p>

        <Link to={`/editPost/${post.id}`} className="button">
          Edit Post
        </Link>
      </article>
    </section>
  );
};
