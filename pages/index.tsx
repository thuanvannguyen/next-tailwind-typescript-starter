import Link from 'next/link'
import Layout from '../components/Layout'
import ButtonSubmit from '../components/Button'

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className="text-lime-400 text-3xl">Hello Next.js 👋</h1>

    <p className="mr-2">The Button with Ant-Design</p>
    <ButtonSubmit />

    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
)

export default IndexPage
