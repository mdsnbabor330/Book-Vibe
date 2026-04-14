import React from 'react';
import { Link } from 'react-router';

const BookCard = ({book}) => {
    return (
        <Link to={`/bookdetails/${book.bookId}`} className="card bg-base-100 w-full shadow-sm p-5">
              <figure className="p-4 bg-gray-50 rounded-2xl">
                <img
                  className="rounded-md h-50"
                  src={book.image}
                  alt={book.bookName}
                />
              </figure>
              <div className="card-body px-0">
                <p className="space-x-2">
                    {
                        book.tags.map((tag,idx)=>(
                            <span key={idx} className="badge badge-success badge-soft">{tag}</span>
                        ))
                    }
                </p>
                <h2 className="card-title">{book.bookName}</h2>
                <p className="font-semibold text-gray-500">
                  By : {book.author}
                </p>
                 <div className="divider"></div>
                <div className="flex items-center justify-between text-gray-700">
                  <span className="">{book.category}</span>
                  <span className="">{book.rating} ⭐</span>
                </div>
              </div>
         </Link>
    );
};

export default BookCard;