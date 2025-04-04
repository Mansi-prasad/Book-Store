import axios from "axios";
import React, { useState } from "react";
import { data, useNavigate } from "react-router-dom";
import BackButton from "../Components/BackButton";
import Spinner from "../Components/Spinner";
// import qs from "qs";
import { useSnackbar } from "notistack"; // for enhance the user experience

export const CreateBooks = () => {
  const [title, settitle] = useState("");
  const [author, setauthor] = useState("");
  const [publishYear, setpublishYear] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { enqueueSnackbar } = useSnackbar();
  const handleSaveBook = () => {
    const book_data = {
      // Ensure these match the backend expected field names
      title,
      author,
      publishYear,
    };
    setLoading(true);
    axios
      .post("http://localhost:5000/books", book_data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then(() => {
        setLoading(false);
        enqueueSnackbar("Book Details Created Successfully!", {
          variant: "success",
        });
        navigate("/");
      })
      .catch((err) => {
        setLoading(false);
        // alert("An Error Occurred! Please Check the Console");
        enqueueSnackbar("ERROR!", { variant: "error" });
        console.log(err);
        console.log(book_data);
        // console.log("Error creating book:", err.response?.data || err.message);
      });
  };
  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>
      {loading ? <Spinner /> : ""}
      <div className="flex flex-col border-2 border-pink-500 rounded-xl w-[600px] p-4 mx-auto">
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Title</label>
          <input
            type="text"
            value={title}
            onChange={(e) => {
              settitle(e.target.value);
            }}
            className="border-2 border-gray-500 px-2 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Author</label>
          <input
            type="text"
            value={author}
            onChange={(e) => {
              setauthor(e.target.value);
            }}
            className="border-2 border-gray-500 px-2 py-2 w-full"
          />
        </div>
        <div className="my-4">
          <label className="text-xl mr-4 text-gray-500">Publish Year</label>
          <input
            type="text"
            value={publishYear}
            onChange={(e) => {
              setpublishYear(e.target.value);
            }}
            className="border-2 border-gray-500 px-2 py-2 w-full"
          />
        </div>
        <button className="p-2 bg-pink-400 m-8" onClick={handleSaveBook}>
          Save Book
        </button>
      </div>
    </div>
  );
};
export default CreateBooks;
