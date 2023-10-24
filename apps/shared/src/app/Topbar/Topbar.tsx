import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTwitter,
  faFacebookF,
  faLinkedinIn,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons';
import {
  faMagnifyingGlass,
  faShoppingBag,
} from '@fortawesome/free-solid-svg-icons';
import { ICommon } from '@acme/shared-types';
import { useEffect, useState } from 'react';
import { getLocalStorage } from '../../utils/localStorage';

/* eslint-disable-next-line */
export interface TopbarProps extends ICommon {}

export function Topbar(props: TopbarProps) {
  const { navigate } = props;
  const [cartQuantity, setCart] = useState(0);

  useEffect(() => {
    const quantityFromLocal = getLocalStorage('cart') || []
    setCart(quantityFromLocal.length)

    document.body.addEventListener(
      'change-cart',
      (e: any) => {
        setCart((prevState) => e.detail ? prevState + 1 : prevState - 1);
      },
      true
    );
  }, []);


  return (
    <div className="max-w-none container">
      <div className="-mx-4 gap-4 grid grid-cols-2 py-2 xl:px-12 bg-secondary">
        <div className="px-4 hidden lg:block">
          <div className="inline-flex items-center">
            <div className="text-dark" onClick={() => navigate('/')}>
              FAQs
            </div>
            <span className="text-muted px-2">|</span>
            <div className="text-dark" onClick={() => navigate('/')}>
              Help
            </div>
            <span className="text-muted px-2">|</span>
            <div className="text-dark" onClick={() => navigate('/')}>
              Support
            </div>
          </div>
        </div>
        <div className="px-4 text-center lg:text-right">
          <div className="inline-flex items-center">
            <div className="text-dark px-2" onClick={() => navigate('/')}>
              <FontAwesomeIcon icon={faFacebookF} />
            </div>
            <div className="text-dark px-2" onClick={() => navigate('/')}>
              <FontAwesomeIcon icon={faTwitter} />
            </div>
            <div className="text-dark px-2" onClick={() => navigate('/')}>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </div>
            <div className="text-dark px-2" onClick={() => navigate('/')}>
              <FontAwesomeIcon icon={faInstagram} />
            </div>
            <div className="text-dark px-2" onClick={() => navigate('/')}>
              <FontAwesomeIcon icon={faYoutube} />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-12 items-center py-4 xl:px-12">
        <div className="lg:col-span-3 hidden lg:block">
          <div className="no-underline cursor-pointer" onClick={() => navigate('/')}>
            <h1 className="m-0 display-5 font-semibold">
              <span className="text-primary font-bold border px-4 mr-1">E</span>
              Shopper
            </h1>
          </div>
        </div>
        <div className="lg:col-span-6 text-left">
          <form action="">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search for products"
              />
              <div className="input-group-append">
                <span className="input-group-text bg-transparent">
                  <FontAwesomeIcon
                    icon={faMagnifyingGlass}
                    className="text-primary"
                  />
                </span>
              </div>
            </div>
          </form>
        </div>
        <div className="lg:col-span-3 col-span-6 text-right">
          {/* <button className="btn border mr-1">
            <FontAwesomeIcon icon={faHeart} className="text-primary" />
            <span className="badge">0</span>
          </button> */}
          <button className="btn border" onClick={() => navigate('/cart')}>
            <FontAwesomeIcon icon={faShoppingBag} className="text-primary" />
            <span className="badge">{cartQuantity}</span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
