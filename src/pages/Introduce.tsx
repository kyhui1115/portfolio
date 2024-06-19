import Title from '../components/common/Title';
import IntroduceBody from '../components/introduce/IntroduceBody';

export default function Introduce() {
  return (
    <div className="relative flex flex-col w-full h-full bg-beige-300">
      <Title text="introduce" />
      <IntroduceBody />
    </div>
  );
}
