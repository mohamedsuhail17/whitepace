import highlight from "/src/assets/vector.png"
export default function SecondPage() {
  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-6">
      <h1 className="relative text-5xl font-bold text-center leading-tight text-gray-800">
        Project<br />Management
      </h1>
      <img src={highlight} alt="" className=""/>
      <p className="mt-6 text-center text-gray-600 text-lg max-w-xs leading-8">
        Images, videos, PDFs and audio files are supported. Create math
        expressions and diagrams directly from the app. Take photos with the
        mobile app and save them to a note.
      </p>
      <button className="mt-10 bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 rounded-lg flex items-center gap-2">
        Get Started
        <span>&rarr;</span>
      </button>
      <div className="mt-12 w-full max-w-xs h-36 bg-blue-200 rounded"></div>
    </div>
  );
}