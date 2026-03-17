import { Link } from 'react-router-dom'
import AuthCard from '../../Auth/AuthCard'
import InputField from '../../ui/InputField'
import Button from '../../ui/Button'
import Logo from "../../layout/Logo"

export default function Login() {
    return (
    <main className="min-h-screen bg-slate-100">
      <header className="sticky top-0 z-30 backdrop-blur">
        <div className="flex max-w-6xl items-center justify-between px-4 py-4">
          <Logo />
        </div>
      </header>

      <AuthCard title="Đăng nhập">
        <form className="space-y-6" autoComplete="on">
          <InputField placeholder="Nhập tên đăng nhập, số điện thoại hoặc email" />
          <InputField type="password" placeholder="Nhập mật khẩu" />
          <div className="flex justify-start">
            <Link to="/forgot-password" className="text-sm font-medium text-gray-600 hover:text-indigo-600 transition">
              Quên mật khẩu?
            </Link>
          </div>
          <Button className="w-full">
            Đăng nhập
          </Button>
        </form>
        <div className="mt-8 text-center text-sm text-gray-600">
          <span>Bạn chưa có tài khoản? </span>
          <Link to="/Register" className="font-medium text-blue-600 hover:text-blue-700">
            Nhấn để tạo tài khoản
          </Link>
        </div>
      </AuthCard>
    </main>
    )
}