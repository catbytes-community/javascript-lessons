const allUsers = ["Marina", "Elena", "Julia"];

// .map --> in-built method in JavaScript for Array

allUsers.map((user) => {
  return (
    <div>
      <p>{user}</p>
    </div>
  );
});
