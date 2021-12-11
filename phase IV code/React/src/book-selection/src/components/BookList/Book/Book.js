import React from "react";
import { StyledBook } from "./StyledComponents/StyledBook.js";

const Book = (props) => {
    const { title, img, author, numPages, link } = props.book;
    return (
        <StyledBook>
            <a href={link}>
                <img id="bookCover" src={img} alt="" />
                <h1>{title}</h1>
                <h2>{author}</h2>
                <h2>{numPages} pages</h2>
            </a>
        </StyledBook>
    );
};

export default Book;
