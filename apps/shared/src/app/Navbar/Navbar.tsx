import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import Image1 from '../../assets/images/carousel-1.jpg';
import Image2 from '../../assets/images/carousel-2.jpg';
import { ICommon } from '@acme/shared-types';
import { useLocation } from 'react-router-dom';
/* eslint-disable-next-line */
export interface NavbarProps extends ICommon {}

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export function Navbar(props: NavbarProps) {
  const { navigate } = props
  const location = window.location
  return (
    <div className="max-w-none container mb-5">
      <div className="grid grid-cols-12 gap-4 border-top xl:px-12">
        <div className="lg:col-span-3 hidden lg:block">
          <a
            className="btn shadow-none !flex items-center justify-between !bg-primary text-white w-full"
            style={{ height: 65, marginTop: -1, padding: '0 30px' }}
          >
            <h6 className="m-0 text-black">Categories</h6>
            {/* <FontAwesomeIcon icon={faAngleDown} className="text-black" /> */}
          </a>
          <nav className="items-start p-0 border border-t-0 border-b-0">
            <div
              className="flex flex-col pl-0 mb-0 w-100 overflow-hidden"
              style={{ height: 410 }}
            >
              <a href="#" className="px-8 py-2 border-b border-stone/10">
                Dresses
                {/* <FontAwesomeIcon
                  icon={faAngleDown}
                  className="float-right mt-1"
                /> */}
              </a>
              <a href="" className="px-8 py-2 border-b border-stone/10">
                Shirts
              </a>
              <a href="" className="px-8 py-2 border-b border-stone/10">
                Jeans
              </a>
              <a href="" className="px-8 py-2 border-b border-stone/10">
                Swimwear
              </a>
              <a href="" className="px-8 py-2 border-b border-stone/10">
                Sleepwear
              </a>
              <a href="" className="px-8 py-2 border-b border-stone/10">
                Sportswear
              </a>
              <a href="" className="px-8 py-2 border-b border-stone/10">
                Jumpsuits
              </a>
              <a href="" className="px-8 py-2 border-b border-stone/10">
                Blazers
              </a>
              <a href="" className="px-8 py-2 border-b border-stone/10">
                Jackets
              </a>
              <a href="" className="px-8 py-2">
                Shoes
              </a>
            </div>
          </nav>
        </div>
        <div className="lg:col-span-9">
          <nav className="bg-white py-4 lg:py-0 px-0">
            <div className="flex content-between">
              <div className="mr-auto py-0 flex flex-row">
                <a onClick={() => navigate('/')} className={`px-5 py-2.5 cursor-pointer ${location.pathname === '/' ? 'text-primary' : ''}`}>
                  Home
                </a>
                {/* <a href="shop.html" className="px-5 py-2.5 cursor-pointer">
                  Shop
                </a> */}
                {/* <a onClick={() => navigate('/shop/1')} className={`px-5 py-2.5 cursor-pointer ${location.pathname.includes('shop') ? 'text-primary' : ''}`}>
                  Shop Detail
                </a> */}
                <a onClick={() => navigate('/cart')} className={`px-5 py-2.5 cursor-pointer ${location.pathname === '/cart' ? 'text-primary' : ''}`}>
                  Shopping Cart
                </a>
                {/* <a onClick={() => navigate('/checkout')} className={`px-5 py-2.5 ${location.pathname === '/checkout' ? 'text-primary' : ''}`}>
                  Checkout
                </a> */}
                {/* <a onClick={() => navigate('/checkout')} href="contact.html" className="px-5 py-2.5">
                  Contact
                </a> */}
              </div>
              {/* <div className="flex flex-row ml-auto py-0">
                <a onClick={() => navigate('/login')} className="px-5 py-2.5">
                  Login
                </a>
                <a onClick={() => navigate('/register')} className="px-5 py-2.5">
                  Register
                </a>
              </div> */}
            </div>
          </nav>
          <div>
            <Slider {...settings}>
              <div style={{ height: 410 }}>
                <div
                  className="flex items-center content-center"
                  style={{ backgroundSize: '100%', height: 431, backgroundRepeat: 'no-repeat', backgroundImage: `url(${Image1})` }}
                >
                  <div className="p-3 text-center flex flex-col items-center justify-center w-full">
                    <h4 className="text-white uppercase font-medium mb-3">
                      10% Off Your First Order
                    </h4>
                    <h3 className="text-white font-semibold mb-4">
                      Fashionable Dress
                    </h3>
                    <a href="" className="btn btn-light py-2 px-3">
                      Shop Now
                    </a>
                  </div>
                </div>
                </div>
                <div style={{ height: 410 }}>
                <div
                  className="flex items-center content-center"
                  style={{ backgroundSize: '100%', height: 400, backgroundRepeat: 'no-repeat', backgroundImage: `url(${Image2})` }}
                >
                  <div className="p-3 text-center flex flex-col items-center justify-center w-full">
                    <h4 className="text-white uppercase font-medium mb-3">
                      10% Off Your First Order
                    </h4>
                    <h3 className="text-white font-semibold mb-4">
                    Reasonable Price
                    </h3>
                    <a href="" className="btn btn-light py-2 px-3">
                      Shop Now
                    </a>
                  </div>
                </div>
                </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
