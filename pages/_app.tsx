import "../public/styles/index.css";
import Header from "../components/header";
import PageContainer from "../components/page-container";
import Footer from "../components/footer";
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Header />
      <PageContainer>
        <Component {...pageProps} />;
      </PageContainer>
      <Footer />
    </>
  );
}
