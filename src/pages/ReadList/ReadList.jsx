// import React from 'react';
import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import Book from "../Book/Book";
const ReadList = () => {
    // worst case or examples
    const data = useLoaderData();    
    const [readList , setReadList] = useState([])
    useEffect(()=>{
        const storedBookData = getStoredBook();
        const convertedStoredBooks = storedBookData.map(id=>parseInt(id))
        const myReadList = data.filter(book=>convertedStoredBooks.includes(book.bookId))
        setReadList(myReadList);
    },[])
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read book List</Tab>
          <Tab>My whish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-blue-400 text-4xl font-bold text-center py-5">book I read {readList.length}</h2>

          <div className="flex flex-wrap gap-x-50 gap-y-10 justify-center items-center py-20">
            {
            readList.map((b,index)=><Book key={index+1} book={b}></Book>)
          }
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-emerald-400 text-4xl font-bold text-center py-5">Book I want to read</h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
