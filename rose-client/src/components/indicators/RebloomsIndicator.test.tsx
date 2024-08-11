import {render, screen} from "@testing-library/react";
import RebloomsIndicator from "./RebloomsIndicator.tsx";

describe('<RebloomsIndicator/>', () => {
  it('renders correctly', () => {
    render(<RebloomsIndicator reblooms="Test value" />)
  })

  it('displays text passed from reblooms prop', () => {
    render(<RebloomsIndicator reblooms='Reblooms' />)

    const title = screen.getByText('Reblooms')

    expect(title).toBeInTheDocument()
  })
})
