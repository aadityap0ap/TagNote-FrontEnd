import Buttons from "./components/Buttons"
import Card from "./components/Card"
import Sidebar from "./components/SideBar"
import Signin from "./Pages/Signin"
import Signup from "./Pages/SignUp"

function App() {
  return (
    <div className="">
      {/* <Buttons text="Delete"/>
       
      <Card
        title="React Notes"
        content="Today I learned about reusable components and props."
        tags={["react", "frontend", "javascript"]}
      />

      <Card
        title="DBMS"
        content="Normalization removes redundancy in databases."
        tags={["dbms", "sql", "college"]}
      />

       <Card
        title="DBMS"
        content="Normalization removes redundancy in databases."
        tags={["dbms", "sql", "college"]}
      /> */}
     <Sidebar/>

    </div>
    // <div>
    //   <Signin/>
    // </div>
  )
}

export default App