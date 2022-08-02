// import React from 'react'
// import "./sidebar.css"
// import { useSelector, useDispatch } from 'react-redux'
// import { Link } from 'react-router-dom'

// const Sidebar = () => {
//     const dispatch= useDispatch()
//     const mainData = useSelector((state) => state.data.database);
//     const collection= useSelector(state=>state.collection.collection)
//     const showCollection=mainData.filter(item=>collection.includes(item.id))
    
//   return (
//     <div className='sidebar'>
//     <div className='sidebar-header'>
//         <h4>Discover +1370 Exercises</h4>
//         <p>Target the right muscle</p>
//     </div>
//     <h4>Collection</h4>
//     {
//         collection.length>0 && <div className='sidebar-exercises'>
//             {
//                 showCollection.map((item,index)=>{
//                    return <div className='exercise' key={index}>
//                    <Link to="exercise">
//                         <img src={item.gifUrl} alt="exercise" />
//                    </Link>
//                         <p>X</p>
//                     </div>
//                 })
//             }
//         </div>
//     }

//     </div>
//   )
// }

// export default Sidebar