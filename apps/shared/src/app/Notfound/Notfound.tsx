import { ICommon } from '@acme/shared-types';
import styles from './Notfound.module.scss';

/* eslint-disable-next-line */
export interface NotfoundProps extends ICommon {}

export function Notfound(props: NotfoundProps) {
  const { navigate } = props;
  return (
    <div className="text-center flex-col flex items-center justify-center py-32 px-3">
      <h1 className='block mb-5'>Page not found</h1>
      <button className="btn btn-primary" onClick={() => navigate('/')}>Back to Homepage</button>
    </div>
  );
}

export default Notfound;
