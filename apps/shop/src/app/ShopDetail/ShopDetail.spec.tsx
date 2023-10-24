import { render } from '@testing-library/react';

import ShopDetail from './ShopDetail';

describe('ShopDetail', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<ShopDetail />);
    expect(baseElement).toBeTruthy();
  });
});
