import { Link } from "react-router-dom"

export default function Logo() {
    return (
        <Link to="/" className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-lg bg-indigo-600 text-white grid place-items-center font-bold">P</div>
            <span className="text-lg font-semibold">Practice</span>
        </Link>
    )
}