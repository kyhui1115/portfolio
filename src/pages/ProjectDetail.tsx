import { useParams } from 'react-router-dom';
import Title from '../components/common/Title';
import BackBtn from '../components/projectDetail/BackBtn';
import ProjectTitle from '../components/projectDetail/ProjectTitle';
import ProjectBody from '../components/projectDetail/ProjectBody';

export default function ProjectDetail() {
  const id = Number(useParams().id);
  const project = projects[id];

  return (
    <div className="relative flex items-center justify-center w-full h-full bg-gray-500">
      <Title text="project" />
      <ProjectTitle title={project.title} />
      <ProjectBody project={project} />
      <BackBtn />
    </div>
  );
}

const projects = [
  {
    title: 'ART FRIENDLY',
    term: '2024. 04 ~',
    skill:
      'React / React-native / Typescript / Redux\nTailwindCSS / Vercel / React-native-webview',
    team: '서비스 기획자 1 / 디자이너 1 / 마케터 1 / 프론트엔드 1 / 백엔드 1',
    links: [
      {
        name: '',
        url: '',
      },
    ],
    intro: '전시 정보와 리뷰 등을 제공하는 서비스',
    contents: [
      {
        title: '',
        body: '',
      },
    ],
    review: '',
  },
  {
    title: 'DEV STORE',
    term: '2024. 04 ~',
    skill:
      'React / React-native / Typescript / Redux\nTailwindCSS / Vercel / React-native-webview',
    team: '서비스 기획자 1 / 디자이너 1 / 마케터 1 / 프론트엔드 1 / 백엔드 1',
    links: [
      {
        name: '',
        url: '',
      },
    ],
    intro: '전시 정보와 리뷰 등을 제공하는 서비스',
    contents: [
      {
        title: '',
        body: '',
      },
    ],
    review: '',
  },
  {
    title: 'HELL START UP',
    term: '2024. 04 ~',
    skill:
      'React / React-native / Typescript / Redux\nTailwindCSS / Vercel / React-native-webview',
    team: '서비스 기획자 1 / 디자이너 1 / 마케터 1 / 프론트엔드 1 / 백엔드 1',
    links: [
      {
        name: '',
        url: '',
      },
    ],
    intro: '전시 정보와 리뷰 등을 제공하는 서비스',
    contents: [
      {
        title: '',
        body: '',
      },
    ],
    review: '',
  },
];
