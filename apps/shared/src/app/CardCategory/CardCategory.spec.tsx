import { render } from '@testing-library/react';

import CardCategory from './CardCategory';

describe('CardCategory', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<CardCategory />);
    expect(baseElement).toBeTruthy();
  });
});
