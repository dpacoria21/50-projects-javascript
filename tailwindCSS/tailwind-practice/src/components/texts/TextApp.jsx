
export const TextApp = () => {
  return (
      <>
          <p className="font-sans text-4xl bg-sky-600">Font Family practices</p>
          <p className="font-sans hover:font-serif">The quick brown fox ...</p>
          <p className="font-serif md:font-serif">The quick brown fox ...</p>
          <p className="font-mono">The quick brown fox ...</p>


          {/* Tenemos hasta el tamano 9xl */}

          <p className="font-sans text-4xl bg-sky-600">Tamaños del texto</p>
          <p className="text-sm">The quick brown fox</p>
          <p className="text-base">The quick brown fox</p>
          <p className="text-lg">The quick brown fox</p>
          <p className="text-xl">The quick brown fox</p>
          <p className="text-2xl">The quick brown fox</p>
          <p className="text-3xl">The quick brown fox</p>
          <p className="text-4xl">The quick brown fox</p>
          <p className="text-5xl">The quick brown fox</p>

          {
            /* line-height 
              controlar la separacion de las lineas de texto
              text-base/3  ---> text-base/10
              de menor a mayor espacio
              con text-[15px] podemos definir un valor arbitrario
            */
          }

          <p className="font-sans text-4xl bg-sky-600">Line Height</p>
          <p className="text-base/6">So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
          <br />
          <p className="text-base/7">So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>
          <br />
          <p className="text-base/loose">So I started to walk into the water. I won't lie to you boys, I was terrified. But I pressed on, and as I made my way past the breakers a strange calm came over me. I don't know if it was divine intervention or the kinship of all living things but I tell you Jerry at that moment, I was a marine biologist.</p>

          <p className="font-sans text-4xl bg-sky-600">Aplicando Condicionales</p>
          <p className="text-sm hover:text-base">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magni, assumenda! Molestias, perspiciatis soluta voluptate laborum officia officiis! Facilis, reiciendis assumenda quos, minima neque esse ad non, architecto mollitia perferendis voluptatibus.</p>
          <br />
          <p className="text-sm md:text-xl">Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem placeat, suscipit, harum nesciunt ullam numquam est alias tempore deleniti debitis ad tempora maiores natus? Ut totam rem cumque? Doloremque, fugiat.</p>
          <br />
          <p className="text-[20px]">Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa omnis cupiditate, dignissimos voluptatibus ratione iusto minima, ipsum doloribus quaerat expedita molestias. Possimus inventore accusamus aspernatur voluptatibus, quos consequuntur magni quaerat?</p>
          {/* 
          smoothing
            - subpixel-antialiased
            - antialiased
          Style text (italic)
            - italic
            - not-italic
           */}
          <p className="font-sans text-4xl bg-sky-600">Smoothing</p>
          <p className="subpixel-antialiased italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt saepe animi, est nesciunt aliquid voluptate eveniet sunt labore quod. Nihil perspiciatis amet sunt pariatur omnis fuga, illo totam fugit libero!</p>
          <br />
          <p className="antialiased not-italic">Lorem ipsum dolor sit amet consectetur adipisicing elit. Id laboriosam vitae voluptates corporis perspiciatis assumenda, aspernatur vero saepe exercitationem neque aliquam doloribus expedita soluta cupiditate cumque ipsam sint illum accusamus.</p>

          {/* Font Weight 
            - thin
            - extralight
            - light
            - normal
            - medium
            - semibold
            - bold
            - extrabold
            - black
            - font-[600] (custom)
          
          */}
          <p className="font-sans text-4xl bg-sky-600">Font Weight</p>
          <p className="font-thin">Este es un texto random!</p>
          <p className="font-extralight">Este es un texto random!</p>
          <p className="font-light md:font-black">Este es un texto random!</p>
          <p className="font-normal hover:font-bold">Este es un texto random!</p>
          <p className="font-medium">Este es un texto random!</p>
          <p className="font-semibold">Este es un texto random!</p>
          <p className="font-bold">Este es un texto random!</p>
          <p className="font-extrabold">Este es un texto random!</p>
          <p className="font-black">Este es un texto random!</p>
          <p className="font-[1000]">Este es un texto random!</p>

      </>    
  )
}
