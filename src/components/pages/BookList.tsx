import { FC, memo } from "react";
import styled from "styled-components";
import { useInView } from "react-intersection-observer";
import "./BookList.css";

export const BookList: FC = memo(() => {
  const { ref, inView } = useInView({
    rootMargin: "100px",
    triggerOnce: false,
  });

  const boxs =  [{
    text: "box1",
    className: "fadeIn"
  },
  {
    text: "box2",
    className: "fadeIn2"
  },
  {
    text: "box3",
    className: "fadeIn3"
  }];

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>BOOKLIST</h1>
      <SCenter>
        {boxs.map((box) => (
          <div ref={ref} className={inView ? `fade ${box.className}` : "div"}>
            <p>{box.text}</p>
          </div>
        ))}
      </SCenter>
    </div>
  );
});

const SCenter = styled.div`
  height: 200vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

