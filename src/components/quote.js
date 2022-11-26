import React from "react";
import { useState, useEffect } from "react";
import { ReactComponent as EditIcon } from "../icons/edit.svg";
import { ReactComponent as DeleteIcon } from "../icons/delete.svg";
// import QuoteList from "./quoteList";
import Dialog from "./Dialog";

const Quote = ({ id, author, en, handleDelete, handleEdit }) => {
  const [open, setOpen] = useState(false);

  const [quote, setQuote] = useState({
    en: "",
    author: "",
    id: "",
  });

  useEffect(() => {
    const selectedQuote = { en, author, id };
    setQuote(selectedQuote);
  }, [en, author, id]);

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleCloseModal = () => setOpen(false);

  const handleChange = (e) => {
    setQuote({ ...quote, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e, q) => {
    e.preventDefault();
    handleEdit(q);
    handleCloseModal();
  };

  // console.log(quote)
  return (
    <div className="quot">
      <div className="quote-item">
        <div className="quote">
          <h3>{en}</h3>
          <p>{author}</p>
        </div>

        <div className="icons">
          <DeleteIcon onClick={() => handleDelete(id)} />
          <EditIcon onClick={() => handleOpenModal()} />
        </div>
      </div>

      {/* Edit Modal */}

      <Dialog
        open={open}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
        dialogQuote={quote}
        handleChange={handleChange}
      />
    </div>
  );
};

export default Quote;
