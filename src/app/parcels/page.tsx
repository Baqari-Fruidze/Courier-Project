import React from "react";

export default function Page() {
  return (
    <form>
      <label>Select your preference:</label>

      <input type="radio" id="enter" name="value" value="" />
      <label htmlFor="enter">enter</label>

      <input type="radio" id="investor" name="value" />
      <label htmlFor="inverstor">investor</label>

      <input type="submit" value="Submit" />
    </form>
  );
}
