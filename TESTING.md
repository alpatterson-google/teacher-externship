# Testing Setup

This project uses Vitest and React Testing Library for component testing.

## Available Test Commands

```bash
# Run tests in watch mode (development)
npm test

# Run tests once (CI/production)
npm run test:run
```

## Test Files

Tests are located alongside their components with the `.test.jsx` extension:
- `src/components/mini_profile/albert_patterson/albert_patterson.test.jsx`
- `src/components/mini_profile/mini_profile_list.test.jsx`

## Test Coverage

### Albert Patterson Component Tests
The Albert Patterson component tests cover:
- ✅ Component rendering without crashes
- ✅ Correct display of name and title
- ✅ Profile information (location, experience, specialization)
- ✅ Image attributes and styling
- ✅ LinkedIn link attributes and security
- ✅ Container styling classes
- ✅ All profile sections presence
- ✅ Semantic HTML structure
- ✅ Component structure integrity

### Mini Profile List Component Tests
The Mini Profile List component tests cover:
- ✅ Component rendering without crashes
- ✅ "Participants" heading display and styling
- ✅ Container layout and styling classes
- ✅ AlbertPatterson component integration (mocked)
- ✅ Semantic HTML structure
- ✅ Proper layout structure (flex column, spacing, centering)
- ✅ Consistent padding
- ✅ Component structure integrity

## Testing Patterns

### Component Mocking
The `MiniProfileList` tests use component mocking to isolate the component under test:
```javascript
vi.mock('./albert_patterson/albert_patterson', () => ({
  default: () => <div data-testid="albert-patterson-mock">Albert Patterson Component</div>
}))
```

This ensures tests focus on the `MiniProfileList` logic without being affected by the `AlbertPatterson` component implementation.

## Testing Libraries Used

- **Vitest**: Fast test runner built for Vite
- **React Testing Library**: Testing utilities for React components
- **@testing-library/jest-dom**: Custom Jest matchers for DOM elements
- **@testing-library/user-event**: User interaction simulation
- **jsdom**: DOM implementation for Node.js

## Configuration

- **Test setup**: `src/test/setup.js`
- **Vite config**: Test configuration in `vite.config.js`
- **Environment**: jsdom for DOM testing
- **Globals**: Test functions available globally
