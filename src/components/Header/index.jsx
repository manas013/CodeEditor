import React from "react";
import { Img, Heading, Text } from "./..";

export default function Header({ ...props }) {
  return (
    <header {...props}>
      <div className="flex md:flex-col justify-center w-full gap-10 mx-auto max-w-[1356px]">
        <div className="flex md:flex-col justify-between items-center md:self-stretch gap-5 flex-1">
          <div className="flex justify-between items-center w-[14%] md:w-full gap-5">
            <div className="flex justify-center items-center w-[78%] gap-2">
              <Img src="images/img_shield.svg" alt="shield_one" className="h-[28px]" />
              <Img src="images/img_settings.svg" alt="settings_one" className="h-[16px]" />
            </div>
            <Img src="images/img_separator_line.svg" alt="separatorline" className="h-[52px]" />
          </div>
          <div className="flex flex-col self-end items-start w-[42%] md:w-full mb-[9px] gap-1.5">
            <div className="flex self-stretch justify-between gap-5">
              <div className="flex">
                <Heading as="p" className="!text-light_blue-A700 text-center !font-bold">
                  AI Audit
                </Heading>
              </div>
              <a href="#">
                <div className="flex">
                  <Text as="p" className="!text-blue_gray-600 text-center !font-medium">
                    Manual Audit
                  </Text>
                </div>
              </a>
              <a href="#">
                <div className="flex">
                  <Text as="p" className="!text-blue_gray-600 text-center !font-medium">
                    RedTeam
                  </Text>
                </div>
              </a>
              <a href="#">
                <div className="flex">
                  <Text as="p" className="!text-blue_gray-600 text-center !font-medium">
                    Monitor
                  </Text>
                </div>
              </a>
              <a href="#">
                <div className="flex">
                  <Text as="p" className="!text-blue_gray-600 text-center !font-medium">
                    Incident Response
                  </Text>
                </div>
              </a>
            </div>
            <div className="h-[2px] w-[24px] ml-3.5 md:ml-0 bg-light_blue-A700 rounded-[1px]" />
          </div>
        </div>
        <div className="flex justify-center items-center w-[13%] md:w-full gap-5">
          <Img src="images/img_separator_line.svg" alt="separatorline" className="h-[52px]" />
          <div className="flex items-center">
            <Img src="images/img_user.svg" alt="user_one" className="h-[28px] w-[28px]" />
            <div className="flex ml-3">
              <Heading as="p">Johhny Doe</Heading>
            </div>
            <Img src="images/img_checkmark.svg" alt="checkmark_one" className="h-[7px] ml-7" />
          </div>
        </div>
      </div>
    </header>
  );
}
