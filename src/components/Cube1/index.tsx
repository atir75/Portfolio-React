import "../Cube1/styles.css";


export function Cube1() {
    return(
        <div className="cube2">
            <div className="face face--front">
                <img
                className="csharp"
                    src="https://growiz.com.br/wp-content/uploads/2020/08/kisspng-c-programming-language-logo-microsoft-visual-stud-atlas-portfolio-5b899192d7c600.1628571115357423548838.png">
                </img>
            </div>
            <div className="face face--right">right</div>
            <div className="face face--back">Back</div>
            <div className="face face--left">Left</div>
            <div className="face face--top">Top</div>
            <div className="face face--bottom">Bottom</div>
        </div>
    )
}