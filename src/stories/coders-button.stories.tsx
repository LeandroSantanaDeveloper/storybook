import CodersButton from "../components/coders-button";
import {ComponentStory} from "@storybook/react";

export default {
    title: 'Components/CodersButton',
    component: CodersButton
}

// export const Primary = () => <CodersButton />

// export const Secondary = (args: CodersButtonProps) => <CodersButton {...args} />

const Template: ComponentStory<typeof CodersButton> = (args) => <CodersButton {...args} />


export const Primary = Template.bind({})
Primary.args = {
    label: 'XPTO'
}

export const Secondary = Template.bind({})
Secondary.args = {
    label: 'XYZ',
    color: 'red'
}

export const WithIcon = Template.bind({})
WithIcon.args = {
    label: '123'
}