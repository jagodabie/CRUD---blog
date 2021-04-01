import React,{useState} from 'react';
import ItemEdition from './ItemEdition';

const ListItem = ({currentPosts=[]}) => {
  const [trigger, setTrigger] = useState(false)
  const [indexIsClicked, setIndexIsClicked] = useState(null)

  const handler = function(e){
    setIndexIsClicked(e.target.getAttribute("data-index"))
    setTrigger(!trigger)
  };
  return (
    <>
    {currentPosts.map((data,index) => {
                return (
                <>
                  <li key={data.id} onClick={handler} className= "list-group-item list-group-item-action"data-index={index} >{data.title}</li>
                  {trigger? <ItemEdition indexIsClicked = {indexIsClicked} currentPosts={currentPosts} trigger= {trigger}/>:null}
                </>	
    	    )	
    }) 
  }
    </>
  );
}

export default ListItem