const CustomUser = ({ name, id, username, email }) => {
  return (
    <div className="container mt-2">
      <section className="card">
        <h2 className="p-2">
          {name} {id}
        </h2>
        <details className="p-3">
          <p>{username}</p>
          <address>{email}</address>
        </details>
      </section>
    </div>
  );
};

export default CustomUser;
