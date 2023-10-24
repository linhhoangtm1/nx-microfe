import * as React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import Layout from './layout';
const Homepage = React.lazy(() => import('./HomePage/page'));
const Shared = React.lazy(() => import('shared/Module'));
const Cart = React.lazy(() => import('cart/Module'));
const Shop = React.lazy(() => import('shop/Module'));

export function App() {
  const navigate = useNavigate()
  return (
    <React.Suspense fallback={<div>...</div>}>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="" element={<Homepage />} />
          <Route path="/shared" element={<Shared />} />
          <Route
            path="/checkout"
            element={<Shared component="CheckoutSuccess" navigate={navigate} />}
          />
          <Route path="/cart" element={<Cart navigate={navigate} />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/shop/:id" element={<Shop component="ShopDetail" navigate={navigate} />} />
          <Route path='*' element={<Shared component="Notfound" navigate={navigate} />} />
        </Route>
      </Routes>
    </React.Suspense>
  );
}

export default App;
