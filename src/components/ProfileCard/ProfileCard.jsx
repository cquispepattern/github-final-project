import React, { useState } from 'react';

const ProfileCard = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [profile, setProfile] = useState({ name: 'Usuario Prueba', phone: '1234567890' });

    const handleSave = (e) => {
        e.preventDefault();
        setIsEditing(false);
    };

    return (
        <div className="profile-card">
            {isEditing ? (
                <form onSubmit={handleSave}>
                    <input type="text" value={profile.name} onChange={e => setProfile({...profile, name: e.target.value})} />
                    <input type="tel" value={profile.phone} onChange={e => setProfile({...profile, phone: e.target.value})} />
                    <button type="submit">Guardar</button>
                </form>
            ) : (
                <div>
                    <h2>{profile.name}</h2>
                    <p>{profile.phone}</p>
                    <button onClick={() => setIsEditing(true)}>Editar</button>
                </div>
            )}
        </div>
    );
};
export default ProfileCard;
