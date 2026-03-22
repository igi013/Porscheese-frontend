import banner1 from '../assets/images/carouselpic/banner1.png'
import banner2 from '../assets/images/carouselpic/banner2.png'
import banner3 from '../assets/images/carouselpic/banner3.png'

const Carousel = () => {
    return (
         <div className="container">
    
        <div id="carouselExampleAutoplaying" className="carousel slide mb-4" data-bs-ride="carousel" >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="https://nav.porsche.com/00BC524/series-assets/all/911@2x.webp" className="d-block w-100" alt="product 1" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://nav.porsche.com/00BC524/series-assets/all/718@2x.webp" className="d-block w-100" alt="product 2" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://nav.porsche.com/00BC524/series-assets/all/taycan@2x.webp" className="d-block w-100" alt="product 3" />
                    </div>
                    <div className="carousel-item">
                        <img src="https://nav.porsche.com/00BC524/series-assets/all/taycan@2x.webp" className="d-block w-100" alt="product 4" />
                    </div>
                </div>
                <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying"
                    data-bs-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
        </div>
    );
};

export default Carousel;