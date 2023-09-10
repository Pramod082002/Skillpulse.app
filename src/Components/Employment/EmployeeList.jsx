import EmployeeItem from "./EmployeeItem";

const EmployeeList = ({ seniors }) => {
  //const { name, avg, company, ctc } = seniors;
  return (
    <div>
      {seniors &&
        seniors.length !== 0 &&
        seniors.map((d, idx) => (
          <EmployeeItem
            name={d.name}
            avg={d.avg}
            company={d.avg}
            ctc={d.ctc}
            idx
            key={idx}
          />
        ))}
    </div>
  );
};

export default EmployeeList;
