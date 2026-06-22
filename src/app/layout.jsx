import Header from "./component/header/header"
import Footer from "./component/footer/footer"
export default function RootLayout({ children }) {
  return (
    <html>
      <body>
       <Header></Header>
         <main>{children}</main>
        <Footer></Footer>
        </body>
    </html>
  );
}
