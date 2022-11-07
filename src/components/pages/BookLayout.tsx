import { FC, memo } from "react";
import { Link, Outlet } from "react-router-dom";

export const BookLayout: FC = memo(() => {

  const headerStyle = {
    backgroundColor: "teal",
    height: "100px",
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };

  const ulstyle = {
    display: "flex",
    padding: 4,
    listStyle: "none",
  };

  const linkStyle = {
    color: "black",
    textDecoration: "none",
  }

  return (
    <>
      <header style={headerStyle}>
        <h1>react-router-dom v6</h1>
        <ul style={ulstyle}>
          <li style={{ marginRight: 8 }}>
            <Link style={linkStyle} to="1">book1</Link>
          </li>
          <li>
            <Link style={linkStyle} to="newbook">NewBook</Link>
          </li>
        </ul>
      </header>
      <Outlet context={{ hello: "world" }} />
    </>
  );
});