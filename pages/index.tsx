// import Link from "next/link";
import { MainLayout } from "../components/layouts/MainLayout";
import Link from "../node_modules/next/link";

export default function HomePage() {
  return (
    <MainLayout>
      <h1>Home Page</h1>
      <h1 className="title">
        Ir a <Link href="/about">About</Link>
      </h1>

      <p className={"description"}>
        Get started by editing <code className={"code"}>pages/about.js</code>
      </p>
    </MainLayout>
  );
}
