export default function Products() {
  return (
    <div className="max-w-screen-xl grid grid-cols-1 md:grid-cols-2 py-8 px-4 gap-8 m-auto">
      {/* IMAGE */}
      <div className="grid grid-cols-2  md:grid-cols-1 gap-4 lg:gap-8">
        {/* BIG IMG */}
        <div className="">
          <img
            src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Les Paul"
            className="rounded-xl object-cover aspect-square"
          />
        </div>

        {/* GRID IMG */}
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Les Paul"
            className="rounded-xl object-cover aspect-square "
          />

          <img
            src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Les Paul"
            className="rounded-xl object-cover aspect-square "
          />

          <img
            src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Les Paul"
            className="rounded-xl object-cover aspect-square "
          />

          <img
            src="https://images.unsplash.com/photo-1456948927036-ad533e53865c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="Les Paul"
            className="rounded-xl object-cover aspect-square "
          />
        </div>
      </div>

      {/* CONTENT */}
      <div className="">
        <div className=" md:sticky  md:top-0">
          {/* Pre Order */}
          <div>
            <span className="rounded-full py-0.5 px-3 text-xs text-blue-600 font-medium border-[1px] border-blue-600 bg-gray-100 ">
              Pre Order
            </span>
          </div>

          {/* HEADING */}
          <div className="mt-8 flex justify-between">
            <h1 className=" text-xl  sm:text-2xl font-bold max-w-[19rem] ">
              Fun Product That Does Something Cool
            </h1>
            <p className=" text-lg   font-bold">$119.99</p>
          </div>

          {/* RATE */}
          <div className="mt-2">
            <p className="text-sm">Highest Rated Product</p>
            <div className=" -ml-0.5 flex mt-2">
              <svg
                className="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
              <svg
                className="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg
                className="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg
                className="h-5 w-5 text-yellow-400"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>

              <svg
                className="h-5 w-5 text-gray-200"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
              </svg>
            </div>
          </div>

          {/* DESCRIPTION */}
          <div className="mt-4">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa
              veniam dicta beatae eos ex error culpa delectus rem tenetur,
              architecto quam nesciunt, dolor veritatis nisi minus inventore,
              rerum at recusandae?
            </p>
            <a href="#" className=" block underline text-sm font-medium mt-2">
              Read More
            </a>
          </div>

          <form
            action="
            "
            className="mt-8"
          >
            {/* SELECT */}
            <div>
              {/* COLOR */}
              <div>
                <p className="text-sm font-medium mb-1">Color</p>

                {/* BUTTON */}
                <div className="flex gap-1">
                  <button className=" cursor-pointer rounded-full py-1 px-3 font-medium border-[1px] text-xs ">Texas Tea</button>
                  <button className=" cursor-pointer rounded-full py-1 px-3 font-medium border-[1px] text-xs ">Fiesta Red</button>
                  <button className=" cursor-pointer rounded-full py-1 px-3 font-medium border-[1px] text-xs ">Cobalt Blue</button>
                </div>
              </div>

              {/* SIZE */}
              <div className="mt-4">
                <p className="text-sm font-medium mb-1">Size</p>

                {/* BUTTON */}
                <div className="flex gap-1">
                  <button className=" h-8 w-8 flex justify-center items-center cursor-pointer rounded-full py-1 px-3 font-medium border-[1px] text-xs ">XS</button>
                  <button className=" h-8 w-8 flex justify-center items-center cursor-pointer rounded-full py-1 px-3 font-medium border-[1px] text-xs ">S</button>
                  <button className=" h-8 w-8 flex justify-center items-center cursor-pointer rounded-full py-1 px-3 font-medium border-[1px] text-xs ">M</button>
                  <button className=" h-8 w-8 flex justify-center items-center cursor-pointer rounded-full py-1 px-3 font-medium border-[1px] text-xs ">L</button>
                  <button className=" h-8 w-8 flex justify-center items-center cursor-pointer rounded-full py-1 px-3 font-medium border-[1px] text-xs ">XL</button>
                </div>
              </div>
            </div>

            {/* ADD TO CART*/}
            <div className="mt-8 flex gap-4 items-center transition-all">
              <div className=" text-xs w-12 text-center">1</div>
              <button className=" py-3 px-5 text-white text-xs bg-green-600  hover:bg-green-500 rounded font-medium ">Add to Cart</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
