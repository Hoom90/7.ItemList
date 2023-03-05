import "./style.css"

const Card = (props) => {
    const {img,title,addCounterHandle} = props;
    return (
        <div className="card">
            <div className="img">
                <img src={img} alt="image" />
            </div>
            <div className="title">
                <span>{title}</span>
            </div>
            <button type="button" className="addnew" onClick={addCounterHandle}>
                افزودن جدید
            </button>
        </div>
    );
}
export default Card