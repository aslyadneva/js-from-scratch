import Card from "./Card";
import Header from "./Header";

function MainContent() {
  return (
    <main className=" flex-1  bg-gray-50">
      <Header />

      <div className="pt-20 px-32">
        <h2 className="text-3xl font-semibold tracking-tight text-pretty text-gray-900">
          Good morning, Clearwater
        </h2>
        <p className="mt-6 text-lg/8 text-gray-600">Your business</p>

        {/* Cards Container */}
        <div className="flex">
          <Card />
          <Card />
        </div>
      </div>
    </main>
  );
}

export default MainContent;
