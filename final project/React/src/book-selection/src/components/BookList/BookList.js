import React, { useEffect, useState } from "react";
import "./BookList.css";
import Book from "./Book/Book";

//Function to concatenate two arrays.
function concatenateArray(arr1, arr2) {
    let arr3 = arr1.concat(arr2);
    return arr3;
}

const BookList = () => {
    //Use useState function make change in the react elements
    const [books, setList] = useState([
        {
            id: 1,
            img: "../Images/imageschap1/Pic2.jpg",
            title: "A Sunny Day down by the River",
            author: "James W. Isaacs ",
            numPages: 5,
            link: "../Pages/chap1page1.html",
        },
        {
            id: 2,
            img: "../Images/eagle.jpg",
            title: "A Sunny Day down by the River, work in progress",
            author: "James W. Isaacs",
            numPages: "5",
            link: "../Pages/chap2page1.html",
        },
    ]);

    const other = [
        {
            id: -1,
            img: "../Images/imageschap1/Pic3.jpg",
            title: "Sample",
            author: "Someone ",
            numPages: 5,
            link: "#",
        },
    ];

    //This will be called everytime the component is mounted.
    useEffect(() => {
        setList(concatenateArray(books, other));
    }, []);

    return (
        <section className="booklist">
            {books.map((book) => {
                return <Book key={book.id} book={book}></Book>;
            })}
        </section>
    );
};

export default BookList;
