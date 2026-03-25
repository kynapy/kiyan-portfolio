"use client";

export const Header = () => {
  return (
    <ul
      style={{
        position: "absolute",
        display: "flex",
        columnGap: "20px",
        paddingTop: "20px",
      }}
    >
      <li>
        <a href="">About</a>
      </li>
      <li>
        <a href="">Professional Experience</a>
      </li>
      <li>
        <a href="">Contact</a>
      </li>
    </ul>
  );
};
