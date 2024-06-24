import { StaticImageData } from 'next/image';
import Figma from "@/svg/figma.svg";
import After from "@/svg/after.svg";
import Premiere from "@/svg/premiere.svg";
import PhotoShop from "@/svg/photoshop.svg";
import Paint from "@/svg/paint.svg";
import Paint2 from "@/svg/paint2.svg";
import Chrome from "@/svg/chrome.svg";
import Explorer from "@/svg/explorer.svg";

interface SkillSet {
  [skillName: string]: React.ComponentType;
}

export const skills: { [year: string]: SkillSet } = {
  "2024": {
    "피그마": Figma,
    "에프터이펙트": After,
    "프리미어 프로": Premiere,
    "포토샵": PhotoShop,
    "그림판": Paint2,
    "구글 크롬": Chrome,
  },
  "2023": {
    "에프터이펙트": After,
    "프리미어 프로": Premiere,
    "포토샵": PhotoShop,
    "윈도우 그림판": Paint,
    "구글 크롬": Chrome,
  },
  "2020": {
    "프리미어 프로": Premiere,
    "포토샵": PhotoShop,
    "윈도우 그림판": Paint,
    "익스플로러": Explorer,
  },
  "2017": {
    "포토샵": PhotoShop,
    "윈도우 그림판": Paint,
    "익스플로러": Explorer,
  },
  "2009": {
    "윈도우 그림판": Paint,
    "익스플로러": Explorer,
  },
}