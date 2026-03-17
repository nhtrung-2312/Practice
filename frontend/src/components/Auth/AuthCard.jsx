export default function AuthCard({ children, title }) {
    return (
    <div className="flex justify-center mt-10 px-4">
      <div className="w-full max-w-xl rounded-xl bg-white p-12 shadow-md">
        {title && (
          <h2 className="mb-10 text-center text-3xl font-bold text-gray-900">
            {title}
          </h2>
        )}
        {children}
      </div>
    </div>
  );
};