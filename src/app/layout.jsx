import Header from "./component/header/header"
import Footer from "./component/footer/footer"
import Cartprovider from "./component/context/context";
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <Cartprovider>
       <Header/> 
         <main>{children}</main>
        <Footer/> 
         </Cartprovider>
        </body>
       
    </html>
  );
}
