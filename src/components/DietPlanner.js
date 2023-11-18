import React, { useEffect, useMemo, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/WorkoutPlanner.css'
import {useTable} from 'react-table'
import fakeData from './MockData.json'
import DatePicker from 'react-datepicker'
import { AiFillEdit,AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios"
import { baseURL } from '../constants/Constants';


const DietPlanner = () => {
    const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const [date,set1Date]=useState(new Date(Date.now()));
    const [workout,setWorkout]=useState([]);
    const [col1,setCol1]=useState([])
    const [flag,setFlag]=useState(null)
    const [formData,setFormData]=useState({
      'name':'',
        'quantity':'',
        'type':'Breakfast',
        'cross':''
    })

  
useEffect(()=>{
  const col=Object.keys(formData)
  setCol1([])
  const cols=col.map((c)=>{
    const k={
      "Header":c,
      accessor: c

    }
    
    setCol1(prev=>{
      prev=[...prev,k]
      return prev
    })
    return col1

  })
  
  
},[])
useEffect(()=>{
  axios.post(`${baseURL}getNutritionPlan`,{email:localStorage.getItem("email"),nutrition:{...formData,'date':date}}).then((res)=>{
    setFlag(null)
    setWorkout([])
    console.log(date)
    let out=[]
    if(res.data.response!=null)
    {
      console.log(res.data.response)
      res.data.response.map((val)=>{
        let dict ={
                  'name':'',
                    'quantity':'',
                    'type':'Breakfast',
                    
                    'cross':''
                }
                dict.name=val['name']
                dict['quantity']=val['quantity']
                dict['type']=val["type"]
                dict['cross']=""
                out.push(dict)
              
  
      })

    }
    setWorkout(out)
    
  })
},[date])


const colTable=useMemo(()=>col1,[col1])
    const memoizedData = useMemo(() => workout, [workout]);
    
      
   
   
    const changeDate=(date)=>{
      console.log(date.getDate() ,date.getMonth() , date.getFullYear());
      set1Date(date);
    }
    const changePrevDate=()=>
    {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() - 1);
      set1Date(newDate);
    }
    const changeNextDate=()=>
    {
      const newDate = new Date(date);
      newDate.setDate(date.getDate() + 1);
      set1Date(newDate);
    }
    const changeFormData=(event)=>{
      const{name,value}=event.target;
      console.log(name,value)

      
        setFormData(
          {
            ...formData,
            [name]:value
  
          }
        )
      
      
    }


    const submitForms=(event)=>{
      event.preventDefault();
      let f=true;
      // if there is an excersise name already present the duration is updated 
      // else added to the list 
      // this prevents duplication in the excersise name 
        const updatedData=workout.map(item=>
          {
            item=item['name']==formData['name']?{...item,...formData}:item
            if(item['name']==formData['name'] )
            {
              f=false;
              
            }
            
            return item

          }
          
        )
        if(f==false)
        {
          setWorkout(updatedData)
          axios.put(`${baseURL}updateNutritionData`,{email:localStorage.getItem("email"),nutrition:{...formData,'date':date}}).then((res)=>{
            console.log(res.data)
          })
        }
        else {
          setWorkout(prevWorkout=>{
          let newWorkout=prevWorkout
          newWorkout=[...newWorkout,formData]
          
          return newWorkout
         
        })
        axios.post(`${baseURL}postNutritionPlan`,{email:localStorage.getItem("email"),nutrition:{...formData,'date':date}})
          .then((res)=>{
            console.log(res.data)
          })
       
        }

        setFormData({
        'name':'',
          'quantity':'',
          'type':'Breakfast',
          'cross':''
      })

      
      
    }
    let tableInstance=useTable({
      columns:colTable,
      data:memoizedData
    })
    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow}=tableInstance
    
  return (
    <div>WorkoutPlanner
    <div className='workoutTemplate'>
    <div className='Calender'>
    <div className="Dateselector">
      <p onClick={changePrevDate}> {"<"}</p>
      <p> SetDate</p>
      <p onClick={changeNextDate}>{">"}</p>
    </div>
      <Calendar onChange={changeDate} value={date}></Calendar>

    </div>
    <div className='DataTemplate'>
      <form onSubmit={submitForms}>
        <div>

         
          <input type='text' value={formData['name']} name='name' onChange={changeFormData} placeholder='Name iof the food'></input>
          <br/>
          <br/>
          
          <input type='number' value={formData['quantity']} name='quantity' onChange={changeFormData} placeholder='Quantity of food '></input>
          <br/>
          <br/>
          <select type='text' name='type' value={formData['type']}  onChange={changeFormData} >
            <option value="BreakFast" >BreakFast</option>
            <option value="Lunch" >Lunch</option>
            <option value="Dinner" >Dinner</option>
          </select>

          <button type='submit'>Add Food</button>
          
        </div>
        

      </form>
      <div className="container">
        <table {...getTableProps()}>
          <thead>
            {

              <tr>
                {
                  Object.keys(formData).map((keys)=>{
                    return(<th>{keys}</th>)
                
                  })
                }
                  
                </tr>
              
            }
            
          </thead>
          <tbody {...getTableBodyProps}>
            {
              rows.map((row,ind)=>{
                prepareRow(row)
                return (
                  <tr {...row.getRowProps()} >
                    {
                      
                      row.cells.map((cell)=>{
                        //console.log(cell)
                        return (
                         
                            <td {...cell.getCellProps()}>
                            {
                              
                              cell.column.id=='type' ?(
                                <select value={cell.value} name={cell} onChange={(e)=>{
                                  cell.row.values['type']=e.target.value
                                  cell.value=e.target.value
                                  //update the workout data based on the excersise name 
                                  // the name of the excersise will be unique for now
                                  const updatedData=workout.map(item=>
                                    item['name']==cell.row.values['name']?{...item,...cell.row.values}:item
                                  )
                                  setWorkout(updatedData)
                                }}>
                                  <option value="Breakfast">Breakfast</option>
                                  <option value="Lunch">Lunch</option>
                                  <option value="Dinner">Dinner</option>
    
                                </select>
                              ):
                              cell.column.id=='cross' ?(
                                <AiOutlineCloseCircle className='editIcons' onClick={(event)=>{
                                  console.log(cell.row.values)
                                  axios.post(`${baseURL}deleteNutritionPlanByMeals`,{email:localStorage.getItem("email"),nutrition:{...cell.row.values,'date':date}}).then((res)=>{
                                    setWorkout([])
                                    let out=[]
                                   res.data.response.map((val)=>{
                                    let dict ={
                                        'name':'',
                                          'quantity':'',
                                          'type':'Breakfast',
                                          
                                          'cross':''
                                      }
                                      dict.name=val['name']
                                      dict['quantity']=val['quantity']
                                      dict['type']=val["type"]
                                      dict['cross']=""
                                      out.push(dict)
                                            

                                    })
                                    setWorkout(out)

                                  })
                                }}></AiOutlineCloseCircle>
                                
                              ):
                            cell.render('Cell')}
                            
                          </td>
                         

                         
                          
                        )
                      })
                    }
                   
                  </tr>
                )
              })
            }
            
          </tbody>
        </table>

    </div>
      
      
    </div>

    </div>
    
    
  </div>
  )
}

export default DietPlanner