import Logo from "./Logo"
import { Link } from "react-router-dom"

export default function Header() {
  return (
    <header className="sticky top-0 z-30 bg-white/70 backdrop-blur shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
        <Logo />
        <nav className="hidden items-center gap-6 text-sm font-medium text-slate-700 md:flex">
          <a href="#tinh-nang" className="hover:text-indigo-600">
            Tính năng
          </a>
          <a href="#cach-su-dung" className="hover:text-indigo-600">
            Cách hoạt động
          </a>
        </nav>
        <div className="flex items-center gap-3">
          <Link to="/Login" className="rounded-full bg-indigo-600 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-indigo-700">
            Đăng nhập
          </Link>
        </div>
      </div>
    </header>
  )
}
