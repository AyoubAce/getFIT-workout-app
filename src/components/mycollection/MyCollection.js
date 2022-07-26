// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux/es/exports";
// import Card from "../card/Card";

// const MyCollection = () => {
//   const [collection, setCollection] = useState(null);
//   const mainData = useSelector((state) => state.data.database);
//   const storage = JSON.parse(localStorage.getItem("myExercises")) || [];
//   useEffect(()=>{
//     setCollection(()=>{
//      return mainData.filter((item) => storage.includes(item.id))
//     })
//   },[mainData])
 
//   return (
//     <section className="my-collection-page exercises-wrapper" style={{ backgroundColor: "red" }}>
//       {collection ? collection.map((item,index)=>{
//       return <Card exercise={item} /> 
//     }): <div className="empty-collection">


//     </div>}
      
//     </section>
//   );
// };

// export default MyCollection;
