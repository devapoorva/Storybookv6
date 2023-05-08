import PropTypes from "prop-types";
const CustomAlert = ({type})=>{

    return (
        <>
            {
                type==="primary" && <div className="alert alert-primary" role="alert">This is a primary alert—check it out!</div>
            }
            {
                type==="secondary" && <div className="alert alert-secondary" role="alert">This is a secondary alert—check it out!</div>
            }
            {
                type==="success" && <div className="alert alert-success" role="alert">This is a success alert—check it out!</div>
            }
            {
                type==="danger" && <div className="alert alert-danger" role="alert">This is a danger alert—check it out!</div>
            }
            {
                type==="warning" && <div className="alert alert-warning" role="alert">This is a warning alert—check it out!</div>
            }
        </>
    );
}
CustomAlert.propTypes = {
    type: PropTypes.oneOf([
      "primary",
      "warning",
      "danger",
      "success",
      "secondary"
    ]).isRequired
  };

export default CustomAlert;