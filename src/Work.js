import React from "react";

function Work() {
  const images = [
    {
      image: "/images/mori_1.jpg",
      desc: "Write a description of the image here.",
    },
    {
      image: "/images/mori_2.jpg",
      desc: "Write a description of the image here.",
    },
    {
      image: "/images/mori_3.jpg",
      desc: "Write a description of the image here.",
    },
    {
      image: "/images/mori_4.jpg",
      desc: "Write a description of the image here.",
    },
    {
      image: "/images/mori_5.jpg",
      desc: "Write a description of the image here.",
    },
    {
      image: "/images/mori_6.jpg",
      desc: "Write a description of the image here.",
    },
    {
      image: "/images/mori_7.jpg",
      desc: "Write a description of the image here.",
    },
    {
      image: "/images/mori_8.jpg",
      desc: "Write a description of the image here.",
    },
    {
      image: "/images/mori_9.jpg",
      desc: "Write a description of the image here.",
    },
    {
      image: "/images/mori_10.jpg",
      desc: "Write a description of the image here.",
    },
    {
      image: "/images/mori_11.jpg",
      desc: "Write a description of the image here.",
    },
    {
      image: "/images/mori_12.jpg",
      desc: "Write a description of the image here.",
    },
    {
      image: "/images/mori_13.jpg",
      desc: "Write a description of the image here.",
    },
    {
      image: "/images/mori_14.jpg",
      desc: "Write a description of the image here.",
    },
    {
      image: "/images/mori_15.jpg",
      desc: "Write a description of the image here.",
    },
    {
      image: "/images/mori_16.jpg",
      desc: "Write a description of the image here.",
    },
    {
      image: "/images/mori_17.jpg",
      desc: "Write a description of the image here.",
    },
  ];

  return (
    <div className="photo-grid">
      {images.map((images) => (
        <div class="container">
	  <img src={images.image} alt="" key={images.image} />
          <div class="mask">
	    <div class="caption">Write a description of the image here.</div>
	  </div>
	</div>
      ))}
    </div>
  );
}

export default Work;
