import Select from "./Select"

export default {
  title: "Components/Select",
  component: Select
}

const Template = args => <Select {...args} />

export const Horizontal = Template.bind({})
Horizontal.args = { 
  direction: "horizontal",
  label:"Select Label",
}

export const Vertical = Template.bind({})
Vertical.args = { 
  direction: "vertical",
  label:"Select Label",
}
