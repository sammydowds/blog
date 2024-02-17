import type { Meta, StoryObj } from '@storybook/react'

import { WorkHistory } from '../components/WorkHistory'

const meta: Meta<typeof WorkHistory> = {
  component: WorkHistory,
}

export default meta
type Story = StoryObj<typeof WorkHistory>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/api/csf
 * to learn how to use render functions.
 */
export const Main: Story = {
  render: () => <WorkHistory />,
}
