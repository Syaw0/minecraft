import { Physics } from "@react-three/cannon";
import { Sky } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import React from "react";
import { Cubes } from "./component/cubes";
import { Fpv } from "./component/fpv";
import { Ground } from "./component/ground";
import { Menu } from "./component/menu";
import { Player } from "./component/player";
import { TextureSelector } from "./component/TextureSelector";
import gCss from "./styles/global";

const App = () => {
  gCss()
  window.addEventListener('load', ()=>{
    document.getElementById('root').style.width = `${window.innerWidth}px`
    document.getElementById('root').style.height = `${window.innerHeight}px`
  })
    return (
      <>
        <Canvas id="canvas">
          <Sky sunPosition={[100, 100, 20]}/> 
          <ambientLight intensity={0.5} />
          <Fpv />
          <Physics>
          <Player />
          <Cubes />
            <Ground />
          </Physics>
        </Canvas>
        <div id="cursor">+</div>
        <TextureSelector />
        <Menu />
      </>
    )


}


export default App