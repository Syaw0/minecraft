import { useCallback, useEffect, useState } from "react"

function actionByKey(key){
    const keyActionMap = {
        KeyW:'moveForward',
        KeyS:'moveBackward',
        KeyA:'moveLeft',
        KeyD:'moveRight',
        Space:'jump',
        Digit1:"dirt",
        Digit2:"grass",
        Digit3:"wood",
        Digit4:"glass",
        Digit5:"log",
    }

    return keyActionMap[key]
}

export const useKeyboard = () =>{
    const [movement, setMovement] = useState({
        moveForward:false,
        moveBackward:false,
        moveLeft:false,
        moveRight:false,
        jump:false,
        dirt:false,
        grass:false,
        wood:false,
        glass:false,
        log:false,
    })

    const handleKeyDown = useCallback((e)=>{
        const action = actionByKey(e.code)
        if(action){
            setMovement(state=>({...state, [action]:true}))
        }
    },[])


    const handleKeyUp = useCallback((e)=>{
        const action = actionByKey(e.code)
        if(action){
            setMovement(state=>({...state, [action]:false}))
        }

    },[])

    useEffect(()=>{
        document.addEventListener('keydown',handleKeyDown)
        document.addEventListener('keyup',handleKeyUp)
        return ()=>{
            document.removeEventListener('keydown',handleKeyDown)
            document.removeEventListener('keyup',handleKeyUp)
        }
    },[handleKeyDown, handleKeyUp])

    return movement
}