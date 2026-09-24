'use client'
import { BooksContext } from "@/app/context/BooksContext";
import { BookData } from "@/app/types/type";
import { useContext } from "react";
import { toast } from "react-toastify";

const WishBtn = ({book}:{book: BookData}) => {
    const {wishlist, setWishList} = useContext(BooksContext);

    const handleAddToWishBtn = ()=> {
        // console.log('button is triggered successfully');
        setWishList([...wishlist,book ])
        toast.success('The book is added wishlist successfully!')
    }
  return (
    <div>
      <button 
      onClick={()=> handleAddToWishBtn()}
      className="btn btn-outline rounded-xl px-8">
        Add to Wishlist
      </button>
    </div>
  );
};

export default WishBtn;
