import React, { useState, useEffect } from "react";

function PersonList() {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    fetch("https://randomuser.me/api/?results=10")
      .then((response) => response.json())
      .then((data) => setPersons(data.results))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1
        style={{
          backgroundColor: "green",
          color: "white",
          padding: "20px",
          textAlign: "center",
        }}
      >
        User List
      </h1>
      {persons.map((person) => (
        <div
          key={person.login.uuid}
          style={{
            display: "flex",
            alignItems: "flex-start",
            border: "1px solid #ddd",
            padding: "20px",
            marginBottom: "10px",
            borderRadius: "4px",
            backgroundColor: "teal",
          }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              marginRight: "20px",
            }}
          >
            <img
              src={person.picture.large}
              alt={`${person.name.first} ${person.name.last}`}
              style={{
                width: "100px",
                borderRadius: "50%",
                marginBottom: "10px",
              }}
            />
            <button
              style={{
                padding: "5px 10px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                backgroundColor: "#007bff",
                color: "white",
              }}
            >
              Details
            </button>
          </div>
          <div>
            <h2
              style={{ color: "green" }}
            >{`${person.name.title} ${person.name.first} ${person.name.last}`}</h2>
            <p>
              <strong>User Name:</strong> {person.login.username}
            </p>
            <p>
              <strong>Gender:</strong> {person.gender}
            </p>
            <p>
              <strong>Time Zone Description:</strong>{" "}
              {person.location.timezone.description}
            </p>
            <p>
              <strong>Address:</strong>{" "}
              {`${person.location.street.number} ${person.location.street.name}, ${person.location.city}, ${person.location.state}`}
            </p>
            <p>
              <strong>Email:</strong> {person.email}
            </p>
            <p>
              <strong>Birth Date and Age:</strong>{" "}
              {`${new Date(person.dob.date).toLocaleDateString()} (${
                person.dob.age
              })`}
            </p>
            <p>
              <strong>Register Date:</strong>{" "}
              {new Date(person.registered.date).toLocaleDateString()}
            </p>
            <p>
              <strong>Phone:</strong> {person.phone}
            </p>
            <p>
              <strong>Cell:</strong> {person.cell}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default PersonList;
