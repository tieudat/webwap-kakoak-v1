// "use client";

import Banner from "../_components/Banner";
import Header from "../_components/Header";
import ListGame from "../_components/ListGame";
import LoadingCustom from "@/components/ui/LoadingCustom";
import { cookies, headers } from "next/headers";
import { getAllCookie, getCookie, setCookie } from "../utils/cookie";

async function getData(msisdn: any, security: any) {
  const header = new Headers();
  header.append("Origin", "http://192.168.1.137:3000");
  const res = await fetch(
    `http://10.226.40.158:8080/RingMeAPI/gamehtml5/getListGameCategoryTest?msisdn=${msisdn}&timestamp=${new Date().getTime()}&security=${security}&language=en&size=10`,
    { method: "GET", headers: header },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const headerList = headers();
  const headerReq = {
    userId: getCookie("userId") || headerList.get("userId"),
    token: getCookie("token") || headerList.get("token"),
    platform: getCookie("platform") || headerList.get("platform"),
    version: getCookie("version") || headerList.get("version"),
  };

  if (!getCookie("userId")) {
    setCookie("userId", headerList.get("userId"));
    setCookie("token", headerList.get("token"));
    setCookie("platform", headerList.get("platform"));
    setCookie("version", headerList.get("version"));
  }

  // const [result, setResult] = useState();
  // const [loading, setLoading] = useState(false);

  // const [header, setHeader] = useState();
  // const headerList = headers();

  // useEffect(() => {
  //   const getData = async () => {
  //     try {
  //       const res = await fetch("/api", { method: "GET" });
  //       if (res) {
  //         const { data } = await res.json();
  //         setHeader(data);
  //       }
  //       // const { userId, token, platform, version } = data;

  //       // console.log("Loxtest", userId, token, platform, version);
  //       // if (userId && token) {
  //       //   window.localStorage.setItem("userId", userId);
  //       //   window.localStorage.setItem("token", token);
  //       //   window.localStorage.setItem("platform", platform);
  //       //   window.localStorage.setItem("version", version);
  //       // }

  //       setLoading(true);
  //       // const response = await axios.get(
  //       //   "http://freeapi.kakoak.tls.tl/RingMeAPI/gamehtml5/getListGameCategoryTest?msisdn=0349006629&language=en&timestamp=1646705968215",
  //       // );

  //       // if (response.status === 200) {
  //       //   setResult(response.data.data);
  //       // }

  //       const header = new Headers();
  //       header.append("Origin", "http://192.168.1.137:3000");
  //       const response = await fetch(
  //         `https://kakoakgames.tls.tl/RingMeAPI/gamehtml5/getListGameCategoryTest?msisdn=0387994712&timestamp=${new Date().getTime()}&security=""&language=en&size=10`,
  //         { method: "GET", headers: header },
  //       );
  //       if (response) {
  //         const { data } = await response.json();
  //         setResult(data);
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     } finally {
  //       setLoading(false);
  //     }
  //   };

  //   getData();
  // }, []);

  const d = await getData("headerList", "");
  const { data: result } = d;

  return (
    <main className="h-full w-full bg-white">
      {false && <LoadingCustom />}
      {!false && (
        <>
          <Header titleName="Gamezone" isGame={false} />
          <Banner headerReq={headerReq} data={result} />
          <ListGame headerReq={headerReq} data={result} />
        </>
      )}
    </main>
  );
}
