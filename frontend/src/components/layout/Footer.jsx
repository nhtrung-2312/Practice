import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12">
      <div className="mx-auto max-w-6xl px-4">
        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
          <div className="space-y-2">
            <Logo />
            <p className="text-sm text-slate-600">Giúp các học sinh có quả trình ôn tập tốt hơn.</p>
          </div>
          <div className="flex flex-wrap gap-8 text-sm text-slate-600">
            <div>
              <h3 className="font-semibold text-slate-900">Thông tin liên hệ</h3>
              <ul className="mt-3 space-y-2">
                <li>
                  <a className="hover:text-indigo-600">
                    Email: nhtrung2312@gmail.com
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/TrunnVipPzo" className="hover:text-indigo-600">
                    Facebook
                  </a>
                </li>
                <li>
                  <a href="https://www.discord.com/users/404187538358665217" className="hover:text-indigo-600">
                    Discord
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-10 border-t border-slate-200 pt-6 text-sm text-slate-500">
          © {new Date().getFullYear()} Practice. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
