import { Link } from 'react-router-dom'
import AuthCard from '../../Auth/AuthCard'
import InputField from '../../ui/InputField'
import Button from '../../ui/Button'
import Logo from "../../layout/Logo"

export default function Register() {
    return (
    <main className="min-h-screen bg-slate-100">
      <header className="sticky top-0 z-30 backdrop-blur">
        <div className="flex max-w-6xl items-center justify-between px-4 py-4">
          <Logo />
        </div>
      </header>

      <AuthCard title="Đăng ký tài khoản">
        <form className="space-y-6" autoComplete="on">
          <InputField placeholder="Nhập tên đăng nhập, số điện thoại hoặc email" />
          <InputField type="password" placeholder="Nhập mật khẩu" />
          <InputField type="password" placeholder="Nhập lại mật khẩu" />
          <Button className="w-full">
            Đăng ký
          </Button>
        </form>
        <div className="mt-8 text-center text-sm text-gray-600">
          <span>Đã có tài khoản? </span>
          <Link to="/Login" className="font-medium text-blue-600 hover:text-blue-700">
            Nhấn để đăng nhập
          </Link>
        </div>
      </AuthCard>
    </main>
    )
}