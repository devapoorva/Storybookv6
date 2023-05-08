import Footer from "./Footer"

export default {
  title: "Components/Footer",
  component: Footer
}

const Template = args => <Footer {...args} />

export const NormalFooter = Template.bind({})
// NormalFooter.args = {
//     navPosition:"end"
// }