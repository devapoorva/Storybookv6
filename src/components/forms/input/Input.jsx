import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";

const Input = ({ direction, label, inputType, inputPlaceholder }) => {
  const formGroup =
    direction === "horizontal" ? "form-group row" : "form-group";
  const labelClass =
    direction === "horizontal" ? "col-sm-2 col-form-label" : "form-label"; 
  return (
    <div className={formGroup}>
      <label className={labelClass}>{label}</label>
      {direction === "horizontal" ? (
        <div className="col-sm-10">
            <input type={inputType} placeholder={inputPlaceholder} className="form-control" />
        </div>
      ) : (
        <input type={inputType} placeholder={inputPlaceholder} className="form-control" />
      )}
    </div>
  );
};
Input.propTypes = {
  inputType: PropTypes.oneOf([
    "text",
    "number",
    "date",
    "time",
    "tel",
    "password",
  ]).isRequired,
  inputPlaceholder: PropTypes.string,
  label: PropTypes.string,
  direction: PropTypes.oneOf(["vertical", "horizontal"]),
};
export default Input;
