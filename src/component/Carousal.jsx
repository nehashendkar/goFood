import React from "react";

function Carousal() {
  return (
    <div>
      <div
        id="carouselExampleControls"
        class="carousel slide"
        data-bs-ride="carousel"
        style={{ objectFit: "contain !important" }}
      >
        <div class="carousel-inner" id="carousel">
          <div class="carousel-caption " style={{ zIndex: "10" }}>
            <form class="d-flex">
              <input
                class="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button class="btn bg-success text-light" type="submit">
                Search
              </button>
            </form>
          </div>

          <div class="carousel-item active  ">
            <img
              src="https://plus.unsplash.com/premium_photo-1684534125661-614f59f16f2e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
              class="d-block w-100 "
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div class="carousel-item ">
            <img
              src="https://plus.unsplash.com/premium_photo-1661600630493-a1dad6b9519b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vbW98ZW58MHx8MHx8fDA%3D"
              class="d-block w-100 "
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div class="carousel-item ">
            <img
              src="https://images.unsplash.com/photo-1716237387910-aca76854fb24?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpenplcmlhfGVufDB8fDB8fHww"
              class="d-block w-100 "
              style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleControls"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousal;
