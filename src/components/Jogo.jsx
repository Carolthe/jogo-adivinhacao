import { useState } from "react"

export default function Jogo (){
    const [numeroEscolhido, setNumeroEscolhido]=useState("")
    const [buttonClick, setbuttonClick] = useState("")
    
    const [buttonSorteio, setButtonSorteio] = useState ("")

    const handleInputChange = (ev) =>{
        setNumeroEscolhido(ev.target.value)
    }
    const handleButtonClick = ()=>{
        setbuttonClick(numeroEscolhido)
    }
    
    function clickSorteio (){
        const numero = Math.floor(Math.random() * 21)
        setButtonSorteio(numero)
    }


    return(
        <>
        <h1>Jogo de Adivinhação de números</h1>
        <h2>Escolha um número de 1 á 20</h2>
        <div className="button-input" >
        <input
        type="number"
        onChange={handleInputChange}/>
        <button
        onClick={handleButtonClick}
        >Click para salvar o seu número</button>
        </div>
        <p>número escolhido: {buttonClick}</p>
        
        <button
        onClick={clickSorteio}
        >Click para sortear o número</button>
        {buttonSorteio &&
        <p>Número sorteado: {buttonSorteio} </p>
       } </>
    )
}