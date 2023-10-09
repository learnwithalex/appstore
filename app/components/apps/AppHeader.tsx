import React from "react";
import { Card, CardBody, Image, Button, Progress, ButtonGroup, Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, useDisclosure } from "@nextui-org/react";
import {ChevronDownIcon} from './components/ChevronDownIcon';
import {ShareIcon} from './components/ShareIcon';
import ShareModal from "./components/ShareModal";

export default function AppHeader({ app_name = "" }) {
    const {onOpen} = useDisclosure();
    const [selectedOption, setSelectedOption] = React.useState(new Set(["android"]));

    const descriptionsMap = {
      android:
        "Download the Android version of this app",
      ios:
        "Download the IOS version of this app",
      windows: "Download the Windows version of this app",
    };
  
    const labelsMap = {
      android: "Android App",
      ios: "IOS App",
      windows: "Windows App",
    }
  
    // Convert the Set to an Array and get the first value.
    const selectedOptionValue = Array.from(selectedOption)[0];
  return (
    <>
    <ShareModal 
    onOpen={onOpen}
    />
    <Card
      isBlurred
      className="border-none shadow-none bg-background/60 dark:bg-default-100/50 max-w-[100%]"
    >
      <CardBody>
        <div className="grid grid-cols-6 md:grid-cols-12 gap-3 md:gap-4 items-center justify-center">
          <div className="relative col-span-6 md:col-span-4">
            <Image
              alt="Album cover"
              className="object-cover max-w-[70%]"
              height={200}
              src="https://play-lh.googleusercontent.com/cShys-AmJ93dB0SV8kE6Fl5eSaf4-qMMZdwEDKI5VEmKAXfzOqbiaeAsqqrEBCTdIEs=w440-h480-rw"
            />
          </div>

          <div className="flex flex-col col-span-6 md:col-span-8">
            <div className="flex justify-between items-start">
              <div className="flex flex-col gap-0">
                <h3 className="font-semibold text-5xl">Spotify</h3>
                <p className="text-small text-foreground/80 mt-3">
                  Contain Ads | In app Purchase
                </p>
                <h1 className="text-large font-medium mt-3 text-blue-500">
                  Spotify AB
                </h1>
                <dl className="grid max-w-screen-md gap-8 grid-cols-3 md:grid-cols-3 text-gray-900 sm:grid-cols-3 mt-3">
                  <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-lg md:text-lg font-extrabold">
                      4.5
                    </dt>
                    <dd className="font-light text-gray-500 ">Rating</dd>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-lg md:text-lg font-extrabold">
                      1B+
                    </dt>
                    <dd className="font-light text-gray-500 ">Downloads</dd>
                  </div>
                  <div className="flex flex-col items-center justify-center">
                    <dt className="mb-2 text-lg md:text-lg font-extrabold">
                      Music
                    </dt>
                    <dd className="font-light text-gray-500 ">Category</dd>
                  </div>
                </dl>
                <div className="flex space-x-4  mt-3">
                <Button color="primary" variant="bordered" size="lg">
      Install
    </Button>
    <ButtonGroup variant="flat">
      <Button>{labelsMap[selectedOptionValue]}</Button>
      <Dropdown placement="bottom-end">
        <DropdownTrigger>
          <Button isIconOnly>
            <ChevronDownIcon />
          </Button>
        </DropdownTrigger>
        <DropdownMenu
          disallowEmptySelection
          aria-label="Merge options"
          selectedKeys={selectedOption}
          selectionMode="single"
          onSelectionChange={setSelectedOption}
          className="max-w-[300px]"
        >
          <DropdownItem key="android" description={descriptionsMap["android"]}>
            {labelsMap["android"]}
          </DropdownItem>
          <DropdownItem key="ios" description={descriptionsMap["ios"]}>
            {labelsMap["ios"]}
          </DropdownItem>
          <DropdownItem key="windows" description={descriptionsMap["windows"]}>
            {labelsMap["windows"]}
          </DropdownItem>
        </DropdownMenu>
      </Dropdown>
    </ButtonGroup>

    <Button isIconOnly color="primary" onPress={onOpen} aria-label="Like">
        <ShareIcon />
      </Button>  

                </div>
              </div>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
    </>
  );
}
