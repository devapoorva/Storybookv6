import CustomAlert from "./CustomAlert"

export default {
  title: "Components/Alert",
  component: CustomAlert
}

const Template = args => <CustomAlert {...args} />

export const Success = Template.bind({})
Success.args = {
  type: "success" 
}

export const Danger = Template.bind({})
Danger.args = {
  type: "danger" 
}