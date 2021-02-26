
import React,{useState} from 'react';
import ItemEdition from './ItemEdition';

const ListItem = ({post=[]}) => {
  const [trigger, setTrigger] = useState(false)
  const [indexIsClicked, setIndexIsClicked] = useState(null)

  const handler = function(e){
    setIndexIsClicked(e.target.getAttribute("data-index"))
    setTrigger(true)
};

  return (
    <>
    { post.map((data,index) => {
                return (
                <>
                  <div key={data.id} data-index={index} className= "list-group" onClick={handler}>
                    <li className= "list-group-item list-group-item-action"data-index={index} >{data.title}</li>
                  </div>
                  {trigger? <ItemEdition indexIsClicked = {indexIsClicked} post ={post} trigger= {trigger}/>:null }
                </>	
    	    )	
    }) 
  }
    </>
  );
}

export default ListItem