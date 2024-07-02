import { LuCopyright } from 'react-icons/lu';

export default function Copyright() {
  return (
    <div className="flex items-center text-beige-100">
      <span>copyright</span>
      <LuCopyright className="mx-1" />
      <span>2024 yonghui kim all rights reserved</span>
    </div>
  );
}
