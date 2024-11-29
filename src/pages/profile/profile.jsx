import React from "react";

export const Profile = () => {
    var userData = JSON.parse(localStorage.getItem('user'));

  return (
    <div>
        <p>{userData.first_name} | {userData.middle_name} | {userData.last_name}</p>
    </div>    
  );
};
