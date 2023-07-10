export const Padding = () => {
  return (
    <>
    
        {/* Agregando padding a un solo lado
            (left - right - top - bottom)
            * pl-4
            * pr-4
            * pr-4
            * pt-4
        */}

        <div className="m-5">
            <button className="bg-blue-400 pl-5 mr-5">Saludos</button>
            <button className="bg-blue-400 pr-5 mr-5">Genial</button>
            <button className="bg-blue-400 pt-5 mr-5">No me digas</button>
            <button className="bg-blue-400 pb-5 mr-5">Esencia</button>
        </div>

        <br />

        {/* Agregar padding en el eje X y Y 
        
            * px-5
            * py-5

        */}
        <div className="m-5">
            <button className="bg-blue-400 px-5 mr-5">Saludos</button>
            <button className="bg-blue-400 py-5 mr-5">Genial</button>
        </div>

        {/* Agregar padding a todos los lados 
            * p-8 
        */}

        <div className="m-5">
            <button className="bg-blue-400 p-4">Padding</button>
        </div>

        {/* Logical properties 
            dir="ltr"  left-to-right
            dir="rtl"  right-to-left
        */}

        <div className="m-5" dir="ltr">
            <button className="bg-blue-400 ps-7 mb-5">button</button>
            <br />
            <button className="bg-blue-400 pe-7">button</button>
        </div>

        <div className="m-5" dir="rtl">
            <button className="bg-blue-400 ps-7 mb-5">button</button>
            <br />
            <button className="bg-blue-400 pe-7 mb-5">button</button>
        </div>

        {/* Using hover and breakpoints */}

        <div className="m-5">
            <button className="bg-purple-300 px-6 py-2 hover:px-2 hover:py-6">saludos</button>
        </div>
        <div className="m-5">
            <button className="font-mono text-xl font-semibold bg-green-500 px-2 py-6 md:px-6 md:py-2">saludos</button>
        </div>
    
    </>
  )
}
