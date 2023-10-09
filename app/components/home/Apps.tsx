"use client"
import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import { useRouter } from 'next/navigation'
const appsData = [
  {
    title: "Fortnite IGN",
    imageUrl: "https://assets-prd.ignimgs.com/2023/06/09/fortnitewilds-1686353306240.jpg",
  },
  {
    title: "COD Warzone",
    imageUrl: "https://store-images.s-microsoft.com/image/apps.64530.13739535057760905.9506aae3-1290-433f-9d84-f3d91000412d.008a24a1-3dd2-4284-acd0-c538b29428b2",
  },
  {
    title: "Twitter",
    imageUrl: "https://static.dezeen.com/uploads/2023/07/x-logo-twitter-elon-musk_dezeen_2364_col_0.jpg",
  },
  {
    title: "Tiktok",
    imageUrl: "https://play-lh.googleusercontent.com/H_TXtCT2J6itwj_hv9VPLvTCv4E8Vxkz-LisZGKZ2IhculiFIincvOlubxYavj5zkRw",
  },
  {
    title: "FiFA 2023",
    imageUrl: "https://sm.ign.com/ign_za/cover/f/fifa-23-le/fifa-23-legacy-edition_6c3y.jpg",
  },
  {
    title: "FiFA 2023",
    imageUrl: "https://sm.ign.com/ign_za/cover/f/fifa-23-le/fifa-23-legacy-edition_6c3y.jpg",
  },
  {
    title: "FiFA 2023",
    imageUrl: "https://sm.ign.com/ign_za/cover/f/fifa-23-le/fifa-23-legacy-edition_6c3y.jpg",
  },
];

export default function Apps() {
  const router = useRouter()
  return (
    <>
    <div className="overflow-hidden">
      <h1 className="p-5 font-semibold text-2xl">Morning Selects 😊</h1>
      <div className="scroll-x">
      <div className="flex space-x-4 p-5">
        {appsData.map((app, index) => (
          <div className="mobile-card-container" key={index}>
          <Card
            isFooterBlurred
            radius="lg"
            className="border-none scroll-content"
            
          >

            <Image
              alt={`Image for ${app.title}`}
              className="object-cover"
              height={200}
              src={app.imageUrl}
              width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80 font-semibold">
                {app.title}
              </p>
              <Button
                className="text-tiny text-white bg-black/20"
                variant="flat"
                color="default"
                radius="lg"
                size="sm"
                onClick={() => router.push(`/apps/${app.title}`)}
              >
                Install
              </Button>
            </CardFooter>
          </Card>
          </div>
        ))}
      </div>
      </div>
      </div>
    </>
  );
}
