import banner from "../../assets/banner.png";
const Banner = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
      }}
      className="flex justify-center items-center p-32 rounded-xl px-5 md:px-10"
    >
      <div className="text-center border border-zinc-100 w-full lg:w-2/3 space-y-4">
        <h1 className="text-3xl lg:text-5xl leading-snug text-white">
          Discover an exceptional cooking class tailored for you!
        </h1>
        <p className="text-white text-lg">
          Embark on a culinary experience like no other with our fastidiously
          organized cooking classes, intended to take care of your special
          preferences and expertise level. From excelling at French cuisine to
          exploring colorful flavors from around the globe, find the ideal
          culinary experience custom-made only for you.
        </p>
        <div className="flex gap-3 items-center justify-center">
          <button className="btn hover:bg-green-500 px-10 p-3 border-none bg-green-500 rounded-full ">
            Explore Now
          </button>
          <button className="btn hover:bg-transparent px-10 p-3  bg-transparent text-white rounded-full ">
            Our Feedback
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
