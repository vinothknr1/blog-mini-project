import Layout1 from '../components/Layout';
import Link from 'next/link';
import SignupComponents from '../components/auth/SignupComponents'
const Signup = () => {
 return (
     <Layout1>
         <h2>
             signup page
         </h2>
         <SignupComponents/>
     </Layout1>
 );
};
    
export default Signup;