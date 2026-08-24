import { useEffect, useState } from "react";
import { useLoaderData } from "react-router";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import { getStoredBook } from "../../utility/addToDB";
import Book from "../Book/Book";

const ReadList = () => {
  // worst case
  const [readList, setReadList] = useState([]);
  const facKData = useLoaderData();
  console.log("fackData", facKData);
  useEffect(() => {
    const storedBookData = getStoredBook();
    const convertedStoredBooks = storedBookData.map((id) => parseInt(id));
    // console.log(convertedStoredBooks);
    const myReadList = facKData.filter((book) =>
      convertedStoredBooks.includes(book.bookId),
    );
    // console.log(myReadList);
    setReadList(myReadList);
  }, []);
  return (
    <div>
      <Tabs>
        <TabList>
          <Tab>Read List {} </Tab>
          <Tab>Whish List</Tab>
        </TabList>

        <TabPanel>
          <h2 className="text-2xl text-green-400 py-5 text-center">
            {readList.length} Book I read
          </h2>
          <div className="flex w-11/12 mx-auto flex-wrap gap-20 py-10 bg-red-100 justify-around my-5 rounded-2xl">
            {readList.map((book, index) => (
              <Book key={index + 1} B book={book}></Book>
            ))}
          </div>
        </TabPanel>
        <TabPanel>
          <h2 className="text-2xl text-blue-400 py-5 text-center">
            Wish to read Book
          </h2>
        </TabPanel>
      </Tabs>
    </div>
  );
};

export default ReadList;
