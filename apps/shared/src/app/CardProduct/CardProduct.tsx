import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styles from './card.module.scss';
import { faEye, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ICommon, IProduct, IProductCart } from '@acme/shared-types';
import { setCart } from '../../utils';

/* eslint-disable-next-line */
export interface CardProps extends ICommon, IProductCart {}

export function CardProduct(props: CardProps) {
  const { image, name, priceNew, priceOld, id, navigate } = props;
  const addToCart = () => {
    const dataEvent = new CustomEvent('change-cart', {
      detail: true,
    });
    document.body.dispatchEvent(dataEvent);
    setCart({
      ...props,
      total: props.priceNew,
      quantity: 1,
    });
  };
  return (
    <div className="card relative flex flex-col min-w-0 break-words border-0 mb-4">
      <div className="card-header product-img position-relative overflow-hidden bg-transparent border p-0">
        <img className="img-fluid w-100" src={image} alt="" />
      </div>
      <div className="card-body flex-1 border-r border-l text-center p-0 pt-4 pb-3">
        <h6 className="truncate mb-3">{name}</h6>
        <div className="flex justify-center">
          <h6>${priceNew}</h6>
          <h6 className="text-muted ml-2">
            <del>${priceOld}</del>
          </h6>
        </div>
      </div>
      <div className="cursor-pointer card-footer px-3 py-5 flex justify-between bg-white border">
        <div
          onClick={() => navigate(`/shop/${id}`)}
          className="btn text-sm text-dark p-0"
        >
          <FontAwesomeIcon icon={faEye} className="text-primary mr-1" />
          View Detail
        </div>
        <div
          className="cursor-pointer btn text-sm text-dark p-0"
          onClick={addToCart}
        >
          <FontAwesomeIcon
            icon={faShoppingCart}
            className="text-primary mr-1"
          />
          Add To Cart
        </div>
      </div>
    </div>
  );
}

export default CardProduct;
