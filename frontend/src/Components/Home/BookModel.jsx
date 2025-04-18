import React from "react";
import { AiOutlineClose } from "react-icons/ai";
import { PiBookOpenTextLight } from "react-icons/pi";
import { BiUserCircle } from "react-icons/bi";

export const BookModel = ({ book, onClose }) => {
  return (
    <div
      className="fixed bg-black bg-opacity-60 top-0 left-0 right-0 bottom-0 z-50 flex justify-center items-center"
      onClick={onClose}
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="w-[600px] max-w-full h-[400px] bg-white rounded-xl p-4 flex flex-col relative"
      >
        {/* cross icon */}
        <AiOutlineClose
          className="absolute right-6 top-6 text-3xl text-red-600 curser-pointer"
          onClick={onClose}
        />
        <h2 className="w-fit px-4 py-1 bg-red-400 rounded-lg">
          {book.publishYear}
        </h2>
        <h4 className="my-2 text-gray-500">{book._id}</h4>
        <div className="flex justify-start items-center gap-x-2">
          <PiBookOpenTextLight className="text-red-400 text-2xl" />
          <h2 className="my-1">{book.title}</h2>
        </div>
        <div className="flex justify-start items-center gap-x-2">
          <BiUserCircle className="text-red-400 text-2xl" />
          <h2 className="my-1">{book.author}</h2>
        </div>
        <p className="mt-4">Anything about Book</p>
        <p className="my-2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
          excepturi sunt odio obcaecati quia provident voluptatibus repellat,
          aut incidunt ipsam rerum vitae. At atque ipsam iure commodi rem dolor
          porro? In rem dignissimos ad! Voluptatum consequatur nisi porro minus
          repudiandae accusamus itaque harum, ab delectus rem, a cum id placeat
          provident sit et fugiat eligendi deserunt? Quasi saepe sed quam,
          dignissimos nulla commodi soluta nemo nihil accusamus fugit recusandae
          a doloribus, facilis cumque quod expedita quis provident ratione!
          Incidunt, eveniet nam. Similique quas vero reprehenderit repudiandae
          id dolore atque dolorum aliquam placeat esse beatae itaque, veritatis,
          libero possimus accusantium impedit.
        </p>
      </div>
    </div>
  );
};
