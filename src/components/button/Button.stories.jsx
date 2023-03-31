import Button from "./Button"

export default {
  title: "Components/Button",
  component: Button
}

const Template = args => <Button {...args} />

export const Red = Template.bind({})
Red.args = {
  backgroundColor: "red",
  label: "Medium Danger Button",
  size: "md",
  btnClass:"btn btn-danger",
}

export const Green = Template.bind({})
Green.args = {
  backgroundColor: "green",
  label: "Medium Success Button",
  size: "md",
  btnClass:"btn btn-success",
}

export const Small = Template.bind({})
Small.args = {
  backgroundColor: "red",
  label: "Small Danger Button",
  size: "sm",
  btnClass:"btn btn-danger",
}

export const Large = Template.bind({})
Large.args = {
  backgroundColor: "red",
  label: "Large Danger Button",
  size: "lg",
  btnClass:"btn btn-danger",
}