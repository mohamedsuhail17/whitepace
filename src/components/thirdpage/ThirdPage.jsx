import circleimg from "/src/assets/Work Together Image.png"
export default function ThirdPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
        <h1 className="relative text-5xl font-bold text-center leading-tight text-gray-800">
            Work together
        </h1>
        <p className="mt-6 text-center text-gray-600 text-lg max-w-xs leading-8">
        With whitepace, share your notes with your colleagues and collaborate on them.
        You can also publish a note to the internet and share the URL with others.
      </p>
        <button className="mt-10 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center gap-2">
        Try it now
        <span>&rarr;</span>
        </button>
        <img src={circleimg} alt="" className="mt-15 w-50 max-w-xs h-36" />
    </div>
  )
}