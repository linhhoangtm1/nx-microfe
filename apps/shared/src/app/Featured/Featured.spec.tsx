import { render } from '@testing-library/react';

import Featured from './Featured';

describe('Featured', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Featured />);
    expect(baseElement).toBeTruthy();
  });
});
