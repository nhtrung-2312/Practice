import Header from "../../layout/Header"
import Footer from "../../layout/Footer"
import { Link } from "react-router-dom"

const features = [
  {
    title: "Lưu câu hỏi",
    description:
      "Khi thêm mới các bài tập vào, nó sẽ được lưu trữ vào hệ thống. Có thể truy cập bất cứ lúc nào",
  },
  {
    title: "Tạo đề kiểm tra",
    description:
      "Tạo đề kiểm tra nhanh chóng với các bài tập đã lưu trước đó.",
  },
  {
    title: "Theo dõi tiến độ",
    description:
      "Có thể theo dõi tiến trình làm bài tập thông qua các bài kiểm tra.",
  },
]

const steps = [
  {
    title: "Tạo các câu hỏi từ đề cương ôn tập",
    description: "Tạo các câu hỏi trắc nghiệm, bài tập thực hành thông qua giao diện đơn giản.",
  },
  {
    title: "Tạo bài kiểm tra",
    description: "Từ các bộ bài tập đã lưu, có thể tạo ra các đề kiểm tra một cách nhanh chóng.",
  },
  {
    title: "Kiểm tra kết quả",
    description: "Chấm điểm tự động dựa trên các câu hỏi và câu trả lời đã lưu sẵn.",
  },
  {
    title: "Theo dõi tiến độ",
    description: "Theo dõi tiến trình ôn bài tập của bản thân thông qua các bài kiểm tra đã làm.",
  }
]

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 via-white to-slate-100 text-slate-900">
      <Header />
      <main>
        <section className="relative overflow-hidden py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-16 lg:grid-cols-2 lg:items-center">
              <div>
                <h1 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
                  Ôn luyện tập một cách hiệu quả hơn
                </h1>
                <p className="mt-6 text-lg leading-relaxed text-slate-600">
                  Lấy ý tưởng từ Azota, Practice giúp học sinh tự ôn tập bằng cách tạo ra đề kiểm tra từ các câu hỏi từ đề cương cho trước.
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link to="/Login" className="inline-flex items-center justify-center rounded-full bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500">
                    Bắt đầu ngay
                  </Link>
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-6 text-sm text-slate-500">
                  <span className="inline-flex items-center gap-2">
                    <span className="h-2 w-2 rounded-full bg-indigo-500" />
                    Thiết lập đơn giản, dễ dàng sử dụng
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute -right-16 -top-10 h-72 w-72 rounded-3xl bg-indigo-100 opacity-70 blur-3xl" />
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80"
                    alt="Students collaborating"
                    className="h-80 w-full object-cover"
                  />
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-slate-900">Ôn tập cùng bạn bè</h2>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      Có thể chia sẽ bài tập cho bạn bè, theo dõi tiến trình làm bài tập của bạn bè thông qua các bài kiểm tra đã làm.
                    </p>
                    <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
                      <span className="inline-flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-indigo-600" />
                        Điểm số trực tiếp
                      </span>
                      <span className="h-px w-4 bg-slate-200" />
                      <span className="inline-flex items-center gap-2">
                        <span className="h-2 w-2 rounded-full bg-indigo-600" />
                        Thao tác nhanh gọn
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section id="tinh-nang" className="border-t border-slate-200 bg-white py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="text-center">
              <h2 className="text-3xl font-bold text-slate-900">Tính năng nổi bật</h2>
              <p className="mt-4 text-slate-600">
                Từ việc tạo câu hỏi, tạo đề kiểm tra đến theo dõi tiến trình ôn tập, Practice cung cấp tất cả những gì bạn cần để ôn luyện hiệu quả.
              </p>
            </div>
            <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {features.map(({ title, description }) => (
                <div key={title} className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
                  <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                  <p className="mt-3 text-sm text-slate-600">{description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
        <section id="cach-su-dung" className="py-20">
          <div className="mx-auto max-w-6xl px-4">
            <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <h2 className="text-3xl font-bold text-slate-900">Hướng dẫn sử dụng</h2>
                <p className="mt-4 text-slate-600">
                  Để bắt đầu ôn luyện, chỉ cần làm theo 4 bước đơn giản sau:
                </p>
                <ol className="mt-8 space-y-6 text-sm text-slate-600">
                  {steps.map((step, index) => (
                    <li key={step.title} className="flex gap-4">
                      <span className="mt-1 flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-sm font-semibold text-white">
                        {index + 1}
                      </span>
                      <div>
                        <p className="font-semibold text-slate-900">{step.title}</p>
                        <p className="mt-1">{step.description}</p>
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
              <div className="relative">
                <div className="absolute -right-16 -top-10 h-72 w-72 rounded-3xl bg-indigo-100 opacity-70 blur-3xl" />
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-lg">
                  <img
                    src="https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=1200&q=80"
                    alt="Teacher working on laptop"
                    className="h-80 w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};
