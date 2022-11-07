import { FC, memo } from "react";
import { Link } from "react-router-dom";

export const Home: FC = memo(() => {
  return (
    <>
      <div>Home画面です</div>
      <ul>
        <li><Link to="/book">BookList</Link></li>
      </ul>
    </>
  );
});