import { FC, memo } from "react";
import { useOutletContext, useParams } from "react-router-dom";

export const Book: FC = memo(() => {
  const { id } = useParams();
  const obj: { hello: string } = useOutletContext();
  return (
    <h1>Book {id} {obj.hello}</h1>
  );
});