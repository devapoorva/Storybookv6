import Input from "./Input"

export default {
  title: "Components/Input",
  component: Input
}

const Template = args => <Input {...args} />

export const Horizontal = Template.bind({})
Horizontal.args = {
  inputType: "text",
  inputPlaceholder: "Enter name",
  direction: "horizontal",
  label:"Name",
}

export const Vertical = Template.bind({})
Vertical.args = {
  inputType: "text",
  inputPlaceholder: "Enter name",
  direction: "vertical",
  label:"Name",
}

export const Password = Template.bind({})
Password.args = {
  inputType: "password",
  inputPlaceholder: "Enter password",
  direction: "vertical",
  label:"Password",
}
