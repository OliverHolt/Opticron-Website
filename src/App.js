import Articles from "./components/Articles";
import Categories from "./components/Categories";
import Footer from "./components/Footer";
import Header from "./components/Header";
import { Slideshow, SlideshowItem } from "./components/SlideShow";
import SpecialOffers from "./components/SpecialOffers";

function App() {
  return (
    <>
      <Header />
      <Slideshow width={100} height={100}>
        <SlideshowItem>
          <Photo1 />
        </SlideshowItem>
        <SlideshowItem>
          <Photo2 />
        </SlideshowItem>
        <SlideshowItem>
          <Photo3 />
        </SlideshowItem>
      </Slideshow>
      <Articles />
      <SpecialOffers />
      <Categories />
      <Footer />
    </>
  );
}
function Photo1() {
  return (
    <div
      style={{
        display: "inline-block",
        width: "100vw",
        height: "40vh",
        backgroundImage:
          "url(https://theoutdoorsy.com/wp-content/uploads/2014/10/the-Outdoorsy.jpg)",
      }}
    ></div>
  );
}

function Photo2() {
  return (
    <div
      style={{
        display: "inline-block",
        width: "100vw",
        height: "40vh",
        backgroundImage:
          "url(https://rare-gallery.com/uploads/posts/2001514-forest-colorful-beautiful-lake-tree-splendor-color-nature-mirror-outdoor-landscape.jpg)",
      }}
    ></div>
  );
}

function Photo3() {
  return (
    <div
      style={{
        display: "inline-block",
        width: "100vw",
        height: "40vh",
        backgroundImage: "url(https://wallpaperaccess.com/full/622264.jpg)",
      }}
    ></div>
  );
}

export default App;
