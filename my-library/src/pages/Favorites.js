import { useAppContext } from "../context/appContext";
import "./Favorites.css";
import BackButton from "../components/BackButton";

const Favorites = () => {
  const { favorites, removeFromFavorites, favoritesChecker, trimTitle } =
    useAppContext();

  return (
    <div className="favorites">
      {favorites.length > 0 ? (
        favorites.map((book) => (
          <div key={book.id} className="book">
            <div>
              <h4 className="heading">{trimTitle(book.title, 15)}</h4>
            </div>
            <div>
              <img src={book.image_url} alt={book.title} />
            </div>
            <div>
              {favoritesChecker(book.id) && (
                <button
                  className="fav-btn"
                  onClick={() => removeFromFavorites(book.id)}
                >
                  Remove from favorites
                </button>
              )}
            </div>
          </div>
        ))
      ) : (
        <h1 className="no-favorites">No favorites yet</h1>
      )}
      <BackButton />
    </div>
  );
};

export default Favorites;
