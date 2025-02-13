import Image from "next/image";
import dynamic from "next/dynamic";

const Computer = dynamic(() => import('../components/Computer'));

export default function Home() {
  return <Computer />
}
