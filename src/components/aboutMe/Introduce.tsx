import IntroduceText from './IntroduceText';

export default function Introduce() {
  return (
    <div className="flex flex-col">
      {contentList.map((content, i) => (
        <IntroduceText key={i} text={content.text} />
      ))}
    </div>
  );
}

const contentList = [
  {
    text: <>React, Typescript 기반의 웹 프론트엔드 개발자 김용희 입니다.</>,
  },
  {
    text: (
      <>
        피그마로 User flow에 따라 UI를 디자인하고
        <br />
        CSS animation과 swiper, recharts 등 라이브러리를 사용하여
        <br />
        <span className="font-bold text-yellow-100">
          부드러운 UI를 만들고 서비스의 UX를 개선
        </span>
        하는 일을 좋아합니다.
      </>
    ),
  },
  {
    text: (
      <>
        실무 경험을 쌓기 위해{' '}
        <span className="font-bold text-yellow-100">
          다수의 팀 프로젝트를 진행
        </span>
        하였습니다.
        <br />
        책임감을 갖고 프로젝트를 완수하고자
        <span className="font-bold text-yellow-100">
          {' '}
          프론트엔드 리더로 기획, 개발, 배포에 참여
        </span>
        하였으며
        <br />
        현재 진행 중인 프로젝트의 앱 서비스 출시를 준비 중입니다.
      </>
    ),
  },
  {
    text: (
      <>
        새로운 것을 배우고 적용하는데 주저하지 않습니다.
        <br />이 과정에서{' '}
        <span className="font-bold text-yellow-100">
          문제를 해결해 나가며 성장
        </span>
        한다고 믿습니다.
      </>
    ),
  },
];
