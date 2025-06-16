import Image from "next/image";

const todaysPicks = [
  {
    id: 1,
    name: "Fuo Premium Chair",
    image: "/chair1.jpg",
    rating: "4.9/5 ⭐",
    description: "Expert-verified comfort with sleek aesthetics.",
  },
  {
    id: 2,
    name: "Fuo Classic Lounge",
    image: "/chair2.jpg",
    rating: "4.8/5 ⭐",
    description: "Timeless design with unmatched durability.",
  },
  {
    id: 3,
    name: "Fuo Ergonomic Seat",
    image: "/chair3.jpg",
    rating: "4.7/5 ⭐",
    description: "Perfect balance of support and style.",
  },
];

const TodaysPicks: React.FC = () => {
  return (
    <div className="mt-12 max-w-screen-lg mx-auto">
      <h2 className="text-4xl font-bold text-center">Today's Picks</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {todaysPicks.map((item) => (
          <div key={item.id} className="bg-white p-4 rounded-lg shadow-lg text-center">
            <Image src={item.image} alt={item.name} width={300} height={200} className="rounded-lg" />
            <h3 className="text-xl font-semibold mt-4">{item.name}</h3>
            <p className="text-gray-600">{item.rating}</p>
            <p className="text-gray-500 mt-2">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TodaysPicks;