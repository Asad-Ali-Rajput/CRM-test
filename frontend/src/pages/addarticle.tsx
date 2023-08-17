import React, { useState } from "react";

const ModalUI = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleImageUpload = (event: any) => {
    const file = event.target.files[0];
    setSelectedImage(file);
  };

  const handleSubmit = () => {
    const token = localStorage.getItem("token");
    if (!token) {
      console.error("Token not found in local storage.");
      return;
    }
  
    const requestBody = {
      title: title,
      content: content,
      image: selectedImage ? selectedImage : "",
      status: 'pending'
    };
  
    const requestOptions = {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json", // Set the content type to JSON
      },
      body: JSON.stringify(requestBody),
    };
  
    fetch("http://localhost:8080/content/add", requestOptions)
      .then((response) => response.json())
      .then((data) => {
        // Handle success or show a message
        console.log("Article created successfully:", data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  return (
    <div>
      <div className="bg-grey-lighter min-h-screen flex flex-col">
        <div className="container mx-auto flex-1 flex flex-col items-center justify-center px-2">
          <div className="bg-white px-6 py-8 rounded shadow-md text-black w-full">
            <h1 className="mb-8 text-3xl text-center">Add Article</h1>
            <input
              type="text"
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="title"
              placeholder="Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />

            <textarea
              className="block border border-grey-light w-full p-3 rounded mb-4"
              name="content"
              cols={100}
              rows={10}
              placeholder="Content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
            />

            {/* Image Upload */}
            <input
              type="file"
              accept="image/*"
              className="mb-4"
              onChange={handleImageUpload}
            />

            <button
              type="button"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalUI;
