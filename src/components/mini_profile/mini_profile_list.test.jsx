import { render, screen } from '@testing-library/react'
import { describe, it, expect, vi } from 'vitest'
import MiniProfileList from './mini_profile_list'

// Mock the AlbertPatterson component to isolate the MiniProfileList tests
vi.mock('./albert_patterson/albert_patterson', () => ({
  default: () => <div data-testid="albert-patterson-mock">Albert Patterson Component</div>
}))

describe('MiniProfileList Component', () => {
  it('renders the component without crashing', () => {
    render(<MiniProfileList />)
    expect(screen.getByText('Participants')).toBeInTheDocument()
  })

  it('has correct heading styling', () => {
    render(<MiniProfileList />)
    
    const heading = screen.getByText('Participants')
    expect(heading).toHaveClass(
      'text-2xl',
      'font-bold', 
      'text-gray-800',
      'mb-2',
      'border-b-2',
      'border-gray-200',
      'pb-2',
      'w-full',
      'text-center'
    )
  })

  it('has correct container styling', () => {
    render(<MiniProfileList />)
    
    const container = screen.getByText('Participants').parentElement
    expect(container).toHaveClass(
      'flex',
      'flex-col',
      'items-center',
      'justify-center',
      'p-8',
      'space-y-12'
    )
  })


  it('renders the component structure correctly', () => {
    const { container } = render(<MiniProfileList />)
    
    // Check that the component renders without throwing
    expect(container.firstChild).toBeInTheDocument()
    
    // Check for main container
    const mainContainer = container.firstChild
    expect(mainContainer).toBeInTheDocument()
    
    // Check that it contains both heading and profile component
    expect(mainContainer.children).toHaveLength(2)
  })

  it('maintains proper layout structure', () => {
    render(<MiniProfileList />)
    
    const container = screen.getByText('Participants').parentElement
    
    // Check that container is a flex column
    expect(container).toHaveClass('flex-col')
    
    // Check spacing between elements
    expect(container).toHaveClass('space-y-12')
    
    // Check centering
    expect(container).toHaveClass('items-center', 'justify-center')
  })

  it('has consistent padding', () => {
    render(<MiniProfileList />)
    
    const container = screen.getByText('Participants').parentElement
    expect(container).toHaveClass('p-8')
  })
})
