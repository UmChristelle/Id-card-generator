import IdCard from "./IdCard";
import people from "../data/people";

function CardList() {
  return (
    <div className="flex flex-wrap justify-center gap-8">
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
