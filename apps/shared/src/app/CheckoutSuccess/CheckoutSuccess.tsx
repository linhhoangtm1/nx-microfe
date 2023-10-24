import { ICommon } from '@acme/shared-types';
import styles from './CheckoutSuccess.module.scss';

/* eslint-disable-next-line */
export interface CheckoutSuccessProps extends ICommon {}

export function CheckoutSuccess(props: CheckoutSuccessProps) {
  const { navigate } = props;
  return (
    <div className="text-center flex-col flex items-center justify-center py-32 px-3">
      <h1 className='block mb-5'>Checkout Successfully</h1>
      <button className="btn btn-primary" onClick={() => navigate('/')}>Back to shopping</button>
    </div>
  );
}

export default CheckoutSuccess;
