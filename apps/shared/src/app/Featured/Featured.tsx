import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCheck,
  faExchangeAlt,
  faPhoneVolume,
  faShippingFast,
} from '@fortawesome/free-solid-svg-icons';

/* eslint-disable-next-line */
export interface FeaturedProps {}

export function Featured(props: FeaturedProps) {
  return (
    <div className="max-w-none container pt-5">
      <div className="grid grid-cols-12 gap-4 xl:px-12 pb-4">
        <div className="lg:col-span-3 md:col-span-6 sm:col-span-12 pb-1">
          <div className="flex items-center p-8 border mb-4">
            <FontAwesomeIcon icon={faCheck} className="text-primary m-0 mr-3" />
            <h5 className="font-weight-semi-bold m-0">Quality Product</h5>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6 sm:col-span-12 pb-1">
          <div className="flex items-center p-8 border mb-4">
            <FontAwesomeIcon
              icon={faShippingFast}
              className="text-primary m-0 mr-3"
            />
            <h5 className="font-weight-semi-bold m-0">Free Shipping</h5>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6 sm:col-span-12 pb-1">
          <div className="flex items-center p-8 border mb-4">
            <FontAwesomeIcon
              icon={faExchangeAlt}
              className="text-primary m-0 mr-3"
            />
            <h5 className="font-weight-semi-bold m-0">14-Day Return</h5>
          </div>
        </div>
        <div className="lg:col-span-3 md:col-span-6 sm:col-span-12 pb-1">
          <div className="flex items-center p-8 border mb-4">
            <FontAwesomeIcon
              icon={faPhoneVolume}
              className="text-primary m-0 mr-3"
            />
            <h5 className="font-weight-semi-bold m-0">24/7 Support</h5>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Featured;
