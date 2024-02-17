import type { Meta, StoryObj } from '@storybook/react'

import { Testimonials } from '../components/Testimonials'

const meta: Meta<typeof Testimonials> = {
  component: Testimonials,
}

export default meta
type Story = StoryObj<typeof Testimonials>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Main: Story = {
  render: () => <Testimonials />,
}
