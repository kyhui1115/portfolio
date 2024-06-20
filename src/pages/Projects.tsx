import { useEffect, useRef, useState } from 'react';
import Title from '../components/common/Title';
import Project from '../components/projects/Project';

import artFriendly1 from '../assets/artFriendly1.png';
import artFriendly1Shadow from '../assets/artFriendly1Shadow.png';
import artFriendly2 from '../assets/artFriendly2.png';
import artFriendly2Shadow from '../assets/artFriendly2Shadow.png';
import artFriendly3 from '../assets/artFriendly3.png';
import artFriendly3Shadow from '../assets/artFriendly3Shadow.png';

export default function Projects() {
  const projectRef = useRef<HTMLDivElement>(null);

  const [pageHeight, setPageHeight] = useState(0);
  const [pagetWidth, setPagetWidth] = useState(0);

  const [projectList, setProjectList] = useState([
    {
      image: artFriendly1,
      shadow: artFriendly1Shadow,
      title: 'Art Friendly',
      typeAndTerm: '팀 프로젝트 / 2024. 04 ~',
      intro: '전시 정보와 리뷰 등을 제공하는 서비스',
      skill:
        'React / React-native / Typescript / Redux\nTailwindCSS / Vercel / React-native-webview',
    },
    {
      image: artFriendly2,
      shadow: artFriendly2Shadow,
      title: 'DEV SHOP',
      typeAndTerm: '팀 프로젝트 / 2023. 06. ~ 2023. 09.',
      intro: '개발자에게 필요한 장비를 판매하는 웹 서비스',
      skill: 'React / Typescript / Redux\nTailwindCSS / AWS S3 / Recharts',
    },
    {
      image: artFriendly3,
      shadow: artFriendly3Shadow,
      title: 'HELL START UP',
      typeAndTerm: '팀 프로젝트 / 2023. 03. ~ 2023. 04.',
      intro: '헬스장 추천 및 커뮤니티 웹 서비스',
      skill:
        'React / Javascript / Zustand\nTailwindCSS / AWS S3 / Kakao Map API',
    },
  ]);

  useEffect(() => {
    if (projectRef.current !== null) {
      setPageHeight(projectRef.current?.offsetHeight);
      setPagetWidth(projectRef.current?.offsetWidth);
    }
  }, []);

  return (
    <div className="relative flex w-full h-full bg-gray-500" ref={projectRef}>
      <Title text="projects" color="text-beige-100" />
      {projectList.map((project, i) => (
        <Project
          key={i}
          image={project.image}
          shadow={project.shadow}
          title={project.title}
          typeAndTerm={project.typeAndTerm}
          intro={project.intro}
          skill={project.skill}
          pageHeight={pageHeight}
          pagetWidth={pagetWidth}
          zIndex={3 - i}
          idx={i}
          setProjectList={setProjectList}
        />
      ))}
    </div>
  );
}
