import React from 'react';

function UserForm({ handleSubmit, handleChange, user }) {
  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Login form!</h2>
        <div className="form__section-left">

          <label>
            Email
            <input
              type="email"
              name="email"
              required
              onChange={handleChange}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              name="password"
              required
              onChange={handleChange}
            />
          </label>

          <input type="submit" value="Submit!" onClick={handleSubmit} />
        </div>
      </form>
    </div>
  );
}

export default UserForm;
