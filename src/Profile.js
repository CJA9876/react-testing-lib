import React from "react";

const Profile = ({username, name}) => {
    return (
        <div>
            <b>{username}1</b> <span>({name})</span>
        </div>
    );
};

export default Profile;