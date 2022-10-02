import { useEffect, useState } from "react"
import { useKeyboard } from "../hooks/useKeyboard";
import { useStore } from "../hooks/useStore";
import { logImg,dirtImg,glassImg,grassImg,woodImg } from "../images/images";

const imageMap = {
    dirt:dirtImg,
    grass:grassImg,
    wood:woodImg,
    glass:glassImg,
    log:logImg,
}

export const TextureSelector = () => {
    const [show , setShow] = useState(false);
    const [texture, setTexture] = useStore(state=>[state.texture,state.setTexture]);
    const {
        dirt,
        glass,
        grass,
        wood,
        log

    } = useKeyboard()



    useEffect(()=>{

        const textures = {
            dirt,
            glass,
            grass,
            wood,
            log    
        }
        const pressedTexture = Object.entries(textures).find(([k,v])=>v)
        if( pressedTexture){
            setTexture(pressedTexture[0])
        }
    },[setTexture,dirt,wood,glass,grass,log])

    useEffect(()=>{
        const showTimeOut = setTimeout(()=>{
            setShow(false);
        },2000);
        setShow(true);
        return ()=>[
            clearTimeout(showTimeOut)
        ]
    },[texture])

    return show && (<div id="textureSelect">
        {Object.entries(imageMap).map(([k,src])=>{
            return (<img src={src} key={k} alt=""
            className={k===texture ?'activeTexture':'deActiveTexture'}
             />)
        })}
    </div>)
}