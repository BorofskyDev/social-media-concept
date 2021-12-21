import Head from 'next/head'
import { getSession } from "next-auth/react";
import Header from '../components/Header/Header'
import Login from '../components/SocialMedia/Login/Login'
import Sidebar from '../components/SocialMedia/Sidebar/Sidebar'
import Feed from '../components/SocialMedia/Feed/Feed';



export default function Home({ session }) {
  if (!session) return <Login />;


  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>ViceBook</title>
        
      </Head>

      <Header />
    


      <main className="flex">
        <Sidebar />
        <Feed />
        {/* Widgets */}
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}