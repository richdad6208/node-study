"use client";

import { useGetTest } from "@/hooks/useQuery";
import Swal from "sweetalert2";

export default function Home() {
  const { data } = useGetTest();

  console.log(data);

  return <main className=""></main>;
}
