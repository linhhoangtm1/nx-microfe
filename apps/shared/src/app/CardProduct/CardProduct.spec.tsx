import { render } from '@testing-library/react';

import CardCategory from './CardProduct';

describe('CardCategory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardCategory />);
    expect(baseElement).toBeTruthy();
  });
});
