import {render, screen} from "@testing-library/react";
import RebloomsIndicator from "./RebloomsIndicator.tsx";

describe('<RebloomsIndicator/>', () => {
  it('renders correctly', () => {
    render(<RebloomsIndicator />)
  })

  it('displays "Reblooms" by default', () => {
    render(<RebloomsIndicator />)

    const title = screen.getByText('Reblooms')

    expect(title).toBeInTheDocument()
  })

  it('displays "Once Blooming" if "reblooms" is false', () => {
    render(<RebloomsIndicator reblooms={false} />)

    const title = screen.getByText('Once Blooming')

    expect(title).toBeInTheDocument()
  })

  it('displays "Reblooms" if "reblooms" is true', () => {
    render(<RebloomsIndicator reblooms={true} />)

    const title = screen.getByText('Reblooms')

    expect(title).toBeInTheDocument()
  })
})
