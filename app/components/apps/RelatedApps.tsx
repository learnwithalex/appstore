import React from "react";
import {Card, CardBody, CardFooter, Image, Link} from "@nextui-org/react";
import { useRouter } from 'next/navigation'

export default function RelatedApps() {
  const list = [
    {
      title: "X",
      img: "https://play-lh.googleusercontent.com/XyI6Hyz9AFg7E_joVzX2zh6CpWm9B2DG2JuEz5meCFVm4-wTKTnHgqbmg62iFKe4Gzca=s256-rw",
      price: "Install",
    },
    {
      title: "Discord",
      img: "https://play-lh.googleusercontent.com/0oO5sAneb9lJP6l8c6DH4aj6f85qNpplQVHmPmbbBxAukDnlO7DarDW0b-kEIHa8SQ=s256-rw",
      price: "Install",
    },
    {
      title: "Snapchat",
      img: "https://play-lh.googleusercontent.com/KxeSAjPTKliCErbivNiXrd6cTwfbqUJcbSRPe_IBVK_YmwckfMRS1VIHz-5cgT09yMo=s256-rw",
      price: "Install",
    },
    {
      title: "Canva",
      img: "https://play-lh.googleusercontent.com/YfHIehEcm7dXAtoFNuUcE15CsCHwlHcRMeEMY4U4m7QaNkuXTUD2V2yxeAbRSq_tHRA=s256-rw",
      price: "Install",
    },
    {
      title: "Messenger",
      img: "https://play-lh.googleusercontent.com/ldcQMpP7OaVmglCF6kGas9cY_K0PsJzSSosx2saw9KF1m3RHaEXpH_9mwBWaYnkmctk=s256-rw",
      price: "Install",
    },
    {
      title: "Ayoba",
      img: "https://play-lh.googleusercontent.com/Jf-XEGdn7L1oK6YMvRBUu2ybkT_hDNgyAqEVh_oa1of_jcE8ADE0o2HYArpeFzmGHX8=s256-rw",
      price: "Install",
    },
    {
      title: "TextMe",
      img: "https://play-lh.googleusercontent.com/JI1Fn4O_kO-JfSff3hGewQFK1_xXBxt8f0IxZyvRPT6smA56mIDYBsQP0lCQPUmZyik=s256-rw",
      price: "Install",
    },
    {
      title: "VidIq",
      img: "https://play-lh.googleusercontent.com/W1uGk8e-FyPk5k9lwRsJKESpJZs9CmiyO5pN3qc_gv8oLTeHypYIvamQCKg8879jCJc=s256-rw",
      price: "Install",
    },
    {
      title: "Imagine",
      img: "https://play-lh.googleusercontent.com/mQFp55qQVvnODn7jd_uiTqkX5lckKzewZMVLRMsgD24EMhRCactLwD1ouzFxmx5M2VQ=s256-rw",
      price: "Install",
    },
  ];
  const router = useRouter();
  return (
    <div className="mt-5">
     <Link isBlock showAnchorIcon onClick={ () => router.push(`/related/spotify`) } size="lg" className="font-bold ml-3" color="foreground">
        Related Apps
      </Link>
    <div className="gap-2 grid  sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 p-4">
      {list.map((item, index) => (
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          <CardBody className="overflow-visible p-0">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title} 
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
          </CardBody>
          <CardFooter className="text-small justify-between">
            <b>{item.title}</b>
            
          </CardFooter>
        </Card>
      ))}
    </div>
    </div>
  );
}
