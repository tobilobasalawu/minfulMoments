const Card = ({ title, duration, imageSrc, weight, height, color }) => {
  return (
    <div style={{ backgroundColor: color, height }} className={`bg-[${color}] w-${weight} pr-4 px-4 rounded-[16px] cursor-pointer`}>
      <div className={`card ${weight}`} style={{ height }}>
        <div className="pt-8">
          <p className="text-l font-semibold pb-3">{title}</p>
          <span className={"bg-[#ffffff] text-gray-800 text-xs font-semibold px-2 py-1 rounded-full"}>{duration} min</span>
        </div>
      </div>
    </div>
  );
};

export default Card;