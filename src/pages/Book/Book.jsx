import React, { use } from "react";
import { FaStarHalfAlt } from "react-icons/fa";
import { Link } from "react-router";

const Book = ({ book }) => {
  const { bookName,review
, bookId, author, image,category,rating } = book;
  // const data =use(bookPromise);
  // console.log(data);
  return (
    <Link to={`/bookDetails/${bookId}`}>
        <div className="card bg-base-100 w-80 shadow-2xl">
  <figure className="p-6 rounded-2xl w-2/3 mx-auto m-10 bg-amber-100 rounded ">
    <img
      src={image}
      alt={bookName}
      className="rounded-xl h-[166px] w-auto" />
  </figure>
  <div className="card-body items-center text-center text-slate-700 bg-amber-200 ">
    <div className="flex justify-around bg-white py-2 px-10 rounded-2xl gap-30">
      {/* author name  */}
      <div className="badge badge-outline">{category}</div>
      <div className="badge badge-outline">{rating}</div>
    </div>
    <h2 className="card-title">{bookName}</h2>
    <p className="items-center flex">{(review).slice(0,200)}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    </Link>
  );
};

export default Book;
