import "../ItemsAboutMe/styles.css"
import mew from "../../../assets/img/mew.png"
import puzzle1 from "../../../assets/img/puzzle1.png"
import puzzle2 from "../../../assets/img/puzzle2.png"
import controle2 from "../../../assets/img/controle2.png"
import me from "../../../assets/img/me.png"
import book from "../../../assets/img/book.png"
import controle from "../../../assets/img/controle.png"
import NamePokemon from "../../../assets/img/NamePokemon.png"

export function Items() {
    return (
        <>

            <img draggable = { false } 
                className="mew" src={ mew }>
            </img>
            <img draggable = { false } 
                className="puzzle1" src={ puzzle1 }>
            </img>
            <img draggable = { false } 
                className="controle2" src={ controle2 }>
            </img>
            <img draggable = { false } 
                className="puzzle2" src={ puzzle2 }>
            </img>
            <img draggable = { false } 
                className="me" src={ me }>
            </img>
            <img draggable = { false } 
                className="book" src={ book }>
            </img>
            <img draggable = { false } 
                className="controle" src={ controle }>
            </img>
            <img draggable = { false } 
                className="NamePokemon" src={ NamePokemon }>
            </img>
        </>
    )
}