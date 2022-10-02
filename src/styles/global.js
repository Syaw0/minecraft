import { globalCss } from "./@stitches.config";

const gCss = globalCss({
    '*':{
        padding:"0",
        margin:"0",
        boxSizing:"border-box"
    },
    '#root':{
        width:"100%",
        height:"100%",
        position:"relative",
    },
    '#canvas':{
        width:'100%',
        height:"100%",
    },
    '#cursor':{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:'translate(-50%,-50%)',
        color:"white"
    },
    '#textureSelect':{
        position:"absolute",
        top:"50%",
        left:"50%",
        transform:'translate(-50%,-50%)',
        color:"white",
        '& img':{
            width:"3rem",
            height:"auto"
        }
    },
    '.activeTexture':{
        border:"2px solid red"
    },
    '#menu':{
        position:"absolute",
        top:"0",
        left:"0",
        
    }
})



export default gCss