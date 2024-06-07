export default async function Home() {
  // Triade dos conceitos do NEXT => Server components, Client components e Streaming SSR

  await new Promise((resolve) => setTimeout(resolve, 2000))

  const response = await fetch('https://api.github.com/users/natanfoleto')
  const user = await response.json()

  return <pre>{JSON.stringify(user, null, 2)}</pre>
}
