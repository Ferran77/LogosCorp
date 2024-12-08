"use client";

import { closeSearchPopup } from "@/utlis/toggleSearchPopup";

export default function SearchPopup() {
  return (
    <div className="search-popup">
      <span className="search-back-drop" />
      <div className="search-inner">
        <div className="container">
          <button className="close-search" onClick={closeSearchPopup}>
            <span className="la la-times" />
          </button>
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-group">
              <input
                type="search"
                name="search-field"
                defaultValue=""
                placeholder="Type your keyword"
                required
              />
              <button type="submit">
                <i className="fal fa-search" />
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
