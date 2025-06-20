import { IslandCard } from "@/components/IslandCard";

export default function Main() {
  return (
    <div className="flex w-full flex-col space-y-10 bg-gray-800 p-6">
      <h1 className="text-2xl font-semibold">Explore the Island of Agutaya</h1>
      <div className="mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {IslandInfo.map((island, index) => (
          <IslandCard key={index} island={island} />
        ))}
      </div>

      <h1 className="text-2xl font-semibold">Explore the Island of Agutaya</h1>
      <div className="mt-8 grid w-full grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {IslandInfo.map((island, index) => (
          <IslandCard key={index} island={island} />
        ))}
      </div>
    </div>
  );
}

const IslandInfo = [
  {
    name: "Alog Beach",
    image:
      "https://www.qantas.com/travelinsider/en/explore/asia/philippines/the-complete-guide-to-palawan-philippines/_jcr_content/parsysTop/hero.img.1440.high.jpg/1532400909754.jpg",
    distance: "5 km from San Vicente",
  },
  {
    name: "Culion Island",
    image:
      "https://cf.bstatic.com/xdata/images/hotel/max1024x768/590315013.jpg?k=7ed32fe5f6854c525581a0b9fe64589e01a4c8e229a16803078e6687bc82b241&o=&hp=1",
    distance: "20 km from Agutaya",
  },
  {
    name: "Coron Island",
    image:
      "https://miro.medium.com/v2/resize:fit:1400/1*Bzg8hk5HD3PraFEZiksSeg.jpeg",
    distance: "30 km from Agutaya",
  },
  {
    name: "El Nido",
    image:
      "https://lh6.googleusercontent.com/proxy/jSU3ZZlooni1_EJBzdWhNIxslBoLU9wv4nZ-1o-vAIkbhq1XKzbzK8O5ncDRknap7-OJZO4E1t4sqlemlYGI-6pHliHlR71nexfUJi1SinZdP1XPj-7dxqTferLWT97dpnMBx1kHTEU3",
    distance: "50 km from Agutaya",
  },
];
