import { describe, expect, it } from 'vitest'

describe('shared test baseline', () => {
  it('keeps vitest wired for workspace tests', () => {
    expect(true).toBe(true)
  })
})
