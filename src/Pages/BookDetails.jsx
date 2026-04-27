import React, { useContext } from "react";
import { useLoaderData, useParams } from "react-router";
import { BookContext } from "../context/BookContext";


const BookDetails = () => {
  const { bookId } = useParams();
  // console.log(bookId);
  const books = useLoaderData();
  // console.log(books);
  const expectedBook = books.find((book) => book.bookId === Number(bookId));
  // console.log(expectedBook);
  const {handleMarkAsRead,handleAddToWishlist} = useContext(BookContext)
  
  return (
    <div className="my-20">
    <div className="card lg:card-side bg-base-100 shadow-sm max-mA justify-between gap-8 p-3">
      <figure className="p-4 bg-gray-50 rounded-2xl max-w-130">
        <img className="max-h-143" src={expectedBook.image} alt="Album" />
      </figure>
      <div className="card-body flex-1">
        <h2 className="card-title">{expectedBook.bookName}</h2>
        <p>By : {expectedBook.author}</p>
         <div className="divider mb-0"></div>
        <p >{expectedBook.category}</p>
         <div className="divider mt-0"></div>
        <p >
          <span>Review :{expectedBook.review} </span>
        </p>
        <p className="space-x-3">
          <span className="font-bold">Tag</span>
          {expectedBook.tags.map((tag, idx) => (
            <span key={idx} className="badge badge-success badge-soft">#
              {tag}
            </span>
          ))}
        </p>
        <div className="divider"></div>
        <div className="flex justify-between max-w-80 items-center">
            <ul className="space-y-2">
                <li>Number of Pages:</li>
                <li>Publisher:</li>
                <li>Year of Publishing:</li>
                <li>Rating:</li>
            </ul>
            <ul className="font-bold space-y-2">
                <li>{expectedBook.totalPages}</li>
                <li>{expectedBook.publisher}</li>
                <li>{expectedBook.yearOfPublishing}</li>
                <li>{expectedBook.rating}</li>
            </ul>
        </div>
        <div className="card-actions justify-start mt-5">
          <button onClick={()=>handleMarkAsRead(expectedBook)} className="btn btn-soft">Mark as Read</button>
          <button onClick={()=>handleAddToWishlist(expectedBook)} className="btn btn-accent"> Add to Wishlist</button>
        </div>
      </div>
    </div>
    </div>
  );
};

export default BookDetails;
