import ProductCard from "../components/ProductCard";
import Carousel from "../components/Carousel";
import { Link } from 'react-router-dom';
import { useMemo } from "react";

const products = [
    {
        name: "The new Taycan.",
        price: 900000,
        rating: 5,
        image: "https://a.storyblok.com/f/322327/1720x1210/e74044c8ac/ta24q3bix0011-taycan-front.png/m/1720x1210/smart/filters:format(avif)"
    },
    {
        name: "911 Carrera.",
        price: 150000,
        rating: 5,
        image: "https://images-porsche.imgix.net/-/media/5D0BB7E042BD4C9DBEF84B5E70482520_73AA748306934B0C9CE20E32231DFCE2_CZ25W01IX0011911-carrera-front?w=704&q=45&dpr=2&auto=format"
    },
    {
        name: "Cayenne Turbo E-Hybrid.",
        price: 700000,
        rating: 5,
        image: "https://images-porsche.imgix.net/-/media/EE94DECAE29C4005967F7984342120BC_C8514960D46A48269324CD75875A5CAA_cayenne-front?w=704&q=45&dpr=2&auto=format"
    },
    {
        name: "Panamera GTS.",
        price: 600000,
        rating: 5,
        image: "https://images-porsche.imgix.net/-/media/2175383C00134D77B37BA93DEA83A1C6_9FCB4E715FCA45A2A5D96752B79B590D_045-model-technical-highlights-1600x1125_dark?w=704&q=45&dpr=2&auto=format"
    },
    {
        name: "718 Boxster.",
        price: 550000,
        rating: 5,
        image: "https://a.storyblok.com/f/322327/1720x1210/31e5771281/bx19i3bix0003-02-718-boxster-front.jpg/m/1720x1210/smart/filters:format(avif)"
    },
    {
        name: "Macan Electric.",
        price: 400000,
        rating: 5,
        image: "https://a.storyblok.com/f/322327/1720x1210/390752b83a/macan-front.png/m/1720x1210/smart/filters:format(avif)"
    }
];

const Home = () => {
    const recentlyViewed = useMemo(
      () => JSON.parse(localStorage.getItem("recentlyViewed") || "[]"),
      []
    );

    return (
        <div className='container'>
        <section className="hero-section mb-4">
          <div className="hero-content">
            <p className="hero-tag mb-2">Performance Store</p>
            <h2 className="mb-3">Your Porsche journey starts now.</h2>
            <p className="mb-4 text-light-emphasis">
              Explore iconic models engineered for precision, speed, and style.
            </p>
            <Link to="/products" className="btn btn-danger w-100 w-sm-auto">
              Explore Collection
            </Link>
          </div>
        </section>

        <Carousel />

        <div className="d-flex flex-column flex-sm-row justify-content-between align-items-stretch align-items-sm-center gap-3 mt-5 mb-4">
          <h3 className="mb-0">Featured Models</h3>
          <Link to="/products" className="btn btn-outline-primary align-self-stretch align-self-sm-auto text-center text-sm-start">
            View More Cars
          </Link>
        </div>

        <div className="row">
            {products.slice(0, 6).map((product, index) => (
                <div className="col-xl-4 col-lg-4 col-md-6 mb-4" key={index}>
                    <ProductCard product={product} />
                </div>
            ))}
        </div>

        {recentlyViewed.length > 0 && (
          <>
            <div className="d-flex justify-content-between align-items-center mt-5 mb-4">
              <h3 className="mb-0">Recently Viewed</h3>
            </div>
            <div className="row">
              {recentlyViewed.slice(0, 4).map((product) => (
                <div className="col-xl-3 col-lg-4 col-md-6 mb-4" key={product.id}>
                  <ProductCard product={product} />
                </div>
              ))}
            </div>
          </>
        )}
        </div>
    );
};

export default Home;