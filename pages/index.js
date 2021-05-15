import Head from 'next/head'
import MainLayout from '../src/components/layouts/MainLayout'

export default function Home() {
  return (
    <MainLayout>
      <Head>
        <title>Home</title>
      </Head>
      
      <h1>Home pages</h1>
      
    </MainLayout>
  )
}
