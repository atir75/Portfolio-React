import "../ItemsAboutMe/styles.css"
import mew from "../../../assets/img/mew.png"
import puzzle1 from "../../../assets/img/puzzle1.png"
import puzzle2 from "../../../assets/img/puzzle2.png"
import controle2 from "../../../assets/img/controle2.png"
import me from "../../../assets/img/me.png"

export function Items() {
    return (
        <>
            <img
                className="mew" src={ mew }>
            </img>
            <img
                className="puzzle1" src={ puzzle1 }>
            </img>
            <img
                className="controle2" src={ controle2 }>
            </img>
            <img
                className="puzzle2" src={ puzzle2 }>
            </img>
            <img
                className="me" src={ me }>
            </img>
        </>
    )
}