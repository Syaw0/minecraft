import { useStore } from "../hooks/useStore"

export const Menu = () => {
    const [saveWorld, resetWorld] = useStore(state=>[state.saveWorld,state.resetWorld])

    return(
        <div id="menu">
            <button onClick={saveWorld}>save world</button>

            <button onClick={resetWorld}>reset world</button>
        </div>
    )
}