// src/pages/Profile.jsx
export default function Profile() {
  const user = JSON.parse(localStorage.getItem('user'));
  return (
    <div>
      <h2>User Profile</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
    </div>
  );
}