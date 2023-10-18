import "./App.css";

import Navbar from "./Header";
//import Image from "./Image";
import FeaturedTutorials from "./Tutorials";
import FeaturedArticles from "./Articles";
import Footer from "./Footer";
import NewsLetter from "./NewsLetter";
function App() {
  return (
    <div className="App">
      <Navbar />
      <FeaturedTutorials />
      <FeaturedArticles />
      <NewsLetter />
      <Footer />
    </div>
  ); 
}

export default App;
