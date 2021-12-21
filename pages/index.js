import Head from 'next/head'
import { getSession } from "next-auth/react";
import Header from '../components/Header/Header'
import Login from '../components/SocialMedia/Login/Login'
import Sidebar from '../components/SocialMedia/Sidebar/Sidebar'
import Feed from '../components/SocialMedia/Feed/Feed';
import Widgets from '../components/SocialMedia/Widgets/Widgets';
import { db } from '../firebase';



export default function Home({ session, posts }) {
  if (!session) return <Login />;


  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>ViceBook</title>
        
      </Head>

      <Header />
    


      <main className="flex">
        <Sidebar />
        <Feed posts={posts}/>
        <Widgets />
      </main>
    </div>
  )
}

export async function getServerSideProps(context) {
  const session = await getSession(context);

  const posts = await db.collection("posts").orderBy("timestamp", "desc").get();

  const docs = posts.docs.map(post => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }));

  return {
    props: {
      session
    }
  }
}