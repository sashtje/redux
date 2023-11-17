import {ChangeEvent, useState} from "react";
import { useNavigate, useParams} from "react-router-dom";

import {useAppDispatch, useAppSelector} from "shared/hooks/reduxHooks";

import {getPost} from "../../model/getPosts";
import {updatePost} from "../../model/postsSlice";

export const EditPostForm = () => {
  const { postId } = useParams<{postId?: string}>();
  const post = useAppSelector(getPost(postId));

  const [title, setTitle] = useState(post?.title);
  const [content, setContent] = useState(post?.content);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>) => setTitle(e.target.value);
  const onContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => setContent(e.target.value);

  const onSavePostClicked = () => {
    if (title && content && postId) {
      dispatch(updatePost({ id: postId, title, content, userId: '1' }));
      navigate(`/posts/${postId}`);
    }
  }

  if (!post) {
    return (
      <section>
        <h2>Post not found!</h2>
      </section>
    )
  }

  return (
    <section>
      <h2>Edit Post</h2>
      <form>
        <label htmlFor="postTitle">Post Title:</label>
        <input
          type="text"
          id="postTitle"
          name="postTitle"
          placeholder="What's on your mind?"
          value={title}
          onChange={onTitleChange}
        />
        <label htmlFor="postContent">Content:</label>
        <textarea
          id="postContent"
          name="postContent"
          value={content}
          onChange={onContentChange}
        />
      </form>
      <button type="button" onClick={onSavePostClicked}>
        Save Post
      </button>
    </section>
  );
};
