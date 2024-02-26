const Header = ({ searchData, setSearchData, setBtn }) => {
  return (
    <header
      style={{ backgroundColor: "#FFFFFF" }}
      className=" p-2  sticky top-0 z-50 "
    >
      <div className="container mx-auto flex justify-around items-center shadow-xl">
        <img
          className="w-32 rounded-3xl h-20 object-cover"
          src="https://i.etsystatic.com/21215114/r/il/d0c7bd/4104680841/il_fullxfull.4104680841_hxug.jpg"
          alt="Food"
        />

        <nav>
          <ul className="space-x-8 flex w-1/2 justify-between items-center text-xs font-bold ">
            <li className="hover:text-yellow-600  transition-all flex items-center gap-2">
              <input
                className="outline:none border-2 border-black rounded-md p-2 "
                type="text"
                value={searchData}
                onChange={(e) => setSearchData(e.target.value)}
                placeholder="search"
              />
              <button
                onClick={() => setBtn(true)}
                className="bg-blue-500  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded transition duration-300 ease-in-out"
              >
                Search
              </button>
            </li>
            <li className="hover:text-yellow-600  transition-all">Offers</li>
            <li className="hover:text-yellow-600  transition-all">Help</li>
            <li className="hover:text-yellow-600  transition-all ">Signin</li>
            <li className="hover:text-yellow-600  transition-all">Cart</li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
