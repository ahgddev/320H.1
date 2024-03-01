import SearchBar from './SearchBar'
import Header from './Header'
import EmployeeList from './EmployeeList'

const HomePage = () => {
    return (
      <div className="page">
        <Header title={"Employees"} />
        <SearchBar/>
        <EmployeeList/>
      </div>
    );
  };
  export default HomePage;