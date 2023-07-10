export const Margin = () => {
  return (
    <>
      <div className="flex flex-col m-5">
        <button className="bg-red-400 mb-8">example</button>
        <button className="bg-red-400 ml-8 mb-8">example</button>
        <button className="bg-red-400 mr-8">example</button>
        <button className="bg-red-400 mt-8">example</button>
      </div>

      <div className="flex flex-col">
        <button className="bg-gray-200 p-4 mx-10">Button</button>
        <button className="bg-gray-200 p-4 mx-10 my-10">Button</button>
        <button className="bg-gray-200 p-4 mx-10">Button</button>
      </div>
    
      <div className="flex flex-col">
        <button className="bg-gray-200 p-4 m-10">Button</button>
      </div>

      {/* Hasta ahora es lo mismo que el padding
          Pero con el margin podemos darle valores negativos */}
      <br />
      <div className="flex flex-col bg-sky-400 w-36 h-16">
      </div>
      <button className="bg-gray-400 py-4 px-10 -mt-8">Button</button>

      <div dir="ltr">
          <button className="bg-red-200 p-3 me-5 ">button1</button>
          <br />
          <button className="bg-red-200 p-3 ms-5">button2</button>
      </div>
      <div dir="rtl">
        <button className="bg-red-200 p-3 ms-5 ">button1</button>
        <br />
        <button className="bg-red-200 p-3 me-5">button2</button>
      </div>

      <button className="bg-sky-500 px-6 py-3 hover:p-5">Hover Effect</button>

      <br />

      <button className="bg-sky-500 mt-5 px-3 py-6 md:px-6 md:py-3">
        Breakpoint Effect
      </button>
      

    </>
  )
}
