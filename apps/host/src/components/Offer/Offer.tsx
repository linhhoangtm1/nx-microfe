import SharedModule from 'shared/Module';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface OfferProps {}

export function Offer(props: OfferProps) {
  const navigate = useNavigate();
  return (
    <div className="container max-w-none pt-5">
      <div className="grid grid-cols-2 gap-4 xl:px-6">
        <div className="pb-5">
          <SharedModule
            component="CardOffer"
            image={'http://localhost:4203/assets/images/offer-1.png'}
            title="20% OFF THE ALL ORDER"
            content="Spring Collection"
            navigate={navigate}
          />
        </div>
        <div className="pb-5">
          <SharedModule
            component="CardOffer"
            image={'http://localhost:4203/assets/images/offer-2.png'}
            title="20% OFF THE ALL ORDER"
            content="Winter Collection"
            navigate={navigate}
          />
        </div>
      </div>
    </div>
  );
}

export default Offer;
