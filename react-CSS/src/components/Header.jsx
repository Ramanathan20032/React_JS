// adding stylesheet
import './Header.css'
// adding stylesheet for a module
import style from './Header.module.css'

function Header(){
    // object
    const myStyle = {
        color: 'lightBlue',
        backgroundColor: 'yellow',
        padding: '15px',
        fontFamily: 'Sans-Serif'
    }
    return(
        <>
        {/* In jsx, Attribute should enclosed within the {}*/}
            {/* inline css using object */}
            <h1 style={myStyle}>Hello Styling</h1>
            {/* inline css in object */}
            <p style={{color: 'pink', backgroundColor: 'tomato'}}>Add new Style</p>
            {/* from styleSheet particular(module) class is used for <p></p> */}
            <p className={style.bigBlue}>Add new Module</p>
        </>
    )
}
export default Header;