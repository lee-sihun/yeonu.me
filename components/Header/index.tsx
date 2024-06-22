import { format } from "date-fns"; 

export default function Header() {
  const today = new Date();
  const formattedDate = format(today, "yyyy.MM.dd"); 

  return (
    <header className="flex justify-between items-center min-h-[46px] border-b-[1px] border-[#e8e8e8] border-solid">
      <span className="font-bold text-[18px] text-[#111111] ml-[17px]">
        Introducing!
      </span>
      <div className="text-[14px] text-[#111111]">im@yeonu.me</div>
      <time
        dateTime={today.toISOString()}
        className="text-[14px] text-[#1581FF] mr-[17px]"
      >
        {formattedDate}
      </time>
    </header>
  );
}
