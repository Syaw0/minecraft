import { nanoid } from "nanoid"
import create from "zustand"

const getLocalStorage = (key) => JSON.parse(window.localStorage.getItem(key))
const setLocalStorage = (key, value) => window.localStorage.setItem(key, JSON.stringify(value))



export const useStore = create((set,get)=>({
    texture:'dirt',
    cubes:getLocalStorage('cubes')||[],
    addCube:(x,y,z)=>{
        set((state)=>({
            ...state,
            cubes:[...state.cubes,
                {key:nanoid(),
                pos:[x,y,z],
                texture:state.texture
                }
            ]
        }))
    },
    removeCube:(x,y,z)=>{
        set(state=>({
            ...state,
            cubes:state.cubes.filter((cube)=>{
                const [X,Y,Z] = cube.pos;
                return X!==x || Y!==y || z!==Z
            })
        }))
    },
    setTexture:(texture)=>{
        set(state=>({
            ...state,
            texture
        }))
    },
    saveWorld:()=>{
        setLocalStorage('cubes',get().cubes)
    },
    resetWorld:()=>{
        set(state=>({...state,cubes:[]}))
    },
}))