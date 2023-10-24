import Slider from 'react-slick';
import SharedModule from 'shared/Module';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';
import {
  faStarHalf,
  faMinus,
  faPlus,
  faShoppingCart,
  faStar as faStarFull,
} from '@fortawesome/free-solid-svg-icons';
import {
  faFacebookF,
  faTwitter,
  faLinkedinIn,
  faPinterest,
} from '@fortawesome/free-brands-svg-icons';
import { useEffect, useState } from 'react';
import { Settings } from 'react-slick';
import { ICommon, IProduct } from '@acme/shared-types';
import fetchData from '../../services/API';
import { setCart } from 'shared/Utils';

/* eslint-disable-next-line */
export interface ShopDetailProps extends ICommon {}
const settings: Settings = {
  dots: true,
  arrows: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};
export function ShopDetail(props: ShopDetailProps) {
  const { navigate } = props;
  const pathname = window.location.pathname;
  const [size, setSize] = useState('');
  const [color, setColor] = useState('');
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState<Partial<IProduct>>({});
  const [products, setProducts] = useState<IProduct[]>([]);

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    (async () => {
      const response = await fetchData(
        'http://localhost:4203/assets/mockData/products.json'
      );
      const dataList = await response.json();
      const id = pathname.split('/')?.[2];
      setData(dataList.find((el: IProduct) => el.id === Number(id)));
      setProducts(dataList.slice(0, 4));
    })();
  }, [pathname]);

  const addToCart = () => {
    if (!size || !color) {
      alert('please choose size and colors');
    } else {
      const dataEvent = new CustomEvent('change-cart', {
        detail: true,
      });
      document.body.dispatchEvent(dataEvent);
      setCart({
        ...data,
        total: quantity * (data.priceNew ?? 0),
        size,
        color,
        quantity,
      });
    }
  };

  return (
    <div>
      <SharedModule component="PageHeader" title="Shop Detail" />
      <div className="container max-w-none">
        <div className="grid grid-cols-12 gap-4 xl:px-12 py-12">
          <div className="lg:col-span-5 pb-12">
            <Slider {...settings}>
              <img
                className="w-100 h-100 border"
                src={data.image}
                alt="Image"
              />
              <img
                className="w-100 h-100 border"
                src={'http://localhost:4203/assets/images/product-2.jpg'}
                alt="Image"
              />
              <img
                className="w-100 h-100 border"
                src={'http://localhost:4203/assets/images/product-3.jpg'}
                alt="Image"
              />
              <img
                className="w-100 h-100 border"
                src={'http://localhost:4203/assets/images/product-4.jpg'}
                alt="Image"
              />
            </Slider>
          </div>

          <div className="lg:col-span-7 pb-12">
            <h3 className="font-semibold">{data.name}</h3>
            <div className="flex mb-3">
              <div className="text-primary mr-2">
                {[...Array(data.rate || 0).keys()].map(() => (
                  <FontAwesomeIcon icon={faStarFull} className="text-sm" />
                ))}
                {/* <FontAwesomeIcon icon={faStarHalf} className="text-sm" /> */}
                {/* <FontAwesomeIcon icon={faStarEmpty} className="text-sm" /> */}
              </div>
              <small className="pt-1">({data.reviews} Review(s))</small>
            </div>
            <h3 className="font-semibold mb-6">${data.priceNew}</h3>
            <p className="mb-6">
              Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat
              diam stet sit clita ea. Sanc invidunt ipsum et, labore clita lorem
              magna lorem ut. Erat lorem duo dolor no sea nonumy. Accus labore
              stet, est lorem sit diam sea et justo, amet at lorem et eirmod
              ipsum diam et rebum kasd rebum.
            </p>
            <div className="flex mb-3">
              <p className="text-dark font-medium mb-0 mr-3">Sizes:</p>
              <form>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-1"
                    name="size"
                    value="XS"
                    onChange={({ target }) => setSize(target.value)}
                  />
                  <label className="custom-control-label" htmlFor="size-1">
                    XS
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-2"
                    value="S"
                    name="size"
                    onChange={({ target }) => setSize(target.value)}
                  />
                  <label className="custom-control-label" htmlFor="size-2">
                    S
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-3"
                    value="M"
                    name="size"
                    onChange={({ target }) => setSize(target.value)}
                  />
                  <label className="custom-control-label" htmlFor="size-3">
                    M
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-4"
                    value="L"
                    name="size"
                    onChange={({ target }) => setSize(target.value)}
                  />
                  <label className="custom-control-label" htmlFor="size-4">
                    L
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="size-5"
                    value="XL"
                    name="size"
                    onChange={({ target }) => setSize(target.value)}
                  />
                  <label className="custom-control-label" htmlFor="size-5">
                    XL
                  </label>
                </div>
              </form>
            </div>
            <div className="flex mb-6">
              <p className="text-dark font-medium mb-0 mr-3">Colors:</p>
              <form>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="color-1"
                    value="Black"
                    name="color"
                    onChange={({ target }) => setColor(target.value)}
                  />
                  <label className="custom-control-label" htmlFor="color-1">
                    Black
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    value="White"
                    id="color-2"
                    name="color"
                    onChange={({ target }) => setColor(target.value)}
                  />
                  <label className="custom-control-label" htmlFor="color-2">
                    White
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="color-3"
                    value="Red"
                    name="color"
                    onChange={({ target }) => setColor(target.value)}
                  />
                  <label className="custom-control-label" htmlFor="color-3">
                    Red
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="color-4"
                    value="Blue"
                    name="color"
                    onChange={({ target }) => setColor(target.value)}
                  />
                  <label className="custom-control-label" htmlFor="color-4">
                    Blue
                  </label>
                </div>
                <div className="custom-control custom-radio custom-control-inline">
                  <input
                    type="radio"
                    className="custom-control-input"
                    id="color-5"
                    name="color"
                    value="Green"
                    onChange={({ target }) => setColor(target.value)}
                  />
                  <label className="custom-control-label" htmlFor="color-5">
                    Green
                  </label>
                </div>
              </form>
            </div>
            <div className="flex items-center mb-6 pt-2">
              <div className="input-group quantity mr-3" style={{ width: 130 }}>
                <div className="input-group-btn">
                  <button
                    className="btn btn-primary btn-minus"
                    onClick={() =>
                      setQuantity((prevState) =>
                        prevState > 1 ? prevState - 1 : prevState
                      )
                    }
                  >
                    <FontAwesomeIcon icon={faMinus} />
                  </button>
                </div>
                <input
                  type="text"
                  className="form-control bg-secondary text-center"
                  value={quantity}
                />
                <div className="input-group-btn">
                  <button
                    className="btn btn-primary btn-plus"
                    onClick={() => setQuantity((prevState) => prevState + 1)}
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
              <button className="btn btn-primary px-3" onClick={addToCart}>
                <FontAwesomeIcon icon={faShoppingCart} className="mr-1" />
                Add To Cart
              </button>
            </div>
            <div className="flex pt-2">
              <p className="text-dark font-medium mb-0 mr-2">Share on:</p>
              <div className="inline-flex">
                <a className="text-dark px-2" href="">
                  <FontAwesomeIcon icon={faFacebookF} />
                </a>
                <a className="text-dark px-2" href="">
                  <FontAwesomeIcon icon={faTwitter} />
                </a>
                <a className="text-dark px-2" href="">
                  <FontAwesomeIcon icon={faLinkedinIn} />
                </a>
                <a className="text-dark px-2" href="">
                  <FontAwesomeIcon icon={faPinterest} />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="grid xl:px-12">
          <div>
            <SharedModule
              component="Tab"
              tabs={[
                {
                  key: 1,
                  title: 'Description',
                  content: (
                    <div>
                      <h4 className="mb-3">Product Description</h4>
                      <p>
                        Eos no lorem eirmod diam diam, eos elitr et gubergren
                        diam sea. Consetetur vero aliquyam invidunt duo dolores
                        et duo sit. Vero diam ea vero et dolore rebum, dolor
                        rebum eirmod consetetur invidunt sed sed et, lorem duo
                        et eos elitr, sadipscing kasd ipsum rebum diam. Dolore
                        diam stet rebum sed tempor kasd eirmod. Takimata kasd
                        ipsum accusam sadipscing, eos dolores sit no ut diam
                        consetetur duo justo est, sit sanctus diam tempor
                        aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd
                        eos consetetur at sit rebum, diam kasd invidunt tempor
                        lorem, ipsum lorem elitr sanctus eirmod takimata dolor
                        ea invidunt.
                      </p>
                      <p>
                        Dolore magna est eirmod sanctus dolor, amet diam et
                        eirmod et ipsum. Amet dolore tempor consetetur sed lorem
                        dolor sit lorem tempor. Gubergren amet amet labore
                        sadipscing clita clita diam clita. Sea amet et sed ipsum
                        lorem elitr et, amet et labore voluptua sit rebum. Ea
                        erat sed et diam takimata sed justo. Magna takimata
                        justo et amet magna et.
                      </p>
                    </div>
                  ),
                },
                {
                  key: 2,
                  title: 'Information',
                  content: (
                    <div>
                      <h4 className="mb-3">Additional Information</h4>
                      <p>
                        Eos no lorem eirmod diam diam, eos elitr et gubergren
                        diam sea. Consetetur vero aliquyam invidunt duo dolores
                        et duo sit. Vero diam ea vero et dolore rebum, dolor
                        rebum eirmod consetetur invidunt sed sed et, lorem duo
                        et eos elitr, sadipscing kasd ipsum rebum diam. Dolore
                        diam stet rebum sed tempor kasd eirmod. Takimata kasd
                        ipsum accusam sadipscing, eos dolores sit no ut diam
                        consetetur duo justo est, sit sanctus diam tempor
                        aliquyam eirmod nonumy rebum dolor accusam, ipsum kasd
                        eos consetetur at sit rebum, diam kasd invidunt tempor
                        lorem, ipsum lorem elitr sanctus eirmod takimata dolor
                        ea invidunt.
                      </p>
                      <div className="grid grid-cols-12 gap-4">
                        <div className="md:col-span-6">
                          <ul className="flex flex-col pl-0 mb-0">
                            <li className="border-b relative block px-3 py-5">
                              Sit erat duo lorem duo ea consetetur, et eirmod
                              takimata.
                            </li>
                            <li className="border-b relative block px-3 py-5">
                              Amet kasd gubergren sit sanctus et lorem eos
                              sadipscing at.
                            </li>
                            <li className="border-b relative block px-3 py-5">
                              Duo amet accusam eirmod nonumy stet et et stet
                              eirmod.
                            </li>
                            <li className="border-b relative block px-3 py-5">
                              Takimata ea clita labore amet ipsum erat justo
                              voluptua. Nonumy.
                            </li>
                          </ul>
                        </div>
                        <div className="md:col-span-6">
                          <ul className="flex flex-col pl-0 mb-0">
                            <li className="border-b relative block px-3 py-5">
                              Sit erat duo lorem duo ea consetetur, et eirmod
                              takimata.
                            </li>
                            <li className="border-b relative block px-3 py-5">
                              Amet kasd gubergren sit sanctus et lorem eos
                              sadipscing at.
                            </li>
                            <li className="border-b relative block px-3 py-5">
                              Duo amet accusam eirmod nonumy stet et et stet
                              eirmod.
                            </li>
                            <li className="border-b relative block px-3 py-5">
                              Takimata ea clita labore amet ipsum erat justo
                              voluptua. Nonumy.
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ),
                },
                {
                  key: 3,
                  title: 'Reviews (0)',
                  content: (
                    <div className="grid grid-cols-12 gap-4">
                      <div className="md:col-span-6">
                        <h4 className="mb-6">
                          1 review for "Colorful Stylish Shirt"
                        </h4>
                        <div className="flex items-start mb-6">
                          <img
                            src='http://localhost:4203/assets/images/user.jpg'
                            alt="Image"
                            className="img-fluid mr-3 mt-1"
                            style={{ width: 45 }}
                          />
                          <div className="flex-1">
                            <h6>
                              John Doe
                              <small>
                                {' '}
                                - <i>01 Jan 2045</i>
                              </small>
                            </h6>
                            <div className="text-primary mb-2">
                              <FontAwesomeIcon icon={faStarFull} />
                              <FontAwesomeIcon icon={faStarFull} />
                              <FontAwesomeIcon icon={faStarFull} />
                              <FontAwesomeIcon icon={faStarHalf} />
                              <FontAwesomeIcon icon={faStarEmpty} />
                            </div>
                            <p>
                              Diam amet duo labore stet elitr ea clita ipsum,
                              tempor labore accusam ipsum et no at. Kasd diam
                              tempor rebum magna dolores sed sed eirmod ipsum.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="md:col-span-6">
                        <h4 className="mb-6">Leave a review</h4>
                        <small>
                          Your email address will not be published. Required
                          fields are marked *
                        </small>
                        <div className="d-flex my-3">
                          <p className="mb-0 mr-2">Your Rating * :</p>
                          <div className="text-primary">
                            <FontAwesomeIcon icon={faStarEmpty} />
                            <FontAwesomeIcon icon={faStarEmpty} />
                            <FontAwesomeIcon icon={faStarEmpty} />
                            <FontAwesomeIcon icon={faStarEmpty} />
                            <FontAwesomeIcon icon={faStarEmpty} />
                          </div>
                        </div>
                        <form>
                          <div className="form-group">
                            <label htmlFor="message">Your Review *</label>
                            <textarea
                              id="message"
                              cols={30}
                              rows={5}
                              className="form-control"
                            ></textarea>
                          </div>
                          <div className="form-group">
                            <label htmlFor="name">Your Name *</label>
                            <input
                              type="text"
                              className="form-control"
                              id="name"
                            />
                          </div>
                          <div className="form-group">
                            <label htmlFor="email">Your Email *</label>
                            <input
                              type="email"
                              className="form-control"
                              id="email"
                            />
                          </div>
                          <div className="form-group mb-0">
                            <input
                              type="submit"
                              value="Leave Your Review"
                              className="btn btn-primary px-3"
                            />
                          </div>
                        </form>
                      </div>
                    </div>
                  ),
                },
              ]}
            />
          </div>
        </div>
        <div className="py-12">
          <div className="text-center mb-4">
            <h2 className="section-title px-5">
              <span className="px-2">Trandy Products</span>
            </h2>
          </div>
          <div className="grid gap-4 grid-cols-12 xl:px-5 pb-3">
            {products.map((el) => (
              <div className="lg:col-span-3 md:col-span-6 sm:col-span-12 pb-1">
                <SharedModule
                  component="CardProduct"
                  {...el}
                  navigate={navigate}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShopDetail;
