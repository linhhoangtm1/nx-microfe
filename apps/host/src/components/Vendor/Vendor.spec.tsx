import { render } from '@testing-library/react';

import Vendor from './Vendor';

describe('Vendor', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Vendor />);
    expect(baseElement).toBeTruthy();
  });
});
