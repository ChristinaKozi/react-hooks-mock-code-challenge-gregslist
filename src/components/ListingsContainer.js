import React, { useEffect, useState } from "react";
import ListingCard from "./ListingCard";

function ListingsContainer({ search }) {
  const [listings, setListings] = useState([])

  useEffect(()=>{
    fetch('http://localhost:6001/listings')
    .then(r=>r.json())
    .then(listings => setListings(listings))
  },[])

  function handleDeleteListing(id){
    const updatedListingArray = listings.filter((listing) => listing.id !== id)
    setListings(updatedListingArray)
  }

  const filteredListings = listings.filter(listing => {
    return listing.description.toLowerCase().includes(search.toLowerCase())
  })
  console.log(filteredListings)
  return (
    <main>
      <ul className="cards">
        {filteredListings.map((listingObj)=>{
          return <ListingCard 
          listing={listingObj} 
          key={listingObj.id}
          onDeleteListing={handleDeleteListing}/>})}
      </ul>
    </main>
  );
}

export default ListingsContainer;
