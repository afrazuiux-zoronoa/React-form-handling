import React, { useState } from "react";

function Form({ getData }) {
  const [name, setName] = useState("");
  const [verse, setVerse] = useState("");
  const [imgURL, setImgURL] = useState("");
  function submitHandler(e) {
    e.preventDefault();
    name.trim() === "" || verse.trim() === "" || imgURL.trim() === ""
      ? alert("All fields are required")
      : getData({ name, verse, imgURL, isFriend: false });
    setName("");
    setVerse("");
    setImgURL("");
  }
  return (
    <form
      onSubmit={submitHandler}
      className="flex gap-4 flex-col md:flex-row items-center justify-center my-5"
    >
      <input
        onChange={(e) => setName(e.target.value)}
        value={name}
        className="border bg-white border-neutral-400 outline-none rounded-md text-sm font-medium px-4 py-2 focus:border-stone-900/75"
        type="text"
        placeholder="Name?"
      />
      <input
        onChange={(e) => setVerse(e.target.value)}
        value={verse}
        className="border bg-white border-neutral-400 outline-none rounded-md text-sm font-medium px-4 py-2 focus:border-stone-900/75"
        type="text"
        placeholder="Tagline..."
      />
      <input
        onChange={(e) => setImgURL(e.target.value)}
        value={imgURL}
        className="border bg-white border-neutral-400 outline-none rounded-md text-sm font-medium px-4 py-2 focus:border-stone-900/75"
        type="text"
        placeholder="Img URL/Link"
      />
      <button
        type="submit"
        className="cursor-pointer bg-white border border-neutral-400 outline-none rounded-md text-sm font-medium px-4 py-2 hover:border-stone-900/75 active:scale-95"
      >
        Create Card
      </button>
    </form>
  );
}

export default Form;
