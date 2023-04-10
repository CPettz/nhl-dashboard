import React from "react";

const Card = (props) => {
  return (
    <section className="bg-slate-200 w-fit text-center m-auto mt-10 rounded-md py-4 px-8 shadow-lg">
        {props.children}
    </section>
  );
};

export default Card;
