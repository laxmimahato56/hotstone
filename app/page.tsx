import Card from "@/components/Card";
import YoungWoman from "@/assets/images/image-young-woman-looking-mobile-phone-her-man 1.png";
import ManImage from "@/assets/images/man-wearing-t-shirt-gesturing 1.png";
import Coin from "../assets/images/coin.png";

export default function Home() {
  const cards = [
    {
      id: 1,
      type: "stat",
      title: "Current Points",
      updatedAt: "Last Updated: May 5, 2025",
      total: "2,400 .00 total",
      positive: 250,
      negative: 15,
      imageSrc: Coin,
    },
    {
      id: 2,
      type: "ad",
      title: "How to use your the points?",
      buttonText: "Tutorial",
      imageSrc: YoungWoman,
    },
    {
      id: 3,
      type: "ad",
      title: "Play more, earn more points!?",
      buttonText: "Play games",
      imageSrc: ManImage,
    },
  ];

  return (
    <div className="m-8 flex gap-6 overflow-scroll">
      {cards.map((card) => (
        <Card key={card.id} card={card} />
      ))}
    </div>
  );
}
