import { useState } from "react";
import useFetch from "../hooks/useFetch";
import BackButton from "../components/BackButton";
import "./Quotes.css";

const Quotes = () => {
  const [index, setIndex] = useState(0);
  const {
    data: books,
    loading,
    error,
  } = useFetch("https://example-data.draftbit.com/books");
  const [quote, setQuote] = useState("");

  const getQuote = () => {
    if (!loading && !error && books) {
      const quotes = books.map((book) => book.Quote1);
      setQuote(quotes[index]);
      setIndex((index + 1) % quotes.length);
    }
  };

  return (
    <div className="quotes-cont">
      <div className="quotes-card">
        <h1>Quotes</h1>
        <p className="quote-text">{quote}</p>
        <button
          className="btn"
          onClick={getQuote}
          disabled={loading || error || !books}
        >
          Get Quote
        </button>
        {loading && <p>Loading...</p>}
        {error && <p>Error: {error}</p>}
      </div>
      <div>
        <BackButton />
      </div>
    </div>
  );
};

export default Quotes;

