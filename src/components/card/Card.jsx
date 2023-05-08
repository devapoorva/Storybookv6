import PropTypes from "prop-types";

const Card = ({imageUrl,heading,description,linkText})=>{

    return (
        <>
            <div className="card" >
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{heading}</h5>
                    <p className="card-text">{description}</p>
                    <a href="#" className="btn btn-primary">{linkText}</a>
                </div>
            </div>
        </>
    );
}
Card.prototype = {
    imageUrl: PropTypes.string,
    heading: PropTypes.string,
    description: PropTypes.string,
    linkText: PropTypes.string
}
export default Card;