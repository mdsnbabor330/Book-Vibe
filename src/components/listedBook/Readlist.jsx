import React from 'react';

const Readlist = ({book}) => {
    return (
        <div className="mt-6">
              <div className="card lg:card-side bg-base-100 shadow-sm max-mA gap-8 p-6 ">
                <figure className="p-4 bg-gray-50 rounded-2xl">
                  <img className="max-h-50" src={book.image} alt="Album" />
                </figure>
                <div className="space-y-3 w-full">
                  <h2 className="text-[22px] font-bold">{book.bookName}</h2>
                  <p>By : {book.author}</p>
                  <p className="space-x-3">
                    <span className="font-bold">Tag</span>
                    {book.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="badge badge-success badge-soft"
                      >
                        #{tag}
                      </span>
                    ))}
                    <span> Year of Publishing: {book.yearOfPublishing}</span>
                  </p>
                  <p className="space-x-3">
                    <span>Publisher: {book.publisher} </span>
                    <span>Number of Pages: {book.totalPages}</span>
                  </p>

                  <div className="divider"></div>
                  <p className="space-x-3">
                    <span className="badge badge-info badge-soft">
                      {book.category}
                    </span>
                    <span className="badge badge-warning badge-soft">
                      {book.rating}
                    </span>
                    <span className="badge badge-success">View Details</span>
                  </p>
                </div>
              </div>
            </div>
    );
};

export default Readlist;