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
    <div className="bg-gray-700 min-h-screen rounded overflow-hidden">
      <Head>
        <title>ViceBook</title>
        
      </Head>

      <Header />
      
      

      <main className="relative min-h-screen flex items-center justify-center  ">
          
        <div className="
          grid-background 
          bg-gradient-to-b 
          from-cyan-800 via-black to-fuchsia-800 
          absolute 
          inset-0 p-2 
          grid grid-cols-12 gap-2 
          transform -skew-y-12 scale-125 ">
          {/* Row 1 */}
            <div className="col-span-2 bg-gradient-to-r from-gray-700 via-gray-900 to-black"></div>
            <div className="col-span-5 bg-gradient-to-r from-gray-700 via-gray-900 to-black"></div>
            <div className="col-span-1 bg-gradient-to-r from-gray-700 via-gray-900 to-black"></div>
            <div className="col-span-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black"></div>
          {/* Row 2 */}
            <div className="col-span-5 bg-gradient-to-r bg-radial-at-tr from-blue-800 via-blue-gray-900 to-cool-gray-900 rounded "></div>
            <div className="col-span-3 bg-gradient-to-r bg-radial-at-tr from-blue-800 via-blue-gray-900 to-cool-gray-900 rounded "></div>
            <div className="col-span-2 bg-gradient-to-r bg-radial-at-tr from-blue-800 via-blue-gray-900 to-cool-gray-900 rounded "></div>
            <div className="col-span-2 bg-gradient-to-r bg-radial-at-tr from-blue-800 via-blue-gray-900 to-cool-gray-900 rounded "></div>
          {/* Row 3 */}
            <div className="col-span-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded "></div>
            <div className="col-span-7 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded"></div>
            <div className="col-span-1 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded "></div>
          {/* Row 4 */} 
            <div className="col-span-2 bg-gradient-to-r bg-radial-at-tl from-blue-800 via-blue-gray-900 to-cool-gray-900 rounded "></div>
            <div className="col-span-4 bg-gradient-to-r bg-radial-at-tl from-blue-800 via-blue-gray-900 to-cool-gray-900 rounded"></div>
            <div className="col-span-6 bg-gradient-to-r bg-radial-at-tl from-blue-800 via-blue-gray-900 to-cool-gray-900 rounded"></div>
          {/* Row 5 */}
            <div className="col-span-5 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded"></div>
            <div className="col-span-5 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded"></div>
            <div className="col-span-2 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded"></div>
          {/* Row 6 */}
            <div className="col-span-4 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded"></div>
            <div className="col-span-7 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded"></div>
            <div className="col-span-1 bg-gradient-to-r from-gray-700 via-gray-900 to-black rounded"></div>
           
            
            
        </div>
        <div className='relative flex'> 
          <Sidebar />
          <Feed posts={posts}/>
          <Widgets />
        </div>
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