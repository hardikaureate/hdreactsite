import './App.css';
import './animate.css'
import Homebanner from './components/Homebanner';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Portfolio from './pages/Portfolio';
import About from './pages/About';
import Contact from './pages/Contact';
import AllPosts from './components/AllPosts';
import BlogDetailsPage from './components/BlogDetailsPage';
import CategoryPost from './components/CategoryPost';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio />
        </Route>
        <Route path="/about" exact>
          <About />
        </Route>
        <Route path="/contact" exact>
          <Contact />
        </Route>
        <Route path="/post/:slug" exact>
          <BlogDetailsPage />
        </Route>
        {/* <Route path="/category/:slug" exact>
          <CategoryPost />
        </Route> */}
        <Route path="/post/" exact>
          <AllPosts />
        </Route>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
