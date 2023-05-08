import PropTypes from "prop-types";

const Badge = ({type,position,top,start,badgeBackground,text,badge})=>{
    
    return (
        <>
            <button type="button" className={`btn btn-${type} ${position && "position-relative"}`} >
                {text+" "} 
                {
                    position && <span className={`${position && "position-absolute"} top-${top} start-${start} ${position && "translate-middle"} badge rounded-pill bg-${badgeBackground}`}>
                                {badge}
                                {position && <span className="visually-hidden">unread messages</span>}
                                </span>
                }
                {
                    !position && <span className={`badge text-bg-${badgeBackground}`}>{badge}</span>
                }
            </button>
        </>
    );
}
Badge.propTypes = {
    type: PropTypes.oneOf([
      "primary",
      "warning",
      "danger",
      "success",
      "secondary"
    ]).isRequired,
    position: PropTypes.oneOf([true, false]),
    top: PropTypes.number,
    start: PropTypes.number,
    badgeBackground: PropTypes.oneOf([
        "primary",
        "warning",
        "danger",
        "success",
        "secondary"
      ]).isRequired,
    badge: PropTypes.string,
    text: PropTypes.string
};
export default Badge;