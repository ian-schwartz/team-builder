import React from "react";

const Members = props => {
    return (
        <div className="member-list">
      {props.members.map(item => (
        <div className="member" key={item.id}>
          <p>{item.name}</p>
          <p>{item.role}</p>
          <p>{item.email}</p>
        </div>
      ))}
    </div>
  );
};

export default Members;
