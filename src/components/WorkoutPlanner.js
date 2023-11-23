import React, { useEffect, useMemo, useState } from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import '../styles/WorkoutPlanner.css'
import {useTable} from 'react-table'
import DatePicker from 'react-datepicker'
import { AiFillEdit,AiOutlineCloseCircle } from "react-icons/ai";
import axios from "axios"
import { baseURL } from '../constants/Constants';
const WorkoutPlanner = () => {

  const options = { day: '2-digit', month: '2-digit', year: 'numeric' };
    const [date,set1Date]=useState(new Date(Date.now()));
    const [workout,setWorkout]=useState([]);
    const [col1,setCol1]=useState([])
    const [flag,setFlag]=useState(null)
    const [formData,setFormData]=useState({
      'name':'',
        'duration':'',
        'timeParam':'Hours',
        'achieved':'No',
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
  axios.post(`${baseURL}getFitnessPlan`,{email:localStorage.getItem("email"),workout:{...formData,'date':date}}).then((res)=>{
    setFlag(null)
    setWorkout([])
    let out=[]
    if(res.data.response!=null)
    {
      console.log(res.data.response)
      res.data.response.map((val)=>{
        let dict ={
                  'name':'',
                    'duration':'',
                    'timeParam':'Hours',
                    'achieved':'No',
                    'cross':''
                }
                dict.name=val['name']
                dict['duration']=val['duration']
                dict['timeParam']=val["timeParam"]
                dict['achieved']=val['achieved']
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
        }
        else{
          setWorkout(prevWorkout=>{
          let newWorkout=prevWorkout
          newWorkout=[...newWorkout,formData]
          return newWorkout
         
        })
        if(f==false)
        {
          axios.put(`${baseURL}updateFitnessPlan`,{email:localStorage.getItem("email"),workout:{...formData,'date':date}}).then((res)=>{
            console.log(res.data)
          })

        }
        else if(f==true){
          axios.post(`${baseURL}postFitnessPlan`,{email:localStorage.getItem("email"),workout:{...formData,'date':date}})
        .then((res)=>{
          console.log(res.data)
        })

        }
        }

        setFormData({
        'name':'',
          'duration':'',
          'timeParam':'Hours',
          'achieved':'No',
          'cross':''
      })

      
      
    }
    let tableInstance=useTable({
      columns:colTable,
      data:memoizedData
    })
    const {getTableProps,getTableBodyProps,headerGroups,rows,prepareRow}=tableInstance

    
  return (
    <div>
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
            <label>Enter the Execersise</label>
            <input type='text' value={formData['name']} name='name' onChange={changeFormData} ></input>
            <label>Enter the duration</label>
            <input type='number' value={formData['duration']} name='duration' onChange={changeFormData} ></input>
            <select type='text' name='timeParam' value={formData['timeParam']}  onChange={changeFormData} >
              <option value="Hours" >Hours</option>
              <option value="Minutes" >Minutes</option>
              <option value="Second" >Second</option>
            </select>

            <button type='submit'>Add Workout</button>
            
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
                rows.map(row=>{
                  prepareRow(row)
                  return (
                    <tr {...row.getRowProps()} >
                      {
                        
                        row.cells.map((cell)=>{
                          //console.log(cell)
                          return (
                           
                              <td {...cell.getCellProps()}>
                              {
                                
                                cell.column.id=='achieved' ?(
                                  <select value={cell.value} name={cell} onChange={(e)=>{
                                    cell.row.values['achieved']=e.target.value
                                    cell.value=e.target.value
                                    //update the workout data based on the excersise name 
                                    // the name of the excersise will be unique for now
                                    const updatedData=workout.map(item=>
                                      item['name']==cell.row.values['name']?{...item,...cell.row.values}:item
                                    )
                                    setWorkout(updatedData)
                                  }}>
                                    <option value="Yes">Yes</option>
                                    <option value="No">No</option>
      
                                  </select>
                                ):
                                cell.column.id=='cross' ?(
                                  <AiOutlineCloseCircle  onClick={(event)=>{
                                    console.log(cell.row.values)
                                    axios.post(`${baseURL}deleteFitnessPlan`,{email:localStorage.getItem("email"),workout:{...cell.row.values,'date':date}}).then((res)=>{
                                      setWorkout([])
                                      let out=[]
                                     res.data.response.map((val)=>{
                                        let dict ={
                                                  'name':'',
                                                    'duration':'',
                                                    'timeParam':'Hours',
                                                    'achieved':'No',
                                                    'cross':''
                                                }
                                                dict.name=val['name']
                                                dict['duration']=val['duration']
                                                dict['timeParam']=val["timeParam"]
                                                dict['achieved']=val['achieved']
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

export default WorkoutPlanner