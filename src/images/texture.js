import { NearestFilter, TextureLoader } from 'three'
import {
    grassImg,
    glassImg,
    woodImg,
    logImg,
    dirtImg
} from './images.js'


const grassTexture = new TextureLoader().load(grassImg)
const glassTexture = new TextureLoader().load(glassImg)
const woodTexture = new TextureLoader().load(woodImg)
const logTexture = new TextureLoader().load(logImg)
const dirtTexture = new TextureLoader().load(dirtImg)
const groundTexture = new TextureLoader().load(grassImg)

grassTexture.magFilter = NearestFilter;
groundTexture.magFilter = NearestFilter;
glassTexture.magFilter = NearestFilter;
woodTexture.magFilter = NearestFilter;
dirtTexture.magFilter = NearestFilter;
logTexture.magFilter = NearestFilter;

export {
    grassTexture,
    groundTexture,
    glassTexture,
    dirtTexture,
    logTexture,
    woodTexture,
    
}