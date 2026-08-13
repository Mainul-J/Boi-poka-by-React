import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = () => {
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
    const bookPromise = fetch('./booksData.json').then(rse=>rse.json())
    return (
        <div>
            <h1 className="text-3xl text-center p-6">Books</h1>
            <Suspense fallback={<div className='text-2xl text-center font-bold'>Loading</div>} >
            <Book bookPromise={bookPromise}></Book>
            </Suspense>
        </div>
    );
};

export default Books;