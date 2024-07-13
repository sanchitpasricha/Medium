import edit from "../assets/edit.svg";

function Navbar() {
  return (
    <div className="w-full flex justify-between p-2 ">
      <div className=" flex items-center">
        <img
          className="h-6"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b1/Medium_logo_Wordmark_Black.svg/1280px-Medium_logo_Wordmark_Black.svg.png"
        />
      </div>
      <div className="flex flex-row justify-between space-x-10">
        <button className="flex flex-row items-center space-x-1">
          <img className="h-6" src={edit} />
          <span>Write</span>
        </button>
        <div>
          <div className="h-12 w-12 rounded-full bg-purple-400 flex justify-center items-center">
            <span className="font-medium">U</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
