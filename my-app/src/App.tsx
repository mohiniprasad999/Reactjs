import React, { useState } from 'react';
import './App.css';
// import Home from './components/Home'
import EmployeeList from './components/EmployeeList';
import { IEmployee, PageEnum, dummyEmployeList } from './components/Employee.type';
import AddEmployee from './components/AddEmployee';
// import Customer from './components/Customer'
// import Counter from './components/Counter';
// import Youtube from './components/Youtube';
// import Login from './components/Login';
// import AuthUser from './components/AuthUser';
function App() {
  const [employeList, setEmployeList] = useState(dummyEmployeList as IEmployee[]);

  const [shownPage, setShownPage] = useState(PageEnum.list)
  const AddEmployeeHandle = () => {
    setShownPage(PageEnum.add)
  }

  return (
    <>
      <div className="heading">
        <h1>React: Simple crud api</h1>
      </div>
      <div>
        {/* <Customer name="Reactjs" title="ReactJs with Typescript" /> */}
        {/* <Counter />
      <Youtube /> */}
        {/* <Login /> */}
        {/* <AuthUser /> */}
        {shownPage === PageEnum.list &&
          <>
            <input type="button" value="Add a employee" onClick={AddEmployeeHandle} />

            <EmployeeList list={employeList} />
          </>}
        {shownPage === PageEnum.add && <AddEmployee />}
      </div>
    </>
  );
}

export default App;
