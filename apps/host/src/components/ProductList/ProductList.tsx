import SharedModule from 'shared/Module';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import fetchData from '../../services/API';
import { IProduct } from '@acme/shared-types';

/* eslint-disable-next-line */
export interface ProductListProps {}

export function ProductList(props: ProductListProps) {
  const navigate = useNavigate();
  const [list, setList] = useState<IProduct[]>([]);

  useEffect(() => {
    (async () => {
      const response = await fetchData("http://localhost:4203/assets/mockData/products.json");
      const data = await response.json();
      setList(data);
    })();
  }, []);

  return (
    <div className="container max-w-none pt-5">
      <div className="text-center mb-4">
        <h2 className="section-title px-5">
          <span className="px-2">Trandy Products</span>
        </h2>
      </div>
      <div className="grid gap-4 grid-cols-12 xl:px-5 pb-3">
        {list.map((el) => (
          <div
            key={el.id}
            className="lg:col-span-3 md:col-span-6 sm:col-span-12 pb-1"
          >
            <SharedModule
              component="CardProduct"
              {...el}
              image={el.image || ''}
              title={el.name}
              navigate={navigate}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
