import styles from './category-list.module.scss';
import SharedModule from 'shared/Module';
import { useNavigate } from 'react-router-dom';

/* eslint-disable-next-line */
export interface CategoryListProps {}

export function CategoryList(props: CategoryListProps) {
  const navigate = useNavigate();
  return (
    <div className="container max-w-none pt-5">
      <div className="grid grid-cols-3 gap-4 pb-4 xl:px-12">
        <div className="pb-2">
          <SharedModule
            component="CardCategory"
            image={'http://localhost:4203/assets/images/cat-1.jpg'}
            name="Men's dresses"
            availableStock={15}
            navigate={navigate}
          />
        </div>
        <div className="pb-2">
          <SharedModule
            component="CardCategory"
            image={'http://localhost:4203/assets/images/cat-2.jpg'}
            name="Women's dresses"
            availableStock={15}
            navigate={navigate}
          />
        </div>
        <div className="pb-2">
          <SharedModule
            component="CardCategory"
            image={'http://localhost:4203/assets/images/cat-3.jpg'}
            name="Baby's dresses"
            availableStock={15}
            navigate={navigate}
          />
        </div>
      </div>
    </div>
  );
}

export default CategoryList;
