import React from "react";

const Card = ({
  name,
  verse,
  imgURL,
  deleteCard,
  id,
  toggleFriend,
  isFriend,
}) => {
  return (
    <div className="w-fit flex flex-col items-center p-4 bg-white border-1 border-stone-400 rounded-xl">
      <img
        className="w-50 h-40 object-cover object-center rounded-lg border-1 border-stone-400"
        src={imgURL}
      />
      <h1 className="text-2xl font-bold mt-2">{name}</h1>
      <p className="text-sm font-medium text-stone-600 mb-2">{verse}</p>
      <div className="mt-2 flex gap-2">
        <button
          onClick={() => {
            toggleFriend(id);
          }}
          className={`cursor-pointer active:scale-95 text-sm font-semibold rounded-md ${
            isFriend
              ? "bg-stone-200 text-black hover:bg-stone-300"
              : "bg-stone-800 text-white hover:bg-stone-950"
          } px-3 py-2`}
        >
          {isFriend ? "Remove" : "Add Friend"}
        </button>
        <button
          onClick={() => deleteCard(id)}
          className="cursor-pointer hover:bg-stone-300 active:scale-95 text-sm font-semibold rounded-md bg-stone-200 text-black px-3 py-2"
        >
          Delete Card
        </button>
      </div>
    </div>
  );
};

export default Card;
