import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Layout from './components/Layout';
import Home from './pages/Home';
import Connect from './pages/Connect';
import Blog from './pages/Blog';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<Home />} />
          <Route path="projects" element={<Home />} />
          <Route path="connect" element={<Connect />} />
          <Route path="blog" element={<Blog />} />
          <Route path="blog/:slug" element={<Blog />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
