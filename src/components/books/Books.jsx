import React, { useContext } from "react";
import { BookContext } from "../../context/BookContext";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import Readlist from "../listedBook/Readlist";
import Wishlist from "../listedBook/Wishlist";

const Books = () => {
  const { storedBooks, storedWishlist } = useContext(BookContext);
  return (
    <div className="my-20">
      <div
        className="card text-center text-[32px] font-bold 
          bg-gray-100 shadow-sm max-mA p-3"
      >
        Books
      </div>
      <Tabs className={"max-mA pt-6"}>
        <TabList>
          <Tab>Read Books</Tab>
          <Tab>Wishlist Books</Tab>
        </TabList>

        <TabPanel>
         <div className="my-6">
        {storedBooks.map((book,idx) => {
          return (
            <Readlist book={book} key={idx} ></Readlist>
          );
        })}
      </div>
        </TabPanel>
        <TabPanel>
         <div className="my-6">
        {storedWishlist.map((book,idx) => {
          return (
            <Wishlist book={book} key={idx}></Wishlist>
          );
        })}
      </div>
        </TabPanel>
      </Tabs>
      
    </div>
  );
};

export default Books;
