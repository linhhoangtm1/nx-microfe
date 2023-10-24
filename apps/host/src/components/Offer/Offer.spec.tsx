import { render } from '@testing-library/react';

import Offer from './Offer';

describe('Offer', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Offer />);
    expect(baseElement).toBeTruthy();
  });
});
