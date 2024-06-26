import IntroduceBody from '../components/introduce/IntroduceBody';
import IntroduceTitle from '../components/introduce/IntroduceTitle';
import ScrollText from '../components/introduce/ScrollText';

export default function Introduce() {
  return (
    <div className="relative flex flex-col h-screen bg-gray-500 shrink-0">
      <IntroduceTitle />
      <IntroduceBody />
      <ScrollText />
    </div>
  );
}
