import React from "react";
import Quote from "./quote";
import Dialog from "./Dialog";

const QuoteList = ({
  listData,
  open,
  handleCloseModal,
  handleChange,
  handleSubmit,
  handleEdit,
  handleDelete,
  en,
  author,
  id,
}) => {

  console.log("listData", listData)
  
  return (
    <>
      {listData?.map((el, i) => (
        <Quote
          id={el.id}
          author={el.author}
          en={el.en}
          key={i}
          handleEdit={handleEdit}
          handleDelete={handleDelete}
        />
      ))}

      <Dialog
        open={open}
        handleCloseModal={handleCloseModal}
        handleSubmit={handleSubmit}
        dialogQuote={{ en, author, id }}
        handleChange={handleChange}
      />
    </>
  );
};

export default QuoteList;
