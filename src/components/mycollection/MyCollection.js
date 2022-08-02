import React, { useEffect} from "react";
import "./mycollection.css"
import { Link } from "react-router-dom";
import Card from "../card/Card";
import { useSelector, useDispatch } from "react-redux/es/exports";
import { getCollection } from "../../app/features/collectionSlice";

const MyCollection = () => {
//   const [collection, setCollection] = useState(null);
  const dispatch= useDispatch()
  const mainData = useSelector((state) => state.data.database);
  const collection= useSelector(state=>state.collection.collection)
  const showCollection=mainData.filter(item=>collection.includes(item.id))
  console.log(showCollection);
//   const storage = JSON.parse(localStorage.getItem("myExercises")) || [];

  useEffect(()=>{
    dispatch(getCollection())

    // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])

 
  return (
    <section className="collection-page">
    <div className="collection-header">
    <h2>My collection</h2>
    <p>{collection.length} exercises</p>
    </div>
    <span className="line"></span>
   
    {
      collection.length>0 ? <div className="exercises-wrapper">
        {showCollection.map((item,index)=>{
      return <Card exercise={item} key={index} /> 
    })}
      </div>: <div className="empty-collection" >
    <h3> No exercises in collection </h3>
    <p>You haven't liked anything yet</p>
    <Link to="/"><button>Find exercises</button></Link>
    </div>
    }
      
    </section>
  );
};

export default MyCollection;
