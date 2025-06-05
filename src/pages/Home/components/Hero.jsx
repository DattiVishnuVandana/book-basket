import { Link } from "react-router-dom"

export const Hero = () => {
  return (
    <section className="flex flex-col lg:flex-row dark:text-slate-100 items-center ">
        <div className="text my-5">
            <h1 className="text-5xl font-bold text-rose-500">The Ultimate BookBasket</h1>
            <p className="text-2xl my-7 px-1  dark:text-slate-300">BookBasket is the world's most popular and authoritative source for computer science ebooks. Find ratings and access to the newest books digitally.</p>
            <Link to="/products" type="button" className="text-white bg-rose-700 hover:bg-rose-500 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-base px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-rose-700 focus:outline-none dark:focus:ring-pink-800">Explore eBooks</Link>
        </div>
        <div className="visual my-5 lg:max-w-xl">
            <img className="rounded-lg max-h-full" src="https://img.freepik.com/free-vector/hand-drawn-flat-design-stack-books_23-2149342941.jpg?semt=ais_hybrid&w=740" alt="CodeBook Hero Section" />
        </div>
    </section>
  )
}
