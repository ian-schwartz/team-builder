import React from "react";

const Members = props => {
    return (
        <div className="member-list">
      {props.members.map(item => (
        <div className="member" key={item.id}>
          <h2>{item.name}</h2>
          <p>{item.role}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Members;
