import React from "react";

export default function page() {
  return (
    <div>
      <div>
        <h1>Adress</h1>
        <div>
          <label htmlFor="">City</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">Street</label>
          <input type="text" />
        </div>
        <div>
          <label htmlFor="">House Number</label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}
