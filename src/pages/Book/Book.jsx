import React, { use } from "react";

const Book = ({ book }) => {
  const { bookName,review
, bookId, author, image } = book;
  // const data =use(bookPromise);
  // console.log(data);
  return (
    <div className="card bg-base-100 w-80 shadow-2xl">
  <figure className="p-6 rounded-2xl w-2/3 mx-auto m-10 bg-amber-100 rounded ">
    <img
      src={image}
      alt={bookName}
      className="rounded-xl h-[166px] w-auto" />
  </figure>
  <div className="card-body items-center text-center text-slate-700 bg-amber-200 ">
    <div className="">
      {/* author name  */}
    </div>
    <h2 className="card-title">{bookName}</h2>
    <p className="items-center flex">{(review).slice(0,200)}</p>
    <div className="card-actions">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  );
};

export default Book;
