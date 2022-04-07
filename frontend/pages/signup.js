import Layout1 from '../components/Layout';
import Link from 'next/link';
import SignupComponents from '../components/auth/SignupComponents'
import Document from 'next/dist/pages/_document';
const Signup = () => {
 return (
     <Layout1>
         <h2 className="text-center pt-4 pb-4">
             Signup 
         </h2>
         <div className="row">
             <div className="col-md-6 offset-md-3">
             <SignupComponents/>
             </div>
         </div>
     </Layout1>
 );
};
    
export default Signup;