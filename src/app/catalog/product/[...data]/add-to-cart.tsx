'use client'

import { useState, type ReactNode } from 'react'
import { Test } from './test'

export default function AddToCart({ children }: { children: ReactNode }) {
  const [count, setCount] = useState(0)

  function addToCart() {
    setCount((state) => state + 1)
  }

  return (
    <div>
      <button onClick={addToCart}>Adicionar ao carrinho ({count})</button>
      <Test />
      {children}
    </div>
  )
}

/* 
  Client Boundaries => 
    Como esse componente foi definido como Client, qualquer 
    componente declarado dentro dele também será um Client Component

    Uma barreira é criada, então daqui pra baixo tudo sera Client, e não precisa
    colocar a diretiva 'use cliente'
*/

// Uma forma de burlar o comportamento acima, é passando o componente como um children de um Server Component
