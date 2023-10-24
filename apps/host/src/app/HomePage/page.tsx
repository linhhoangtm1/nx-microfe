import { useNavigate } from 'react-router-dom';
import SharedModule from 'shared/Module';
import CategoryList from '../../components/CategoryList';
import Offer from '../../components/Offer';
import ProductList from '../../components/ProductList';
import Subscribe from '../../components/Subscribe';
import Vendor from '../../components/Vendor';

const Homepage = () => {
  const navigate = useNavigate();
  return (
    <>
      <SharedModule component="Featured" navigate={navigate} />
      <CategoryList />
      <Offer />
      <ProductList />
      <Subscribe />
      <Vendor />
    </>
  );
};

export default Homepage;
