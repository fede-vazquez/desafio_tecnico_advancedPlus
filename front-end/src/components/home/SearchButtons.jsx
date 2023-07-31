import React from "react";
import Icon from "../Icon";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

function SearchButtons({ pageNumber, setPageNumber, usersLength }) {
  const isFirstPage = pageNumber === 1;
  const isLastPage = usersLength < 10;

  function nextPage() {
    if (usersLength === 10) {
      setPageNumber(pageNumber + 1);
    }
  }

  function prevPage() {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  }

  return (
    <article className="flex items-center justify-evenly">
      {/* <!-- Flecha izquierda --> */}
      <button
        className={`
        w-9 h-9 my-1 flex items-center justify-center border border-gray-300  rounded-full mr-2
    ${!isFirstPage ? "bg-blue-500 hover:bg-blue-700" : "opacity-0"}`}
        onClick={() => {
          prevPage();
        }}
      >
        <Icon icon={faChevronLeft} />
      </button>

      {/* <!-- Número de página --> */}
      <p className="text-md font-semibold text-gray-800 mx-2">
        Página {pageNumber}
      </p>

      {/* <!-- Flecha derecha --> */}
      <button
        className={`
        w-9 h-9 my-1 flex items-center justify-center border border-gray-300 bg-blue-500 hover:bg-blue-700 rounded-full ml-2
    ${!isLastPage ? "bg-blue-500 hover:bg-blue-700" : "opacity-0"}`}
        onClick={() => {
          nextPage();
        }}
      >
        <Icon icon={faChevronRight} />
      </button>
    </article>
  );
}

export default SearchButtons;
