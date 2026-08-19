import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({data}) => {
    console.log(data);
    //const [allBooks , setAllBooks] = useState([]);

    // useEffect(()=>{
    //     fetch('booksData.json')
    //     .then(res => res.json())
    //     .then(data=>{
    //         // console.log(data);
    //         setAllBooks(data)
    //     })
    // }
    // ,[])
    // const bookPromise = fetch('./booksData.json').then(rse=>rse.json())
    return (
        <div className='py-10'>
            <h1 className="text-3xl text-center p-6">Books</h1>
            {/* <Suspense fallback={<div className='text-2xl text-center font-bold'>Loading</div>} >
            <Book bookPromise={bookPromise}></Book>
            </Suspense> */}
            <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center'>
                {
                    data.map(book =><Book key={book.bookId} book={book} ></Book>)
                }
            </div>
        </div>
    );
};

export default Books;