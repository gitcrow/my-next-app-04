import Image from "next/image";
import styles from "./page.module.css";

console.log(process.env.SERVER_ENV_VAR);
console.log(process.env.NEXT_PUBLIC_CLIENT_ENV_VAR);


function IndexPage() {
  return (
    <div className='box page'>
      <h1>IndexPage</h1>
    </div>
  );
}
export default IndexPage;