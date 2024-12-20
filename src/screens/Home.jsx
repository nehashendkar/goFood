// import React, { useEffect, useState } from "react";
// import Navbar from "../component/Navbar";
// import Footer from "../component/Footer";
// import Card from "../component/Card";

// function Home() {
//   const [search, setSearch] = useState("");
//   const [foodCat, setFoodCat] = useState([]);
//   const [foodItem, setFoodItem] = useState([]);

//   const loadData = async () => {
//     let response = await fetch("https://gofood-6rpv.onrender.com/api/foodData", {
//       method: "POST",
//       headers: {
//         "content-Type": "application/json",
//       },
//     });

//     response = await response.json();
//     setFoodItem(response[0]);
//     setFoodCat(response[1]);
//   };

//   useEffect(() => {
//     loadData();
//   }, []);

//   return (
//     <div>
//       <div>
//         <Navbar />
//       </div>
//       <div>
//         <div
//           id="carouselExampleControls"
//           class="carousel slide"
//           data-bs-ride="carousel"
//           style={{ objectFit: "contain !important" }}
//         >
//           <div class="carousel-inner" id="carousel">
//             <div class="carousel-caption " style={{ zIndex: "10" }}>
//               <div class="d-flex justify-content-center">
//                 <input
//                   class="form-control me-2"
//                   type="search"
//                   placeholder="Search"
//                   aria-label="Search"
//                   value={search}
//                   onChange={(e) => {
//                     setSearch(e.target.value);
//                   }}
//                 />
//                 {/* <button class="btn bg-success text-light" type="submit">
//                 Search
//               </button> */}
//               </div>
//             </div>

//             <div class="carousel-item active  ">
//               <img
//                 src="https://plus.unsplash.com/premium_photo-1684534125661-614f59f16f2e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
//                 class="d-block w-100 "
//                 style={{ filter: "brightness(30%)" }}
//                 alt="..."
//               />
//             </div>
//             <div class="carousel-item ">
//               <img
//                 src="https://plus.unsplash.com/premium_photo-1661600630493-a1dad6b9519b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vbW98ZW58MHx8MHx8fDA%3D"
//                 class="d-block w-100 "
//                 style={{ filter: "brightness(30%)" }}
//                 alt="..."
//               />
//             </div>
//             <div class="carousel-item ">
//               <img
//                 src="https://images.unsplash.com/photo-1716237387910-aca76854fb24?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpenplcmlhfGVufDB8fDB8fHww"
//                 class="d-block w-100 "
//                 style={{ filter: "brightness(30%)" }}
//                 alt="..."
//               />
//             </div>
//           </div>
//           <button
//             class="carousel-control-prev"
//             type="button"
//             data-bs-target="#carouselExampleControls"
//             data-bs-slide="prev"
//           >
//             <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Previous</span>
//           </button>
//           <button
//             class="carousel-control-next"
//             type="button"
//             data-bs-target="#carouselExampleControls"
//             data-bs-slide="next"
//           >
//             <span class="carousel-control-next-icon" aria-hidden="true"></span>
//             <span class="visually-hidden">Next</span>
//           </button>
//         </div>
//       </div>
//       <div className="container">
//         {foodCat.length !== 0 ? (
//           foodCat.map((data) => {
//             return (
//               <div className="row mb-3">
//                 <div key={data._id} className="fs-3 m-3">
//                   {data.CategoryName}
//                 </div>
//                 <hr />
//                 {foodItem.length !== 0 ? (
//                   foodItem
//                     .filter(
//                       (item) =>
//                         item.CategoryName === data.CategoryName &&
//                         item.name.toLowerCase().includes(search.toLowerCase())
//                     )
//                     .map((filterItems) => (
//                       <div
//                         key={filterItems._id}
//                         className="col-12 col-md-6 col-lg-3"
//                       >
//                         <Card
//                           foodItem={filterItems}
//                           options={filterItems.options[0]}
//                         ></Card>
//                       </div>
//                     ))
//                 ) : (
//                   <div>No such data found</div>
//                 )}
//               </div>
//             );
//           })
//         ) : (
//           <div>Loading categories...</div>
//         )}
//         {/* <Card /> */}
//       </div>
//       <div>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default Home;


import React, { useEffect, useState } from "react";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import Card from "../component/Card";

function Home() {
  const [search, setSearch] = useState("");
  const [foodCat, setFoodCat] = useState([]);
  const [foodItem, setFoodItem] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const loadData = async () => {
    try {
      const response = await fetch("https://gofood-6rpv.onrender.com/api/foodData", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json();
      setFoodItem(data[0]);
      setFoodCat(data[1]);
    } catch (err) {
      console.error("Error fetching data:", err);
      setError("Failed to load data. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
  }, []);

  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-bs-ride="carousel"
          style={{ objectFit: "contain !important" }}
        >
          <div className="carousel-inner" id="carousel">
            <div className="carousel-caption" style={{ zIndex: "10" }}>
              <div className="d-flex justify-content-center">
                <input
                  className="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </div>

            <div className="carousel-item active">
              <img
                src="https://plus.unsplash.com/premium_photo-1684534125661-614f59f16f2e?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YnVyZ2Vyc3xlbnwwfHwwfHx8MA%3D%3D"
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://plus.unsplash.com/premium_photo-1661600630493-a1dad6b9519b?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fG1vbW98ZW58MHx8MHx8fDA%3D"
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
            <div className="carousel-item">
              <img
                src="https://images.unsplash.com/photo-1716237387910-aca76854fb24?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBpenplcmlhfGVufDB8fDB8fHww"
                className="d-block w-100"
                style={{ filter: "brightness(30%)" }}
                alt="..."
              />
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleControls"
            data-bs-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
      <div className="container">
        {loading ? (
          <div>Loading...</div>
        ) : error ? (
          <div className="text-danger">{error}</div>
        ) : foodCat.length !== 0 ? (
          foodCat.map((data) => (
            <div className="row mb-3" key={data._id}>
              <div className="fs-3 m-3">{data.CategoryName}</div>
              <hr />
              {foodItem.length !== 0 ? (
                foodItem
                  .filter(
                    (item) =>
                      item.CategoryName === data.CategoryName &&
                      item.name.toLowerCase().includes(search.toLowerCase())
                  )
                  .map((filterItems) => (
                    <div
                      key={filterItems._id}
                      className="col-12 col-md-6 col-lg-3"
                    >
                      <Card
                        foodItem={filterItems}
                        options={filterItems.options[0]}
                      />
                    </div>
                  ))
              ) : (
                <div>No such data found</div>
              )}
            </div>
          ))
        ) : (
          <div>Loading categories...</div>
        )}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
