import { useDispatch, useSelector } from "react-redux";
import { bagAction } from "../store/bagSlice";
import { MdDelete } from "react-icons/md";
import { IoMdAddCircle } from "react-icons/io";
const HomeItem = ({ item }) => {
  const dispatch = useDispatch();

 const bagItems = useSelector(store=>store.bag);
const elementFound=bagItems.indexOf(item.id)>=0;

  const handleAddToBag = () => {
    dispatch(bagAction.addToBag(item.id));
  };
  const handleRemoveFromBag = () => {
    dispatch(bagAction.removeFromBag(item.id));
  };


  return (
    <>
      <div class="item-container">
        <img class="item-image" src={item.image} alt="item image" />
        <div class="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div class="company-name">{item.company}</div>
        <div class="item-name">{item.item_name}</div>
        <div class="price">
          <span class="current-price">Rs {item.current_price}</span>
          <span class="original-price">Rs {item.original_price}</span>
          <span class="discount">({item.discount_percentage}% OFF)</span>
        </div>


{elementFound ?  <button type="button" className="btn btn-danger btn-add-bag" onClick={handleRemoveFromBag}>
          <MdDelete /> remove
        </button> :
        <button
          type="button"
          className="btn btn-success btn-add-bag"
          onClick={handleAddToBag}
        >
          <IoMdAddCircle /> Add to Bag
        </button> }
       
      </div>
      
    </>
  );
};

export default HomeItem;
