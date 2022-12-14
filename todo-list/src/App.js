
import App from './App.css'
import React, {useState} from 'react';
export default function Todo(){
    const [list, setList] = useState([]);
    const [allList, setAllList] = useState([]);

    return (
      <div id="main-container"> 
      <h1>Make your list.....</h1>
        Enter your items: <input type="text" value={list}  placeholder="enter..." onChange={(i)=>{
          setList (i.target.value)
        }}/>
        <button id="submitBtn" onClick={()=>{
          if (list.trim().length>0){
            setAllList([...allList,list])
          }
          setList("")
          
        }}>add item
        </button>

        {
          allList.map((item,index)=>{
            return(
              <div id="container">
                <div >
                <button id="slNo">{index+1}.</button>   <button id="item">{item.toUpperCase()}</button>
                </div>
            
                <button onClick={()=>{
                  let newData=[...allList]
                  newData.splice(index,1)
                  setAllList(newData)
                }}>delete</button>

                {/* EDIT */}

                <button onClick={()=>{
                  let newArr=[...allList]
                  let newValue=prompt("enter....")
                  if (newValue.trim().length>0){
                    newArr[index]=newValue
                  }
                  setAllList(newArr)
                }}>edit</button>

                <button onClick={()=>{
                  let newArr1= [...allList];
                  newArr1[index]=<strike>{newArr1[index]}</strike>
                  setAllList(newArr1)
                }}>complete</button>
              </div>
            )
          })
        }
      </div>
    )
  }
