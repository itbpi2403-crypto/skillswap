export default function Login() {
  return (
    <div className="container mx-auto px-4 py-8 max-w-md">
      <h1 className="text-3xl font-bold text-center mb-8">Login</h1>
      <form className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-2">Email</label>
          <input type="email" id="email" className="w-full px-3 py-2 border rounded" />
        </div>
        <div>
          <label htmlFor="password" className="block mb-2">Password</label>
          <input type="password" id="password" className="w-full px-3 py-2 border rounded" />
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
      </form>
    </div>
  )
}
