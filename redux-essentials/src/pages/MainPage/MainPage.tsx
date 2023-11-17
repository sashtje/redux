import {AddPostForm} from "../../entities/posts/ui/AddPostForm/AddPostForm";
import {PostsList} from "../../entities/posts/ui/PostsList/PostsList";

export const MainPage = () => {
  return (
    <>
      <AddPostForm />

      <PostsList />
    </>
  );
};
