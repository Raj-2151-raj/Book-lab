const BookCat = () => {
    return(
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 p-8">
  {/* Fiction Card */}
<div className="bg-[url('/fiii.svg')] bg-cover bg-center shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
  <h3 className="text-2xl font-bold text-purple-700 mb-2">Fiction</h3>
  <p className="text-gray-600">Explore imaginary worlds, characters, and gripping stories.</p>
</div>



  {/* Non-Fiction Card */}
  <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
    <h3 className="text-2xl font-bold text-green-700 mb-2">Non-Fiction</h3>
    <p className="text-gray-600">Read about real-life events, facts, and biographies.</p>
  </div>

  {/* Sci-Fi Card */}
  <div className="bg-white shadow-md rounded-2xl p-6 text-center hover:shadow-xl transition">
    <h3 className="text-2xl font-bold text-blue-700 mb-2">Sci-Fi</h3>
    <p className="text-gray-600">Dive into futuristic science, space, and tech adventures.</p>
  </div>
</div>

    )
}



export default BookCat;
