import { useAlert } from "react-alert"; 
const AppAlert = ({type})=>{
    const alert = useAlert();

    const clickHandler = ()=>{
        if(type==="success"){
            alert.success("It's okay.");
        }
        if(type==="error"){
            alert.error("Oops something went wrong. This is error alert")
        }
        if(type==="info"){
            alert.info("This is information alert");
        }
        console.log("Puja Sinha"+type)
    }

    return (
        <>
            <div>
                <button type="button" onClick={clickHandler}>Show Alert</button>
            </div>
        </>
    );
}
export default AppAlert;