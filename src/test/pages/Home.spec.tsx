import { render, screen } from '@testing-library/react';
import Home from '../../pages';

describe('Home', () => {
  it("should be render container", () => {
    render(<Home />)

    expect(screen.getByTestId("container")).toBeInTheDocument()
  })
});