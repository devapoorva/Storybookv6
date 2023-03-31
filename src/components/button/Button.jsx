import './Button.css';


const Button = ({btnClass,backgroundColor="red",label,size})=> {
    let scale = 1
    if (size === "sm") scale = 0.75
    if (size === "lg") scale = 1.5
    const style = {
        backgroundColor,
        padding: `${scale * 0.5}rem ${scale * 1}rem`,
        border: "none",
    }
    return (
        <div>
            <button type="button" className={btnClass} style={style} > {label} </button>
        </div>
    );
}
export default Button;