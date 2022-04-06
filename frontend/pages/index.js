import Layout1 from '../components/Layout';
import Link from 'next/link';
const Index = () => {
 return (
     <Layout1>
         <h2>
             index page
         </h2>
         <Link href="/signup">
              <a >Signup</a>
         </Link>
        
     </Layout1>
 );
};
    
export default Index;