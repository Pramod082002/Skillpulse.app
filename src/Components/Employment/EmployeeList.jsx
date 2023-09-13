import EmployeeItem from "./EmployeeItem";

const EmployeeList = ({ seniors }) => {
  
  return (
    <div>
      {seniors &&
        seniors.length !== 0 &&
        seniors.map((d, idx) => (
          <EmployeeItem
            name={d.name}
            eis={d.eis}
            company={d.eis}
            ctc={d.ctc}
            idx
            key={idx}
          />
        ))}
    </div>
  );
};

export default EmployeeList;
