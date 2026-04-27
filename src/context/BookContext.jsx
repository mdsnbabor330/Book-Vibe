import React, { Children, createContext, useState } from 'react';
import { toast } from 'react-toastify';

export const BookContext= createContext();

const BookProvider = ({children}) => {
    const [storedBooks, setStoredBooks ] = useState([]);
    const [ storedWishlist, setStoredWishlist] = useState([]);

  const handleMarkAsRead = (currentBook) =>{
    const inExistBook = storedBooks.find((book)=>book.bookId === currentBook.bookId);
    if(inExistBook){
      toast.warning("The book is already exist");
    }
    else{
      setStoredBooks([...storedBooks, currentBook]);
      toast.success(`"${currentBook.bookName}" added to your Read list`);
    }

    console.log(currentBook, storedBooks, "book" );
  };
  
   const handleAddToWishlist = (currentBook) =>{
     const inExistReadlist = storedBooks.find((book)=>book.bookId === currentBook.bookId);
     if(inExistReadlist){
        toast.warning("The book is already exist in Read list");
        return;
     }
    const inExistBook = storedWishlist.find((book)=>book.bookId === currentBook.bookId);
    if(inExistBook){
      toast.warning("The book is already exist");
    }
    else{
      setStoredWishlist([...storedWishlist, currentBook]);
      toast.success(`"${currentBook.bookName}" added to your Wish list`);
    }

    console.log(currentBook, storedBooks, "book" );
  };

  const data ={
    storedBooks, setStoredBooks, handleMarkAsRead, storedWishlist, setStoredWishlist,handleAddToWishlist
  }
    return <BookContext.Provider value={data}>
        {children}
    </BookContext.Provider>
};

export default BookProvider;