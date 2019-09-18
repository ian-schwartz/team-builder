import React, { useState } from "react";

const MemberForm = props => {
    console.log("props", props);
    const [member, setMember] = useState({ name: "", role: "", email: "" });

    const handleChanges = e => {
        console.log(member);
        setMember({...member, [e.target.name]: e.target.value });
    }


const submitForm = e => {
    e.preventDefault();
    props.addNewMember(member);
    setMember({ name: "", role: "", email: "" })
};

return (
    <form onSubmit={submitForm}>
        <label htmlFor="name" className="form-label">Name: </label>
        <input id="name" type="text" name="name" onChange={handleChanges} value={member.name} className="input"></input>
        <label htmlFor="role" className="form-label">Role: </label>
        <input id="role" type="text" name="role" onChange={handleChanges} value={member.role} className="input"></input>
        <label htmlFor="email" className="form-label">Email: </label>
        <input id="email" type="text" name="email" onChange={handleChanges} value={member.email} className="input"></input>
        <button type="submit" className="button">Add Member</button>
    </form>
    );
};


export default MemberForm;