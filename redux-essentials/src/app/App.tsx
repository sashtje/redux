import {BrowserRouter, Routes, Route, Navigate} from "react-router-dom";

import {Navbar} from "shared/ui/Navbar/Navbar";
import {MainPage} from "pages/MainPage/MainPage";
import {PostPage} from "pages/PostPage/PostPage";
import {EditPostForm} from "../entities/posts/ui/EditPostForm/EditPostForm";

export function App() {
  return (
    <BrowserRouter>
      <Navbar />

      <div className="App">
        <Routes>
          <Route path='/' element={<MainPage />} />
          <Route path='/posts/:postId' element={<PostPage />} />
          <Route path='/editPost/:postId' element={<EditPostForm />} />

          <Route path='*' element={<Navigate to='/' />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}
