import "./Class.css";

function Class(props) {
    return (
        <div class="container">
            <div className="class">{props.name}</div>
        </div>
    )
}

export default Class;