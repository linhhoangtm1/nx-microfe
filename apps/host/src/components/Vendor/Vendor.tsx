import Slider from 'react-slick';
/* eslint-disable-next-line */
export interface VendorProps {}
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 6,
  slidesToScroll: 4,
};
export function Vendor(props: VendorProps) {
  return (
    <div className="container max-w-none py-5">
      <div className="xl:px-5">
        <Slider {...settings}>
          <div className=" m-4">
            <div className="flex items-center justify-center border p-4  m-4">
              <img src={'http://localhost:4203/assets/images/vendor-1.jpg'} alt="" />
            </div>
          </div>
          <div className=" m-4">
            <div className="flex items-center justify-center border p-4 m-4">
              <img src={'http://localhost:4203/assets/images/vendor-2.jpg'} alt="" />
            </div>
          </div>
          <div className=" m-4">
            <div className="flex items-center justify-center border p-4 m-4">
              <img src={'http://localhost:4203/assets/images/vendor-3.jpg'} alt="" />
            </div>
          </div>
          <div className=" m-4">
            <div className="flex items-center justify-center border p-4 m-4">
              <img src={'http://localhost:4203/assets/images/vendor-4.jpg'} alt="" />
            </div>
          </div>
          <div className=" m-4">
            <div className="flex items-center justify-center border p-4 m-4">
              <img src={'http://localhost:4203/assets/images/vendor-5.jpg'} alt="" />
            </div>
          </div>
          <div className=" m-4">
            <div className="flex items-center justify-center border p-4 m-4">
              <img src={'http://localhost:4203/assets/images/vendor-6.jpg'} alt="" />
            </div>
          </div>
          <div className=" m-4">
            <div className="flex items-center justify-center border p-4 m-4">
              <img src={'http://localhost:4203/assets/images/vendor-7.jpg'} alt="" />
            </div>
          </div>
          <div className=" m-4">
            <div className="flex items-center justify-center border p-4 m-4">
              <img src={'http://localhost:4203/assets/images/vendor-8.jpg'} alt="" />
            </div>
          </div>
        </Slider>
      </div>
    </div>
  );
}

export default Vendor;
