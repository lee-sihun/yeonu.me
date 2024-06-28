import Figma from "@/svg/figma.svg";
import After from "@/svg/after.svg";
import Premiere from "@/svg/premiere.svg";
import PhotoShop from "@/svg/photoshop.svg";
import Paint from "@/svg/paint.svg";
import Paint2 from "@/svg/paint2.svg";
import Chrome from "@/svg/chrome.svg";
import Explorer from "@/svg/explorer.svg";

interface Skill {
  [skillName: string]: React.ComponentType;
}

interface SkillSet {
  description: string,
  skills: Skill
}

export const skills: { [year: string]: SkillSet } = {
  "2024": {
    description: "2024 프로그램",
    skills: {
      "피그마": Figma,
      "에프터이펙트": After,
      "프리미어 프로": Premiere,
      "포토샵": PhotoShop,
      "그림판": Paint2,
      "구글 크롬": Chrome,
    },
  },
  "2023": {
    description: "2023 프로그램",
    skills: {
      "에프터이펙트": After,
      "프리미어 프로": Premiere,
      "포토샵": PhotoShop,
      "윈도우 그림판": Paint,
      "구글 크롬": Chrome,
    }
  },
  "2020": {
    description: "2020 프로그램",
    skills: {
      "프리미어 프로": Premiere,
      "포토샵": PhotoShop,
      "윈도우 그림판": Paint,
      "익스플로러": Explorer,
    }
  },
  "2017": {
    description: "2017 프로그램",
    skills: {
      "포토샵": PhotoShop,
      "윈도우 그림판": Paint,
      "익스플로러": Explorer,
    }
  },
  "2009": {
    description: "처음 컴퓨터를 접할 때 사용했던 프로그램",
    skills: {
      "윈도우 그림판": Paint,
      "익스플로러": Explorer,
    }
  },
}