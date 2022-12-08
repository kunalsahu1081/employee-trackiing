import './App.css'
import Header from './Header';
import Employees from './Employees';
import GroupedMembers from './GroupedMembers';
import Footer from './Footer';
import Nav from './nav';
import {useState,useEffect} from 'react';
import {BrowserRouter as Router, Route , Routes} from 'react-router-dom';

export default function App() {

const [selectedTeam,setTeam] = useState(JSON.parse(localStorage.getItem('selectedTeam')) || "TeamC");

  const [employees,setEmployees] = useState(JSON.parse(localStorage.getItem('employeList')) || [{
      id: 1,
      fullName: "Bob Jones",
      designation: "JavaScript Developer",
      gender: "male",
      teamName: "TeamA"
    },
    {
      id: 2,
      fullName: "Jill Bailey",
      designation: "Node Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 3,
      fullName: "Gail Shepherd",
      designation: "Java Developer",
      gender: "female",
      teamName: "TeamA"
    },
    {
      id: 4,
      fullName: "Sam Reynolds",
      designation: "React Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 5,
      fullName: "David Henry",
      designation: "DotNet Developer",
      gender: "male",
      teamName: "TeamB"
    },
    {
      id: 6,
      fullName: "Sarah Blake",
      designation: "SQL Server DBA",
      gender: "female",
      teamName: "TeamB"
    },
    {
      id: 7,
      fullName: "James Bennet",
      designation: "Angular Developer",
      gender: "male",
      teamName: "TeamC"
    },
    {
      id: 8,
      fullName: "Jessica Faye",
      designation: "API Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 9,
      fullName: "Lita Stone",
      designation: "C++ Developer",
      gender: "female",
      teamName: "TeamC"
    },
    {
      id: 10,
      fullName: "Daniel Young",
      designation: "Python Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 11,
      fullName: "Adrian Jacobs",
      designation: "Vue Developer",
      gender: "male",
      teamName: "TeamD"
    },
    {
      id: 12,
      fullName: "Devin Monroe",
      designation: "Graphic Designer",
      gender: "male",
      teamName: "TeamD"
    }])

  function handleTeamSelection(event){
    setTeam(event.target.value);
  }

  useEffect(()=>{
    localStorage.setItem('employeList',JSON.stringify(employees));
  },[employees])

  useEffect(()=>{
    localStorage.setItem('selectedTeam',JSON.stringify(selectedTeam))
  },[selectedTeam])

  function handleOnClickCard(event){
    const transformedEmpl = employees.map((e)=>{
      if(e.id==event.currentTarget.id){
        if(e.teamName===selectedTeam){
          e.teamName = ' ';
        }
        else{
          e.teamName = selectedTeam;
          
        }
        console.log("x");
      }
      return e;
    })
    console.log(transformedEmpl);
    setEmployees(transformedEmpl);
  }


  
  return (
    <Router>
      <div>
          <Nav/>
          <Header selectedTeam={selectedTeam}
                  noOfMembers={employees.filter((e)=>e.teamName===selectedTeam).length}/>

        <Routes>
          <Route path="/" element={<Employees employees={employees}
                       selectedTeam={selectedTeam}
                      handleOnClickCard={handleOnClickCard}
                      handleTeamSelection={handleTeamSelection}/>}>
          </Route>  
          <Route path="/GroupedMembers" element={
            <GroupedMembers/>
          }></Route>
        </Routes>  
        <Footer/>
      </div>
      </Router>
  )
}
