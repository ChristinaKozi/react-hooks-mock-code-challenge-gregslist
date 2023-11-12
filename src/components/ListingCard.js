import React, { useState } from "react";

function ListingCard({listing, onDeleteListing}) {
  const { id, image, description, location } = listing

  const [favIsActive, setFavIsActive] = useState(false)

  function handleFavClick(){
      return setFavIsActive(!favIsActive)
    }

  function handleDeleteClick() {
    fetch(`http://localhost:6001/listings/${id}`,{
      method: 'DELETE'
    })
      .then(()=>onDeleteListing(id))
  }

  return (
    <li className="card">
      <div className="image">
        <span className="price">$0</span>
        <img src={image} alt={description} />
      </div>
      <div className="details">
        {favIsActive ? (
          <button onClick={handleFavClick} className="emoji-button favorite active">★</button>
        ) : (
          <button onClick={handleFavClick} className="emoji-button favorite">☆</button>
        )}
        <strong>{description}</strong>
        <span> · {location}</span>
        <button onClick={handleDeleteClick} className="emoji-button delete">🗑</button>
      </div>
    </li>
  );
}

export default ListingCard;
