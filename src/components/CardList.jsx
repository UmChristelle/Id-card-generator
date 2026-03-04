import IdCard from "./IdCard";
import people from "./data/people";

function CardList() {
  return (
    <div style={{
      display: "flex",
      flexWrap: "wrap",
      justifyContent: "center",
      gap: "32px",
    }}>
      {people.map((person) => (
        <IdCard
          key={person.id}
          id={person.id}
          name={person.name}
          role={person.role}
          department={person.department}
          avatar={person.avatar}
        />
      ))}
    </div>
  );
}

export default CardList;
