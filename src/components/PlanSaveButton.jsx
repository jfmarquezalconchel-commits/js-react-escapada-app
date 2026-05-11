import { useState } from "react";
import "./PlanSaveButton.css";

 function PlanSaveButton({ id,isSaved=false }) { 
    let [mSaved,setMSaved] = useState(isSaved);
    function muteFavorite(id){
        let favorites=localStorage.getItem('favorites');
        if(favorites!=null){
            favorites = JSON.parse(favorites);
        }else{
            favorites = [];     
        }

        if(favorites.includes(id)){
            favorites =[...(favorites.filter(aid=>aid!=id))];
        }else{
            favorites =[...favorites,id];
        }

        console.log(favorites);
        localStorage.setItem('favorites', JSON.stringify(favorites));
        mSaved=setMSaved(!mSaved);
    }
    console.log(mSaved);
    return ( <button className="plan-save-button" onClick={(e) => {muteFavorite(id)}}>{ mSaved ? "Quitar de favoritos" : "Guardar en favoritos" } </button> ); 
} 
export default PlanSaveButton;