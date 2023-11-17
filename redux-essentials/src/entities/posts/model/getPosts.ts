import {RootState} from "app/model/store";

export const getPosts = (state: RootState) => state.posts;
export const getPost = (postId?: string) => (state: RootState) => state.posts.find(post => post.id === postId);
