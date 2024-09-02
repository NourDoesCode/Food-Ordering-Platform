import SearchBar from "@/components/SearchBar";
import PhoneScreens from "../assets/landing.png";
import DownloadMobile from "../assets/downloads.png";
function HomePage() {
  return (
    <section className="flex flex-col ">
      {/*Title + SearchBar card */}
      <div className="flex flex-col gap-5 rounded-lg border shadow-md py-8  text-center -mt-16 bg-white">
        {/*Title*/}
        <div className="">
          <h1 className="font-bold text-orange-500 tracking-tight text-4xl">
            Tuck into a takeaway today
          </h1>
          <p className="text-black/80 text-lg pt-4">
            Food is just a click away!
          </p>
        </div>
        {/*SearchBar */}
        <SearchBar />
      </div>
      {/*Phone screens + download */}
      <div className="grid md:grid-cols-2 grid-cols-1 justify-around py-12 gap-5 ">
        {/*Phone screens */}
        <div className=" max-w-[620px] ">
          <img src={PhoneScreens} alt="PhoneScreens" />
        </div>
        {/*download */}
        <div className="flex flex-col gap-4 items-center justify-center p-5  ">
          <h2 className="font-bold text-black tracking-tight text-4xl">
            Order Take-away even faster!
          </h2>
          <p className="text-black/80 text-lg ">
            Download the NourEats App for faster ordering and personalized
            recommendations
          </p>
          <img
            src={DownloadMobile}
            alt="DownloadMobile"
            className="max-w-[360px] "
          />
        </div>
      </div>
    </section>
  );
}

export default HomePage;
//border-4 border-blue-600
//border-4 border-yellow-600
//border-4 border-purple-600
//border-4 border-blue-600
