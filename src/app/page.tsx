import { Suspense } from 'react'

import { GithubProfile } from './components/github-profile'
import { LongWaitComponent } from './components/long-wait-component'

// Triade dos conceitos do NEXT => Server components, Client components e Streaming SSR

export default async function Home() {
  return (
    <div>
      <h1>Home!</h1>

      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Alias
        excepturi sint tempora, deserunt, eveniet, quo consequuntur hic fugit
        repellendus fuga rerum aliquid quia! Voluptatibus, libero animi! Dolorem
        veniam iusto fuga?
      </p>

      <Suspense fallback={<p>Carregando LongWaitComponent...</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Carregando GithubProfile...</p>}>
        <GithubProfile />
      </Suspense>
    </div>
  )
}
