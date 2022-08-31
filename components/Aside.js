import Link from 'next/link';

export default function Header() {
  return (
    <aside className="fixed inset-0 h-full w-1/4 bg-black text-white my-color">
      <div className="px-8 pb-8 absolute bottom-0 text-6xl leading-medium font-semibold">
        <Link href="/">
          <a>
            ABCs <br /> of Netlify
          </a>
        </Link>
      </div>
    </aside>
  );
}
