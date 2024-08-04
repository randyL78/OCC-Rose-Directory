import {render, screen} from "@testing-library/react";
import PillIndicator from "./PillIndicator.tsx";
import {beforeEach, expect} from "vitest";

describe('<PillIndicator />', () => {
  beforeEach(() => {
    render(<PillIndicator totalBoxes={5} filledBoxes={3} filledColor='white' emptyColor='black' />)
  })

  it('renders correct number of total pills', async () => {
    const allPills = screen.queryAllByTestId(/pill/)

    expect(allPills.length).toEqual(5)
  })

  it('renders the correct number of empty pills', async () => {
    const emptyPills = await screen.findAllByTestId('empty-pill')

    expect(emptyPills.length).toEqual(2)
  })

  it('renders the correct number of filled boxes', async () => {
    const filledPills = await screen.findAllByTestId('filled-pill')

    expect(filledPills.length).toEqual(3)
  })
});
