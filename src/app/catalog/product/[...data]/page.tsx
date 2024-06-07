import AddToCart from './add-to-cart'
import { TestChildren } from './test-children'

interface ProductProps {
  params: {
    data: string[]
  }
}

// Server Components => A gente não USA JavaScript no lado do cliente
// Client Components => O JavaScript é enviado  ao navegador (cliente)

// Hidratação => O servidor gera o HTML cru, e envia o JS necessário para o navegador, logo o HTML é recriado com o JS

// Streaming SSR => Ler/escrever de forma parcial + Server-side Rendering
// Renderizar um componente pelo lado do servidor de forma PARCIAL

export default function Product({ params }: ProductProps) {
  const [produtId, size, color] = params.data

  return (
    <div>
      <h1>Product</h1>

      <p>{produtId}</p>
      <p>{size}</p>
      <p>{color}</p>

      <AddToCart>
        <TestChildren />
      </AddToCart>
    </div>
  )
}
