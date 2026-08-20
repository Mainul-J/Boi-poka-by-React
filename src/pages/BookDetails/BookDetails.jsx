import React from 'react';
import { useLoaderData, useParams } from 'react-router';

const BookDetails = () => {
    const {id} = useParams();
    const data = useLoaderData()
    const bookId = parseInt(id);  
    const singleBook = data.find(book=>book.bookId === bookId);
    const {bookName,author,image,review,tags} = singleBook
    console.log(singleBook,typeof bookId,data);
    return (
        <div className=' border p-2 rounded-2xl my-10'>
            <div className="flex items-center bg-red-200 rounded-xl">
            <div className="rounded-2xl w-1/2 bg-slate-400">
                <img className='w-full  py-5 px-4' src={image} alt="" />
            </div>
            <div className="w-1/2 ml-20">
                <h5 className="text-xl font-semibold my-2">{bookName}</h5>
                <h1 className='text-2xl font-bold my-2'>{author}</h1>
                <p className='w-6/12'>{review}</p>
                <div className='flex gap-5 my-5'>
                    {tags.map((tag) => <button className='btn' key={bookId}>{tag}</button>)}
                </div>
            </div>
            </div>
        </div>
//         <div className="flex items-center justify-between gap-10 my-10 bg-red-200 rounded-xl">
//     <div className="w-1/2 rounded-2xl bg-slate-400">
//         <img
//             className="w-full py-5 px-4"
//             src={image}
//             alt=""
//         />
//     </div>

//     <div className="w-1/2">
//         <h5 className="text-xl font-semibold my-2">{bookName}</h5>
//         <p>{review}</p>
//     </div>
// </div>
    );
};

export default BookDetails;