import { fireEvent, render, screen } from '@testing-library/react'
import Card from './Card'

describe('Card', () => {
  it('should render a card component from props', () => {
    const { container } = render(
      <Card
        name="Jane"
        species="Human"
        image="https://source.unsplash.com/300x300/?goat"
        status="alive"
        origin="Earth"
        location="Moon"
        gender="Women"
      />
    )

    expect(screen.getByText('Jane', { exact: false })).toBeInTheDocument()
    expect(screen.getByText('👤', { exact: false })).toBeInTheDocument()
    expect(screen.getByTestId('card-image')).toBeInTheDocument()
    expect(screen.getByText('alive')).toBeInTheDocument()
    expect(screen.getByText('Earth')).toBeInTheDocument()
    expect(screen.getByText('Moon')).toBeInTheDocument()
    expect(screen.getByText('Women')).toBeInTheDocument()
    expect(container.firstChild).toMatchSnapshot()
  })

  it('should show the card if the button was clicked', () => {
    const { container } = render(
      <Card
        name="Jane"
        species="Human"
        image="https://source.unsplash.com/300x300/?goat"
        status="alive"
        origin="Earth"
        location="Moon"
        gender="Women"
      />
    )

    const hiddenElement = screen.getByTestId('card-details')
    const button = screen.getByRole('button')
    fireEvent.click(button)
    expect(hiddenElement).not.toHaveAttribute('hidden')
  })

  it('should render "👤" if the species is "Human"', () => {
    const { container } = render(
      <Card
        name="Jane"
        species="Human"
        image="https://source.unsplash.com/300x300/?goat"
        status="alive"
        origin="Earth"
        location="Moon"
        gender="Women"
      />
    )

    expect(screen.getByText('👤', { exact: false })).toBeInTheDocument()
  })

  it('should render "👽" if the species it not "Human"', () => {
    const { container } = render(
      <Card
        name="Jane"
        species="Alien"
        image="https://source.unsplash.com/300x300/?goat"
        status="alive"
        origin="Earth"
        location="Moon"
        gender="Women"
      />
    )

    expect(screen.getByText('👽', { exact: false })).toBeInTheDocument()
  })
})
