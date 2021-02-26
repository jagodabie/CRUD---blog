import React,{useState} from 'react';
import '../css/ItemEdition.css';
import ReactDOM from 'react-dom';


const ItemEdition = (props) => {
    const [input, setInput] = useState(''); 
    const EditorStyling = {width:"20rem",background:"white", border:"solid 0.5px rgba(168, 153, 153, 0.3",padding:"0.5rem", margin:"0.2rem"};
    const handleSubmit = (evt) => {
        evt.preventDefault();
        const requestOptions = {
            method: 'PATCH',
            headers: { 
                'Content-Type': 'application/json',
                'Authorization': 'Bearer my-token',
            },
            body: JSON.stringify({ title: input,
                                   status: 1,
                                   message: ""
            })
        };
        fetch(`http://localhost:3000/post/${props.indexIsClicked}`, requestOptions)
            .then(response => response.json())
            window.location.reload(false);
    }
    const handleCancel = (evt) => {
        evt.preventDefault();
        window.location.reload(false);
    }
        return ReactDOM.createPortal(
            <div className = {"ItemEdition-wrapper"}>
                <div className = {"ItemEdition-backdrop"}/>
                    <div className = {"ItemEdition-box"}>
                        <form className = ""onSubmit={handleSubmit}>
                           <div className="form-group">
                            <label>
                                <h2>Edycja Tytułu</h2>
                                <br></br>
                            <input
                                className="form-control"
                                style={EditorStyling}
                                type="text"
                                value={input}
                                onChange={e => setInput(e.target.value)}
                            />
                            </label>
                                <input type="submit" value="Potwierdż" class ="btn btn-primary" onSubmit={handleSubmit}/>
                                </div>    
                        </form>
                        <div className = "ItemEdition-item-body">
                            {props.post[props.indexIsClicked].body}
                        </div>  
                        <br></br>
                        <input type="submit" value="Cofnij" onClick = {handleCancel} class ="btn btn-primary"/>

                    </div>
                    {props.children
                    }
        </div>,document.getElementById('modal-root'))
    }
 
export default ItemEdition;