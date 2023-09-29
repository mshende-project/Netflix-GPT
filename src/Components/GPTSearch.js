import React from "react";
import GPTSearchBar from "./GPTSearchBar";
import GPTMovieSuggestion from "./GPTMovieSuggestion";
import { BG_IMG_URL } from "../utils/constants";

const GTPSearch = () => {
  return (
    <>
      <div className="fixed -z-10">
        <img
          src={BG_IMG_URL}
          alt="background"
          className="h-screen object-cover"
        />
      </div>
      <div className="">
        <GPTSearchBar />
        <GPTMovieSuggestion />
      </div>
    </>
  );
};

export default GTPSearch;
