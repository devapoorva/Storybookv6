import Card from "./Card"

export default {
  title: "Components/Card",
  component: Card
}

const Template = args => <Card {...args} />

export const CardImage = Template.bind({})
CardImage.args = {
    imageUrl:"https://cdn.pixabay.com/photo/2016/03/08/20/03/flag-1244649_960_720.jpg" ,
    heading: "Card Title",
    description:"Some quick example text to build on the card title and make up the bulk of the card's content.",
    linkText:"Go anywhere"
}