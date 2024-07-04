import project1 from '../assets/project1.png';
import project1Shadow from '../assets/project1Shadow.png';
import project2 from '../assets/project2.png';
import project2Shadow from '../assets/project2Shadow.png';
import project3 from '../assets/project3.png';
import project3Shadow from '../assets/project3Shadow.png';

export const projects = [
  {
    id: 0,
    image: project1,
    shadow: project1Shadow,
    title: 'ART FRIENDLY',
    typeAndTerm: '팀 프로젝트  /  2024. 04 ~',
    intro: '전시 정보와 리뷰 등을 제공하는 서비스',
    skill:
      'React / React-native / Typescript / Redux\nTailwindCSS / Vercel / Webview / Swiper',
  },
  {
    id: 1,
    image: project2,
    shadow: project2Shadow,
    title: 'DEV SHOP',
    typeAndTerm: '팀 프로젝트  /  2023. 06 ~ 2023. 09',
    intro: '개발자에게 필요한 장비를 판매하는 서비스',
    skill: 'React / Typescript / Redux\nTailwindCSS / AWS S3 / Recharts',
  },
  {
    id: 2,
    image: project3,
    shadow: project3Shadow,
    title: 'HELL START UP',
    typeAndTerm: '팀 프로젝트  /  2023. 03 ~ 2023. 04',
    intro: '헬스장 추천 및 커뮤니티 서비스',
    skill: 'React / Javascript / Zustand\nTailwindCSS / AWS S3 / Kakao Map API',
  },
];
