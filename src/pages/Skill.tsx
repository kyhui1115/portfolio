import Title from '../components/common/Title';
import monitor from '../assets/monitor.svg';

export default function Skill() {
  return (
    <div className="relative flex items-center justify-center w-full h-full bg-beige-300">
      <Title text="skill" />
      <img src={monitor} alt="monitor" className="w-40 h-40" />
    </div>
  );
}
