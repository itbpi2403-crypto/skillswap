export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-center mb-8">SkillSwap</h1>
      <p className="text-xl text-center mb-8">Platform for mutual learning inside university</p>
      <div className="flex justify-center space-x-4">
        <a href="/login" className="bg-blue-500 text-white px-6 py-2 rounded">Login</a>
        <a href="/register" className="bg-green-500 text-white px-6 py-2 rounded">Register</a>
      </div>
    </div>
  )
}
