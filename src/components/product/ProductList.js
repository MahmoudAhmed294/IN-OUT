// import React, {useContext, useEffect, useState} from "react";
// import Product from "./Product";
// import axios from "axios";
//
// const ProductList = ()=>{
//     const [showHome, setinfoHome] = useState({info: ""})
//
//     useEffect(()=>{
//         axios.get(`NoDatabase/data/Home.json`).then(res => {
//             const userData = res.data.productHome;
//             const info = userData.map((i) => {
//                 return <Product name={i.Name} img={i.img} price={i.price} offer={i.offer} key={i.id}/>
//
//             })
//             setinfoHome({info: info})
//
//         })
//
//     },[])
//
//
//
//     return<div>
//         {showHome.info}
//     </div>
// }
//
// export default ProductList;