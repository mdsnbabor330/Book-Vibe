import React, { use } from "react";
import BookCard from "../../UI/BookCard";

const booksPromise = fetch("/booksData.json").then((res) => res.json());

const AllBooks = () => {
  const books = use(booksPromise);
  console.log(books);
  return (
    <div>
      <h2 className="text-[32px] text-center font-bold">Books</h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 items-center justify-center gap-5 my-10">
        {books.map((book) => {
          return (
            <BookCard key={book.bookId} book={book}></BookCard>
          );
        })}
      </div>
    </div>
  );
};

export default AllBooks;
