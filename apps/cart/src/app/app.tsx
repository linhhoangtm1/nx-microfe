import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SharedModule from 'shared/Module';
import { faMinus, faPlus, faTimes } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import { getCart, setCart } from 'shared/Utils';
import { ICommon, IProductCart } from '@acme/shared-types';

const SHIPPING_PRICE = 10;

export function App({ navigate }: Partial<ICommon>) {
  const [products, setProducts] = useState<IProductCart[]>([]);
  const [subtotal, setSubtotal] = useState(0);
  const changeQuantity = (product: IProductCart, value: number) => {
    if (!value) return;
    let newSubtotal = subtotal - product.total;
    const newArr = products.map((el) => {
      if (el.id === product.id) {
        const quantity = value ? value : value + 1;
        const total = quantity * product.priceNew;
        newSubtotal += total;
        return { ...el, quantity, total };
      }
      return el;
    });
    setProducts(newArr);
    setSubtotal(newSubtotal);
    setCart(newArr);
  };

  const removeProduct = (product: IProductCart) => {
    const arr = products.filter((el) => el.id !== product.id);
    setSubtotal(subtotal - product.total);
    setProducts(arr);
    setCart(arr);
    const dataEvent = new CustomEvent('change-cart', {
      detail: false,
    });
    document.body.dispatchEvent(dataEvent);
  };

  useEffect(() => {
    const localProducts = getCart();
    setProducts(localProducts);
    setSubtotal(
      localProducts.reduce((a: number, b: IProductCart) => {
        a += b.total;
        return a;
      }, 0)
    );
  }, []);

  return (
    <div>
      <SharedModule component="PageHeader" title="Shopping Cart" />
      <div className="container max-w-none pt-12">
        <div className="grid grid-cols-12 gap-4 xl:px-5">
          <div className="lg:col-span-8 table-responsive mb-5">
            <table className="table table-bordered text-center mb-0">
              <thead className="bg-secondary text-dark">
                <tr>
                  <th>Products</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody className="!align-middle">
                {products.map((el, idx) => (
                  <tr key={el.id}>
                    <td className="!align-middle">
                      <img src={el.image || ''} alt="" style={{ width: 50 }} />{' '}
                      {el.name}
                    </td>
                    <td className="!align-middle">${el.priceNew}</td>
                    <td className="!align-middle">
                      <div
                        className="input-group quantity mx-auto"
                        style={{ width: 100 }}
                      >
                        <div className="input-group-btn">
                          <button
                            className="btn btn-sm btn-primary btn-minus"
                            onClick={() => changeQuantity(el, el.quantity - 1)}
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </button>
                        </div>
                        <input
                          type="text"
                          className="form-control form-control-sm bg-secondary text-center"
                          value={el.quantity}
                        />
                        <div className="input-group-btn">
                          <button
                            className="btn btn-sm btn-primary btn-plus"
                            onClick={() => changeQuantity(el, el.quantity + 1)}
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </button>
                        </div>
                      </div>
                    </td>
                    {/* <td className="!align-middle">{el.quantity}</td> */}
                    <td className="!align-middle">${el.total}</td>
                    <td className="!align-middle">
                      <button
                        className="btn btn-sm btn-primary"
                        onClick={() => removeProduct(el)}
                      >
                        <FontAwesomeIcon icon={faTimes} />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="lg:col-span-4">
            <form className="mb-5" action="">
              <div className="input-group">
                <input
                  type="text"
                  className="form-control p-4"
                  placeholder="Coupon Code"
                />
                <div className="input-group-append">
                  <button className="btn btn-primary">Apply Coupon</button>
                </div>
              </div>
            </form>
            <div className="card relative flex flex-col min-w-0 break-words mb-12 border-secondary border">
              <div className="card-header py-3 px-5 mb-0 bg-secondary border-0">
                <h4 className="font-semibold m-0">Cart Summary</h4>
              </div>
              <div className="card-body flex-1 min-h-[1px] p-5">
                <div className="flex justify-between mb-4 pt-2">
                  <h6 className="font-medium">Subtotal</h6>
                  <h6 className="font-medium">${subtotal}</h6>
                </div>
                <div className="flex justify-between">
                  <h6 className="font-medium">Shipping</h6>
                  <h6 className="font-medium">${SHIPPING_PRICE}</h6>
                </div>
              </div>
              <div className="card-footer border-t-[1px] py-3 px-5 border-secondary bg-transparent">
                <div className="flex justify-between mt-3">
                  <h5 className="font-bold">Total</h5>
                  <h5 className="font-bold">${subtotal + SHIPPING_PRICE}</h5>
                </div>
                  <button className="btn block w-full btn-primary !my-4 !py-4" onClick={() => navigate && navigate('/checkout')}>
                    Proceed To Checkout
                  </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
