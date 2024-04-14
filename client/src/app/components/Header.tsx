import Link from "next/link";

export default function Header() {
  return (
    <header className="flex items-center gap-6 py-4 px-6">
      <h1 className="text-3xl font-semibold">
        <Link href="/">컴포넌트 포레스트</Link>
      </h1>
      <nav>
        <ul className="flex">
          <li className="px-2">
            <Link href="/signup">회원가입</Link>
          </li>
          <li className="px-2">
            <Link href="/login">로그인</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
