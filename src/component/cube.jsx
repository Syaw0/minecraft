import { useBox } from "@react-three/cannon"
import { useState } from "react"
import { useStore } from "../hooks/useStore"
import * as textures from "../images/texture"

export const Cube = ( {key, position, texture}) => {
    const [isHover,setIsHover] = useState(false)
const [ref] = useBox(()=>({
    type:"Static",
    position
}))
const [addCube,removeCube] = useStore(state=>[state.addCube,state.removeCube])
// const activeTexture = textures.grassTexture
const activeTexture = textures[texture + 'Texture']
console.log(texture)

return (
    <mesh
    onPointerMove={(e)=>{
    e.stopPropagation()
    setIsHover(true)
    }}
    onPointerOut={(e)=>{
        e.stopPropagation()
        setIsHover(false)
    }}
    onClick={(e)=>{
        e.stopPropagation()
        const  clickedFace = Math.floor(e.faceIndex / 2)
        const {x,y,z} = ref.current.position
        if(e.altKey){
            removeCube(x,y,z)
            return
        }
        if(clickedFace === 0){
            addCube(x +1 ,y,z)
            return
        }
        if(clickedFace === 1){
            addCube(x -1 ,y,z)
            return
        }
        if(clickedFace === 2){
            addCube(x ,y + 1,z)
            return
        }
        if(clickedFace === 3){
            addCube(x ,y-1,z)
            return
        }
        if(clickedFace === 4){
            addCube(x ,y,z +1 )
            return
        }
        if(clickedFace === 5){
            addCube(x ,y,z-1)
            return
        }   

    }}
     ref={ref}>
    <boxBufferGeometry attach={'geometry'} />
    {/* opacity={texture === 'glass' ? 0.2:1} */}
    <meshStandardMaterial color={isHover?'gray':'white'} transparent  map={activeTexture} attach='material' />

    </mesh>
)
}