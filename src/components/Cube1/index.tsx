import "../Cube1/styles.css";


export function Cube1() {
    return(
        <div className="cube">
            <div className="face face--front">Front</div>
            <div className="face face--right">right</div>
            <div className="face face--back">Back</div>
            <div className="face face--left">Left</div>
            <div className="face face--top">Top</div>
            <div className="face face--bottom">Bottom</div>
        </div>
    )
}