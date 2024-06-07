export async function TestChildren() {
  await new Promise((resolve) => setTimeout(resolve, 1000))

  return <h1>Hello world!</h1>
}

// Essa é uma forma de burlar o Client Boundaries, passando o componente como children
