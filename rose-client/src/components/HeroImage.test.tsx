import {render, screen, within} from "@testing-library/react";
import HeroImage from "./HeroImage.tsx";
import '@testing-library/jest-dom'

describe('<HeroImage/>', () => {
  it('renders without crashing', () => {
    render(<HeroImage imageUrl="some.url" />);

    const heroImage = screen.queryByTestId('hero-image')

    expect(heroImage).toBeInTheDocument()
  })

  it('renders the breadcrumb component inside the container', async () => {
    render(<HeroImage imageUrl="some.url" breadcrumb={<div data-testid='breadcrumb' />} />);

    const breadContainer = screen.getByTestId('bread-container')
    const breadcrumb = within(breadContainer).queryByTestId('breadcrumb')

    expect(breadcrumb).toBeInTheDocument()
  })
})
