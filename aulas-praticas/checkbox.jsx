import { useState } from "react"

function App(){
    const [cores, setCores] = useState("")

    const coresArray = ["azul", "roxo", "laranja", "verde", "vermelho", "cinza"]

    function handleChange({ target }){

        if(target.checked){
            setCores([...cores, target.value])
        }else{
            setCores(cores.filter((cor) => cor !== target.value))
        }



    }
    return(
        <form>
            {coresArray.map((cor) => (
                <label key={cor}>
                    <input type="checkbox" value={cor} checked={cores.includes(cor)} onChange={handleChange}/> {cor}
                </label>
            ))}

        </form>
    )
}

export default App