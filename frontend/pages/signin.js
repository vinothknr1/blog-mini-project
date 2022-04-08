import Layout1 from '../components/Layout';
import SigninComponents from '../components/auth/SigninComponents'
import Document from 'next/dist/pages/_document';
const Signin = () => {
 return (
     <Layout1>
         <div className="container-fluid">
         <h2 className="text-center pt-4 pb-4">
             Signin
         </h2>
         <div className="row">
             <div className="col-md-6 offset-md-3">
             <SigninComponents/>
             </div>
         </div>
         </div>
     </Layout1>
 );
};
    
export default Signin;