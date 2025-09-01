import React from "react";
import Image, { StaticImageData } from "next/image";

import { TrendingUp, TrendingDown } from "@/assets/icons";

interface ICard {
  title: string;
  type: string;
  buttonText?: string;
  updatedAt?: string;
  total?: string;
  positive?: number;
  negative?: number;
  imageSrc?: StaticImageData;
}

const Card = ({ card }: { card: ICard }) => {
  const isStatCard = card.type === "stat";

  if (isStatCard) {
    return (
      <div className="p-7 w-[360px] border border-[#E5E5EA] rounded-2xl">
        <div className="flex justify-between items-center">
          <h3 className="text-md font-bold">{card.title}</h3>
          <p className="text-sm font-normal text-[#5E5E5E]">{card.updatedAt}</p>
        </div>
        <div className="mt-4 flex items-center gap-2.5">
          <Image src={card.imageSrc} alt="coin" height={55} width={58} />
          <h2 className="text-2xl font-bold">{card.total}</h2>
        </div>
        <div className="mt-7 flex gap-4 justify-end">
          <div className="flex items-center gap-2">
            <div className="size-9 border border-[#E5E5EA] rounded-full flex justify-center items-center">
              <TrendingUp />
            </div>
            <span className="text-md font-normal text-[#2FA109]">
              +{card.positive} points
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div className="size-9 border border-[#E5E5EA] rounded-full flex justify-center items-center">
              <TrendingDown />
            </div>
            <span className="text-md font-normal text-[#FB5607]">
              -{card.negative} points
            </span>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="p-7 w-[360px] border border-[#E5E5EA] rounded-2xl flex items-center">
      <div className="space-y-4">
        <h2 className="text-xl font-bold text-[#222222]">{card.title}</h2>
        <button className="py-1 px-3 bg-[#FB5607] text-white rounded-lg">
          {card.buttonText}
        </button>
      </div>
      <Image src={card?.imageSrc} height={200} width={190} alt="image" />
    </div>
  );
};

export default Card;
