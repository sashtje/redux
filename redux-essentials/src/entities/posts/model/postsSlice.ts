import {createSlice, nanoid, PayloadAction} from "@reduxjs/toolkit";

export interface PostsState {
  id: string;
  title: string;
  content: string;
  userId: string;
}

const initialState: PostsState[] = [
  {id: '1', title: 'First Post', content: 'Hello!', userId: '1'},
  {id: '2', title: 'Second Post', content: 'Hi all!', userId: '2'},
];

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    addPost: {
      reducer(state, action: PayloadAction<PostsState>) {
        state.push(action.payload);
      },
      prepare(title: string, content: string, userId: string): {payload: PostsState} {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            userId,
          }
        }
      }
    },
    updatePost: (state, action: PayloadAction<PostsState>) => {
      const {id, title, content} = action.payload;
      const existingPost = state.find(post => post.id === id);

      if (existingPost) {
        existingPost.title = title;
        existingPost.content = content;
      }
    }
  }
});

export const { addPost, updatePost } = postsSlice.actions;
export const postsReducer = postsSlice.reducer;

