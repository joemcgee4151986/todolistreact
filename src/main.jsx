
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactDOM from "react-dom/client";
import Pages from './pages/Pages'
import Header from './pages/Header.jsx'
import Home from './pages/Home'
import About from './pages/About'
import './index.css'

export default function Index() {
    return(
      <BrowserRouter>
        <Routes>
        <Route path="/" element={<Header />}>
        <Route index element={<Home />} />
        <Route path="Pages" element={<Pages />} />
        <Route path="About" element={<About />} />
        </Route>
        </Routes>
      </BrowserRouter>
    )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index />);

