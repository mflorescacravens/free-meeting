import React from 'react';
import './App.css';

function App() {
  const meetingTimes = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15];
  var personMeetings = [];
  

  function addTimes(e) {
    
  }

  function addEmployee() {
    if (document.getElementById("employeeName").value !== "") {
      var nodeValue = document.getElementById("employeeName").value
      var textNode = document.createTextNode(nodeValue)
      var node = document.createElement("li");
      node.appendChild(textNode);
      document.getElementById("employeeList").appendChild(node);
      node.classList.add("list")
      var buttonNode = document.createElement("button");
      // buttonNode
      var buttonText = document.createTextNode("+");
      buttonNode.appendChild(buttonText)
      node.appendChild(buttonNode)
      node.onclick = addTimes
    }
  }


  return (
    <div className="App">
      <h1>App: Find the available meeting times</h1>
      <h3>The point of this app is to merge all employee meetings in to one list (or array rather) and find what available meeting times work for all other employees</h3>
      <h6>My sudo code:</h6>
      <ul>
        <li>create a button that allows you to create a new field for each employees schedule</li>
        <li>create a button that merges times and then offers available time slots</li>
        <li>times will be in increments of 30 min slots and represented by whole numbers starting from 0</li>
        <li>the time slots will start from 9AM and will end at 5PM which means there will be 16 time slots in total.</li>
      </ul>
      <div id="add">
        <h6>Employee Name:</h6>
        <input id="employeeName" type="text"/>
        <button onClick={addEmployee} id="addEmployeeBttn">add employee</button>
      </div>
      <div>
        <h4>Employees:</h4>
        <ul id="employeeList">

        </ul>
      </div>
    </div>
  );
}

export default App;
