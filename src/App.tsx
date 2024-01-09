function App() {
  return (
    <>
      <div className="m-auto flex justify-center items-center w-screen h-screen bg-yellow">
        <div id="shadow" className="bg-white w-[380px] h-[500px] rounded-[20px] border-[1px] border-black p-5 md: m-5">
          <div className="flex justify-center items-center">
            <img src="../static/images/illustration-article.svg" alt="" width={350} height={50} className="rounded-xl" />
          </div>
          <div className="flex flex-col justify-between h-[250px]">
            <div className="w-[80px] h-[30px] bg-yellow text-center rounded-md mt-5">
              <p className="text-[1rem] font-extrabold">Learning</p>
            </div>
            <p>Published 21 Dec 2023</p>
            <h1 className="text-xl font-extrabold hover:text-yellow cursor-pointer">HTML & CSS foundations</h1>
            <p className="text-[1rem] text-grey">These languages are the backbone of every website, defining structure, content, and presentation.</p>
            <div className="flex items-center">
              <img src="../static/images/image-avatar.webp" alt="" width={35} height={35} />
              <p className="font-extrabold text-[1rem] pl-4">Greg Hooper</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
