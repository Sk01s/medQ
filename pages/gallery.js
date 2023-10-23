import React from 'react';
import Lightbox from 'react-18-image-lightbox';
import PageBanner from '../components/Common/PageBanner';
import Link from 'next/link';
import FacilityStyleOne from '../components/Common/FacilityStyleOne';

const images = [
    ('img/gallery/gallery-img1.jpg'),
    ('img/gallery/gallery-img2.jpg'),
    ('img/gallery/gallery-img3.jpg'),
    ('img/gallery/gallery-img4.jpg'),
    ('img/gallery/gallery-img5.jpg'),
    ('img/gallery/gallery-img6.jpg'),
    ('img/gallery/gallery-img7.jpg'),
    ('img/gallery/gallery-img8.jpg'),
    ('img/gallery/gallery-img9.jpg'),
];

const Gallery = () => {
    const [photoIndex, setPhotoIndex] = React.useState(0);
    const [isOpenImage, setIsOpenImage] = React.useState(false);

    return (
        <>
            <PageBanner
                pageTitle="Gallery" 
                homePageText="Home" 
                homePageUrl="/" 
                activePageText="Gallery" 
            />

            <section className="gallery-area pt-70 pb-40">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-4 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(0);}}
                                    >
                                        <img src="/img/gallery/gallery-img1.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(1);}}
                                    >
                                        <img src="/img/gallery/gallery-img2.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(2);}}
                                    >
                                        <img src="/img/gallery/gallery-img3.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(3);}}
                                    >
                                        <img src="/img/gallery/gallery-img4.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(4);}}
                                    >
                                        <img src="/img/gallery/gallery-img5.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(5);}}
                                    >
                                        <img src="/img/gallery/gallery-img6.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(6);}}
                                    >
                                        <img src="/img/gallery/gallery-img7.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(7);}}
                                    >
                                        <img src="/img/gallery/gallery-img8.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>

                        <div className="col-lg-4 col-sm-6">
                            <div className="single-gallery-item">
                                <Link href="#popup">
                                    <a 
                                        onClick={e => {e.preventDefault(); setIsOpenImage(true); setPhotoIndex(8);}}
                                    >
                                        <img src="/img/gallery/gallery-img9.jpg" alt="image" />
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Lightbox */}
                {isOpenImage && (
                    <Lightbox
                        mainSrc={images[photoIndex]}
                        nextSrc={images[(photoIndex + 1) % images.length]}
                        prevSrc={images[(photoIndex + images.length - 1) % images.length]}
                        onCloseRequest={() => setIsOpenImage(false)}
                        onMovePrevRequest={() =>
                            setPhotoIndex((photoIndex + images.length - 1) % images.length)
                        }
                        onMoveNextRequest={() =>
                            setPhotoIndex((photoIndex + 1) % images.length)
                        }
                    />
                )}
            </section>
      
            <FacilityStyleOne />
        </>
    )
}

export default Gallery;