import { useState, useEffect } from "react";
import QuoteList from "./components/quoteList";
import "./App.css";

function App() {
  const [data, setData] = useState([]);

  const [open, setOpen] = useState(false);

  const [quote, setQuote] = useState({
    en: "",
    author: "",
    id: "",
  });

  const handleOpenModal = () => {
    setOpen(true);
  };

  const handleChange = (e) => {
    setQuote({
      ...quote,
      [e.target.name]: e.target.value,
      id: window.crypto.randomUUID(),
    });
  };

  const handleCloseModal = () => {
    setOpen(false);
  };

  const handleAdd = (quote) => {
    setData((prev) => [quote, ...prev]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAdd(quote);
    handleCloseModal();
  };

  const handleDelete = (id) => {
    let filteredData = data.filter((el) => el.id !== id);
    setData(() => [...filteredData]);
  };

  const handleEdit = (quote) => {
    const updateQuote = quote;

    const updateQuotes = data.map((q) => {
      if (q.id === updateQuote.id) {
        return updateQuote;
      }
      return q;
    });

    setData(updateQuotes);
  };

  const getData = async () => {
    const data = await fetch(
      "https://programming-quotes-api.herokuapp.com/Quotes?count=10"
    );
    const response = await data.json();
    console.log("RENDERRRRRRR");
    setData(response);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="App">
      <h1>Top quotes</h1>
      <button className="btn-1" onClick={handleOpenModal}>
        Add new quote
      </button>

      <QuoteList
        listData={data}
        en={quote.en}
        author={quote.author}
        open={open}
        handleSubmit={handleSubmit}
        handleCloseModal={handleCloseModal}
        handleChange={handleChange}
        handleDelete={handleDelete}
        handleEdit={handleEdit}
      />
    </div>
  );
}

export default App;
