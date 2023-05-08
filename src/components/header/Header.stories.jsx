import Header from "./Header"

export default {
  title: "Components/Header",
  component: Header
}

const Template = args => <Header {...args} />

export const NormalHeader = Template.bind({})
NormalHeader.args = {
    navPosition:"end"
}