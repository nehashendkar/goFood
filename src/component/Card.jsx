// import React, { useEffect, useRef, useState } from "react";
// import { useDispatchCart, useCart } from "./ContextReducer";
// import Swal from "sweetalert2";

// function Card(props) {
//   let dispatch = useDispatchCart();
//   const priceRef = useRef();
//   let options = props.options;
//   let data = useCart();
//   let priceOptions = Object.keys(options);
//   const [qty, setQty] = useState(1);
//   const [size, setSize] = useState("");

//   const handleAddToCart = async () => {
//     let food = [];
//     for (const item of data) {
//       if (item.id === props.foodItem._id) {
//         food = item;
//         break;
//       }
//     }

//     let finalPrice = qty * parseInt(options[size]);

//     // if (food !== []) {
//       if (food && []) {
//       if (food.size === size) {
//         await dispatch({
//           type: "UPDATE",
//           id: props.foodItem._id,
//           price: finalPrice,
//           qty: qty,
//         });
//         Swal.fire({
//           position: "top-end",
//           icon: "success",
//           title: "Updated item in cart",
//           showConfirmButton: false,
//           timer: 1500,
//         });
//         return;
//       }
//     }

//     await dispatch({
//       type: "ADD",
//       id: props.foodItem._id,
//       name: props.foodItem.name,
//       price: finalPrice,
//       qty: qty,
//       size: size,
//     });

//     Swal.fire({
//       position: "top-end",
//       icon: "success",
//       title: "Added to cart",
//       showConfirmButton: false,
//       timer: 1500,
//     });
//   };

//   useEffect(() => {
//     setSize(priceRef.current.value);
//   }, []);

//   return (
//     <div>
//       <div>
//         <div
//           className="card mt-3"
//           style={{ width: "18rem", maxHeight: "360px" }}
//         >
//           <img
//             src={props.foodItem.img}
//             className="card-img-top"
//             alt="..."
//             style={{ height: "120px", objectFit: "fill" }}
//           />
//           <div className="card-body">
//             <h5 className="card-title">{props.foodItem.name}</h5>
//             <div className="container w-100">
//               <select
//                 className="m-2 h-100 bg-success rounded"
//                 onChange={(e) => setQty(e.target.value)}
//               >
//                 {Array.from(Array(6), (e, i) => {
//                   return <option key={i + 1}>{i + 1}</option>;
//                 })}
//               </select>

//               <select
//                 className="m-2 h-100 bg-success rounded"
//                 ref={priceRef}
//                 onChange={(e) => setSize(e.target.value)}
//               >
//                 {priceOptions.map((data) => {
//                   return (
//                     <option key={data} value={data}>
//                       {data}
//                     </option>
//                   );
//                 })}
//               </select>
//               <div className="d-inline h-100 fs-5">
//                 ₹{qty * parseInt(options[size])}/-
//               </div>
//             </div>
//             <hr />
//             <button
//               className="btn btn-success justify-center ms-2"
//               onClick={handleAddToCart}
//             >
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Card;


import React, { useEffect, useRef, useState } from "react";
import { useDispatchCart, useCart } from "./ContextReducer";
import Swal from "sweetalert2";

function Card(props) {
  let dispatch = useDispatchCart();
  const priceRef = useRef();
  let options = props.options;
  let data = useCart();
  let priceOptions = Object.keys(options);
  const [qty, setQty] = useState(1);
  const [size, setSize] = useState("");

  const handleAddToCart = async () => {
    let food = [];
    for (const item of data) {
      if (item.id === props.foodItem._id) {
        food = item;
        break;
      }
    }

    let finalPrice = qty * parseInt(options[size]);

    if (food && food.size === size) {
      await dispatch({
        type: "UPDATE",
        id: props.foodItem._id,
        price: finalPrice,
        qty: qty,
      });
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Updated item in cart",
        showConfirmButton: false,
        timer: 1500,
      });
      return;
    }

    await dispatch({
      type: "ADD",
      id: props.foodItem._id,
      name: props.foodItem.name,
      price: finalPrice,
      qty: qty,
      size: size,
    });

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Added to cart",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  useEffect(() => {
    setSize(priceRef.current.value);
  }, []);

  return (
    <div>
      <div>
        <div
          className="card mt-3"
          style={{ width: "18rem", maxHeight: "360px" }}
        >
          <img
            src={props.foodItem.img}
            className="card-img-top"
            alt="..."
            style={{ height: "120px", objectFit: "fill" }}
          />
          <div className="card-body">
            <h5 className="card-title">{props.foodItem.name}</h5>
            <div className="container w-100">
              <select
                className="m-2 h-100 bg-success rounded"
                onChange={(e) => setQty(e.target.value)}
              >
                {Array.from(Array(6), (e, i) => {
                  return <option key={i + 1}>{i + 1}</option>;
                })}
              </select>

              <select
                className="m-2 h-100 bg-success rounded"
                ref={priceRef}
                onChange={(e) => setSize(e.target.value)}
              >
                {priceOptions.map((data) => {
                  return (
                    <option key={data} value={data}>
                      {data}
                    </option>
                  );
                })}
              </select>
              <div className="d-inline h-100 fs-5">
                ₹{qty * parseInt(options[size])}/-
              </div>
            </div>
            <hr />
            {props.isLoggedIn ? (
              <button
                className="btn btn-success justify-center ms-2"
                onClick={handleAddToCart}
              >
                Add to Cart
              </button>
            ) : (
              <div className="text-danger">
                Please log in to add items to cart
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
