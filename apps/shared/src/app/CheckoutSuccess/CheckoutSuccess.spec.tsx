import { render } from '@testing-library/react';

import CheckoutSuccess from './CheckoutSuccess';

describe('CheckoutSuccess', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CheckoutSuccess />);
    expect(baseElement).toBeTruthy();
  });
});
