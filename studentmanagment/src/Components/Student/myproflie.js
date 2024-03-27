import React from 'react'
import myprofliee from "./myproflie.css"
import img1 from "./../../image/27470334_7309681.jpg"
function myproflie() {
    const profile = {
        firstName: 'Tesa',
        lastName: 'Hongkai',
        dateOfBirth: '12 Dec 2003',
        age: 21,
        gender: 'Female',
        fatherName: 'Chan',
        motherName: 'Tersa'
      };
    
  return (
     <div className='backimg'>
    <div className="student-profile">
    <h2>Student  Profile</h2>
    <img src={img1} class="image" alt="..."/>
    <div className="profile-details">
      <div>
        <strong>First Name:</strong> {profile.firstName}
      </div>
      <div>
        <strong>Last Name:</strong> {profile.lastName}
      </div>
      <div>
        <strong>Date of Birth:</strong> {profile.dateOfBirth}
      </div>
      <div>
        <strong>Age:</strong> {profile.age}
      </div>
      <div>
        <strong>Gender:</strong> {profile.gender}
      </div>
      <div>
        <strong>Father's Name:</strong> {profile.fatherName}
      </div>
      <div>
        <strong>Mother's Name:</strong> {profile.motherName}
      </div>
    </div>
  </div>
  </div>
);
};
export default myproflie
