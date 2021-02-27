import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Pagination from './Pagination'

describe('Pagination', () => {
  it('should render a pagination component from props', () => {
    render(<Pagination currentPage={5} totalPages={9} />)

    expect(screen.getByText('5/9')).toBeInTheDocument()
    expect(screen.getAllByRole('button', /←→/)).toHaveLength(2)
  })

  it('should support callbacks for previous and next buttons', () => {
    const onNextCallback = jest.fn()
    const onPreviousCallback = jest.fn()

    render(
      <Pagination
        currentPage={4}
        totalPages={12}
        onNext={onNextCallback}
        onPrevious={onPreviousCallback}
      />
    )

    userEvent.click(screen.getByRole('button', { name: '←' }))
    userEvent.click(screen.getByRole('button', { name: '←' }))
    userEvent.click(screen.getByRole('button', { name: '→' }))

    expect(onPreviousCallback).toHaveBeenCalledTimes(2)
    expect(onNextCallback).toHaveBeenCalledTimes(1)
  })

  it('should disable the previous button if the current page equals to one', () => {
    render(<Pagination currentPage={1} totalPages={9} />)

    expect(screen.getByRole('button', { name: '←' })).toBeDisabled()
  })
  it('should disable the next button if the current page equals the total amount of pages', () => {
    render(<Pagination currentPage={9} totalPages={9} />)

    expect(screen.getByRole('button', { name: '→' })).toBeDisabled()
  })
})
