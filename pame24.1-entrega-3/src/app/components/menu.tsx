import React from "react";

function Menu (){
    return (
        <div className="w-[40vw] h-[50vh] bg-zinc-950 shadow-md rounded-lg my-[10vh] flex flex-col items-center justify-center">
            <input type="text" className="w-[25vw] h-[5vh] border border-gray-300 rounded-md mb-4 px-4 py-2 text-black" placeholder="Nome de usuário ou Email"></input>
            <input type="text" className="w-[25vw] h-[5vh] border border-gray-300 rounded-md mb-8 px-4 py-2 text-black" placeholder="Senha"></input>
            <button className="w-[5vw] h-[5vh] bg-orange-700 rounded-md mb-2"> Entrar </button>
            <text className="text-gray-700 mb-4">------------------ou------------------</text>
            <button className="w-[8vw] h-[5vh] bg-orange-700 rounded-md"> Cadastre-se </button>
    </div>
    )
}

export default Menu