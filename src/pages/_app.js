import "@/styles/globals.css";
import tailwindConfig from "../../tailwind.config";
import { useRouter } from "next/router";
export default function App({ Component, pageProps }) {
   const router = useRouter()
   const { page } = router.query;
  console.log(page)
  return <Component {...pageProps} />;
}
