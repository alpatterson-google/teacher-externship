import { render, screen } from '@testing-library/react'
import { describe, it, expect } from 'vitest'
import AlbertPatterson from './albert_patterson'

describe('AlbertPatterson Component', () => {
  it('renders the component without crashing', () => {
    render(<AlbertPatterson />)
    expect(screen.getByText('Albert Patterson')).toBeInTheDocument()
  })

  it('displays the correct name and title', () => {
    render(<AlbertPatterson />)
    
    expect(screen.getByText('Albert Patterson')).toBeInTheDocument()
    expect(screen.getByText('Software Developer & Tech Enthusiast')).toBeInTheDocument()
  })

  it('displays profile information correctly', () => {
    render(<AlbertPatterson />)
    
    // Check location
    expect(screen.getByText('Location:')).toBeInTheDocument()
    expect(screen.getByText('Round Rock, TX')).toBeInTheDocument()
    
    // Check experience
    expect(screen.getByText('Experience:')).toBeInTheDocument()
    expect(screen.getByText('7+ years')).toBeInTheDocument()
    
    // Check specialization
    expect(screen.getByText('Specialization:')).toBeInTheDocument()
    expect(screen.getByText('Fullstack Development and Cloud Infrastructure and Monitoring')).toBeInTheDocument()
  })

  it('displays the profile image with correct attributes', () => {
    render(<AlbertPatterson />)
    
    const image = screen.getByAltText('Jill Lady Brady')
    expect(image).toBeInTheDocument()
    expect(image).toHaveClass('w-32', 'h-32', 'rounded-full', 'object-cover', 'mb-4', 'border-4', 'border-gray-200')
  })

  it('displays the LinkedIn link with correct attributes', () => {
    render(<AlbertPatterson />)
    
    const linkedinLink = screen.getByRole('link', { name: 'LinkedIn' })
    expect(linkedinLink).toBeInTheDocument()
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/in/jill-brady-writer/')
    expect(linkedinLink).toHaveAttribute('target', '_blank')
    expect(linkedinLink).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('has the correct container styling', () => {
    render(<AlbertPatterson />)
    
    const container = screen.getByText('Albert Patterson').closest('.max-w-sm')
    expect(container).toHaveClass('max-w-sm', 'mx-auto', 'bg-white', 'rounded-lg', 'shadow-md', 'overflow-hidden')
  })

  it('displays all profile sections', () => {
    render(<AlbertPatterson />)
    
    // Check that all three profile information rows are present
    const locationSection = screen.getByText('Location:').closest('div')
    const experienceSection = screen.getByText('Experience:').closest('div')
    const specializationSection = screen.getByText('Specialization:').closest('div')
    
    expect(locationSection).toBeInTheDocument()
    expect(experienceSection).toBeInTheDocument()
    expect(specializationSection).toBeInTheDocument()
  })

  it('has proper semantic structure', () => {
    render(<AlbertPatterson />)
    
    // Check for heading
    const heading = screen.getByRole('heading', { level: 2 })
    expect(heading).toHaveTextContent('Albert Patterson')
    
    // Check for image
    const image = screen.getByRole('img')
    expect(image).toHaveAttribute('alt', 'Albert Patterson')
    
    // Check for link
    const link = screen.getByRole('link')
    expect(link).toHaveTextContent('LinkedIn')
  })

  it('renders the component structure correctly', () => {
    const { container } = render(<AlbertPatterson />)
    
    // Check that the component renders without throwing
    expect(container.firstChild).toBeInTheDocument()
    
    // Check for main container structure
    const mainContainer = container.querySelector('.max-w-sm')
    expect(mainContainer).toBeInTheDocument()
    
    // Check for inner content container
    const contentContainer = mainContainer?.querySelector('.p-6')
    expect(contentContainer).toBeInTheDocument()
  })
})
