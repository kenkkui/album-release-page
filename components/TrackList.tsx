import SongsTable from "./SongsTable";

const TrackList = () => {
  return (
    <section className="w-full h-screen flex flex-col items-center">
      <header className="w-full py-9">
        <h2 className="font-generalSans text-subheading uppercase">
          Track List
        </h2>
      </header>
      <SongsTable />
    </section>
  );
};

export default TrackList;
