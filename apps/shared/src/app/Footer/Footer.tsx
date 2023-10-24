import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import imgPayment from '../../assets/images/payments.png';
import {
  faAngleRight,
  faEnvelope,
  faMapMarked,
  faPhoneAlt,
} from '@fortawesome/free-solid-svg-icons';
/* eslint-disable-next-line */
export interface FooterProps {}

export function Footer(props: FooterProps) {
  return (
    <div className="container max-w-none bg-secondary text-dark mt-12 pt-12">
      <div className="grid grid-cols-12 xl:px-12 pt-12">
        <div className="lg:col-span-4 md:col-span-12 mb-12 pr-4 xl:pr-12">
          <a href="" className="no-underline">
            <h1 className="mb-4 font-semibold">
              <span className="text-primary font-bold border border-white px-3 mr-1">
                E
              </span>
              Shopper
            </h1>
          </a>
          <p>
            Dolore erat dolor sit lorem vero amet. Sed sit lorem magna, ipsum no
            sit erat lorem et magna ipsum dolore amet erat.
          </p>
          <p className="mb-2">
            <FontAwesomeIcon icon={faMapMarked} className="text-primary mr-3" />
            123 Street, New York, USA
          </p>
          <p className="mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="text-primary mr-3" />
            info@example.com
          </p>
          <p className="mb-0">
            <FontAwesomeIcon icon={faPhoneAlt} className="text-primary mr-3" />
            +012 345 67890
          </p>
        </div>
        <div className="lg:col-span-8 md:col-span-12">
          <div className="grid grid-cols-3">
            <div className="mb-5">
              <h5 className="font-bold text-dark mb-4">Quick Links</h5>
              <div className="flex flex-col justify-start">
                <a className="text-dark mb-2" href="index.html">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="mr-2"
                  ></FontAwesomeIcon>
                  Home
                </a>
                <a className="text-dark mb-2" href="shop.html">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="mr-2"
                  ></FontAwesomeIcon>
                  Our Shop
                </a>
                <a className="text-dark mb-2" href="detail.html">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="mr-2"
                  ></FontAwesomeIcon>
                  Shop Detail
                </a>
                <a className="text-dark mb-2" href="cart.html">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="mr-2"
                  ></FontAwesomeIcon>
                  Shopping Cart
                </a>
                <a className="text-dark mb-2" href="checkout.html">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="mr-2"
                  ></FontAwesomeIcon>
                  Checkout
                </a>
                <a className="text-dark" href="contact.html">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="mr-2"
                  ></FontAwesomeIcon>
                  Contact Us
                </a>
              </div>
            </div>
            <div className="mb-5">
              <h5 className="font-bold text-dark mb-4">Quick Links</h5>
              <div className="flex flex-col justify-start">
                <a className="text-dark mb-2" href="index.html">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="mr-2"
                  ></FontAwesomeIcon>
                  Home
                </a>
                <a className="text-dark mb-2" href="shop.html">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="mr-2"
                  ></FontAwesomeIcon>
                  Our Shop
                </a>
                <a className="text-dark mb-2" href="detail.html">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="mr-2"
                  ></FontAwesomeIcon>
                  Shop Detail
                </a>
                <a className="text-dark mb-2" href="cart.html">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="mr-2"
                  ></FontAwesomeIcon>
                  Shopping Cart
                </a>
                <a className="text-dark mb-2" href="checkout.html">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="mr-2"
                  ></FontAwesomeIcon>
                  Checkout
                </a>
                <a className="text-dark" href="contact.html">
                  <FontAwesomeIcon
                    icon={faAngleRight}
                    className="mr-2"
                  ></FontAwesomeIcon>
                  Contact Us
                </a>
              </div>
            </div>
            <div className="mb-5">
              <h5 className="font-bold text-dark mb-4">Newsletter</h5>
              <form action="">
                <div className="form-group">
                  <input
                    type="text"
                    className="form-control border-0 !py-6"
                    placeholder="Your Name"
                  />
                </div>
                <div className="form-group">
                  <input
                    type="email"
                    className="form-control border-0 !py-6"
                    placeholder="Your Email"
                  />
                </div>
                <div>
                  <button
                    className="btn btn-primary w-full border-0 !py-4"
                    type="submit"
                  >
                    Subscribe Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 border-t border-light xl:mx-12 py-5">
        <div className="md:col-span-6 xl:px-0">
          <p className="md:mb-0 text-center md:text-left text-dark">
            &copy;{' '}
            <a className="text-dark font-semibold" href="#">
              Your Site Name
            </a>
            . All Rights Reserved. Designed by{' '}
            <a className="text-dark font-semibold" href="https://htmlcodex.com">
              HTML Codex
            </a>
            <br />
            Distributed By{' '}
            <a href="https://themewagon.com" className='text-primary' target="_blank" rel="noreferrer">
              ThemeWagon
            </a>
          </p>
        </div>
        <div className="md:col-span-6 xl:px-0 text-center md:text-right">
          <img className="img-fluid ml-auto" src={imgPayment} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
