import dynamic from "next/dynamic";

const Computer = dynamic(() => import('../components/Computer/index'));

export default function Home() {
  return <Computer />
}
