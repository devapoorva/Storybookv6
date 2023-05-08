import Badge from "./Badge"

export default {
  title: "Components/Badge",
  component: Badge
}

const Template = args => <Badge {...args} />

export const Notification = Template.bind({})
Notification.args = {
    type:"primary",
    position:false,
    top:0,
    start:100, 
    badgeBackground:"secondary",
    text:"Notification ", 
    badge:"4"
}

export const NotificationPosition = Template.bind({})
NotificationPosition.args = {
    type:"primary",
    position:true,
    top:0,
    start:100, 
    badgeBackground:"danger",
    text:"Notification", 
    badge:"99+"
}