import React, { useState } from "react";

const List = ({ data }) => {
  const [people, setPeople] = useState(data);

  const removeItem = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };

  return (
    <>
      <h3>
        {people.length > 0
          ? `${people.length} birthdays today`
          : "No birthdays today"}
      </h3>
      {people.map((person) => {
        const { id, name, age, image } = person;
        return (
          <article className="person" key={id}>
            <img src={image} alt={name} />
            <div>
              <h4>{name}</h4>
              <p>{age} years</p>
              <button className="btn" onClick={() => removeItem(id)}>
                Mark as read
              </button>
            </div>
          </article>
        );
      })}
      {people.length > 0 && (
        <button className="btn-clr" onClick={() => setPeople([])}>
          Clear All
        </button>
      )}
    </>
  );
};

export default List;
