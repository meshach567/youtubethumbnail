import { expect, test } from 'vitest'
import { render, screen } from '@testing-library/react'
import Home from '../app/page'
 
test('Page', () => {
  render(<Home />)
  expect(screen.getByRole('Box', { level: 1, name: 'div' })).toBeDefined()
})