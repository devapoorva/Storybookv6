import PropTypes from "prop-types";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

const Select = ({label,direction})=>{
    const formGroup =direction === "horizontal" ? "form-group row" : "form-group";
    const labelClass =direction === "horizontal" ? "col-sm-2 col-form-label" : "form-label"; 
    return (
        <div className={formGroup}>
          <label className={labelClass}>{label}</label>
          {direction === "horizontal" ? (
            <div className="col-sm-10">
                <select className="form-select">
                    <option>Option 1</option>
                    <option>Option 2</option>
                    <option>Option 3</option>
                </select>
            </div>
          ) : (
            <select className="form-select">
                <option>Option 1</option>
                <option>Option 2</option>
                <option>Option 3</option>
            </select>
          )}
        </div>
      );
}
Select.propTypes = {
    label: PropTypes.string,
    direction: PropTypes.oneOf(["vertical", "horizontal"]),
  };
  export default Select;