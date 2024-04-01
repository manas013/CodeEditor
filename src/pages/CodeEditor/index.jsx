import React, {  useState } from "react";
import { Helmet } from "react-helmet";
import { Text, Heading, Img, Button } from "../../components";
import Header from "../../components/Header";
import { TabList, Tab, Tabs, TabPanel } from "react-tabs";
import { IoClose } from 'react-icons/io5';
import Editor from '@monaco-editor/react';

export default function CodeEditorPage() {

  const [open,setOpen]=useState(true)
  const[open_1,setOPen_1]=useState(true)
  const [open_2,setOpen_2]=useState(true)
  const [selectedTab, setSelectedTab] = useState(0);
  const [checked, setChecked] = React.useState(false); 
  function handleCheckChange(e) {
     setChecked(e.target.checked);
  }

  const handleTabSelect = index => {
    setSelectedTab(index);
  };
  const bothClosed = !open && !open_1;
  return (
    <>
      <Helmet>
        <title>CodeEditor</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
      <div className="flex flex-col w-full pt-3 gap-4 px-3 bg-black-900">
        <Header className="px-6 sm:px-5 border-black-900_0a border border-solid bg-gray-900_01 rounded" />
        <div className="flex flex-col w-full gap-3 mx-auto max-w-[1416px]">
          <div className="flex ml-1 gap-1.5 md:ml-0">
            <div className="flex">
              <Text size="xs" as="p" className="!text-blue_gray-400">
                AI Audit / My Projects /
              </Text>
            </div>
            <div className="flex">
              <Text size="xs" as="p" className="!text-gray-200">
                Code Editor
              </Text>
            </div>
          </div>
          <div className="h-[818px] relative">
            <div className="w-full top-[0.00px] right-0 left-0 p-3 m-auto border-black-900_0a border border-solid bg-gray-900_01 absolute rounded">
              <div>
                <div className="flex flex-col gap-4">
                  <div className="flex sm:flex-col justify-between items-center gap-5">
                    <div className="flex self-end items-center gap-2.5">
                      <Img src="images/img_download.svg" alt="download_one" className="h-[26px]" />
                      <div className="flex">
                        <Heading size="s" as="h1">
                          Sample Project
                        </Heading>
                      </div>
                    </div>
                    <div className="h-[38px] w-[19%] sm:w-full relative">
                      <div className="flex gap-3 bottom-[0.00px] right-0 left-0 m-auto absolute">
                        <Button shape="round" className="sm:px-5 font-bold min-w-[132px]">
                          Audit Now
                        </Button>
                        <Button
                          color="light_blue_A700_28"
                          shape="round"
                          className="sm:px-5 font-semibold min-w-[114px]"
                        >
                          Options
                        </Button>
                      </div>
                      <div className="h-[10px] w-[10px] right-[0.00px] top-[0.00px] m-auto bg-deep_orange-400 absolute rounded-[5px]" />
                    </div>
                  </div>
                  <div className="flex flex-col gap-3">
                    <Img src="images/img_separator_line_white_a700.svg" alt="separatorline" className="h-px" />
                    <div className="flex md:flex-col gap-1">
                      <div className={` ${open?"w-72":"w-0"} py-3 border-black-900_0a border border-solid bg-gray-900 rounded relative`}>
                      {open?<div className="flex flex-col items-start gap-2.5">
                          <div className="flex ml-1 md:ml-0">
                            <Text as="p" className="!font-medium">
                              Folders & Files
                            </Text>
                          </div>
                          <Img
                            src="images/img_separator_line_white_a700.svg"
                            alt="separatorline"
                            className="h-px w-full"
                          />
                        </div>:""}
                     { open?  <div className="flex flex-col items-start mb-[168px] gap-[17px]">
                          <div className="flex items-center ml-3 gap-3 md:ml-0">
                            <Img src="images/img_arrow.svg" alt="arrow_one" className="h-[6px]" />
                            <Img src="images/img_folder.svg" alt="folder_one" className="h-[14px]" />
                            <div className="flex">
                              <Heading as="h2" className="!text-light_blue-A700_e5">
                                Example Folder
                              </Heading>
                            </div>
                          </div>
                          <div className="flex flex-col items-end w-[47%] md:w-full ml-8 gap-5 md:ml-0">
                            <div className="flex self-start items-center gap-3">
                              <Img src="images/img_arrow.svg" alt="arrow_three" className="h-[6px]" />
                              <Img src="images/img_folder.svg" alt="folder_three" className="h-[14px]" />
                              <div className="flex">
                                <Heading as="h3" className="!text-light_blue-A700_e5">
                                  Sample Folder
                                </Heading>
                              </div>
                            </div>
                            <div className="flex flex-col md:flex-row w-[82%] md:w-full gap-5">
                              <div className="flex items-center gap-3">
                                <Img src="images/img_user_gray_500.svg" alt="folder_one" className="h-[10px]" />
                                <Img src="images/img_folder_gray_500.svg" alt="folder_three" className="h-[14px]" />
                                <div className="flex py-px">
                                  <Text as="p">Folder</Text>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <Img src="images/img_user_gray_500.svg" alt="user_one" className="h-[10px]" />
                                <Img src="images/img_folder_gray_500.svg" alt="folder_one" className="h-[14px]" />
                                <div className="flex">
                                  <Text as="p">Folder 123</Text>
                                </div>
                              </div>
                            </div>
                          </div>
                          {/* //custom create menu */}
                          {/* <ul className="pt-2">
                          {
                            files.map((menu,index)=><>
                         <li key={index} className="flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light_blue-A700 rounded-md mt-2">
                          <span className="block float-left">
                          <Img src="images/img_user_gray_500.svg" alt="user_one" className="h-[10px]" />
                          <Img src="images/img_folder_gray_500.svg" alt="folder_one" className="h-[14px]" />
                          </span>
                          <span>{menu.title}</span>
                          { menu.submenu && (
    <Img 
      src="images/img_user_gray_500.svg" 
      alt="user_one" 
      className="h-[10px]" 
      onClick={() => setSubmenuOpen(!submenuOpen)} // Update here
    />
  )}
                         </li>
                         {
                          submenuOpen && menu.submenu?
                           (
                            <ul >
                              {menu.submenuItems.map((submenuItems,index)=>(
                                <li key={index} className="flex items-center gap-x-4 cursor-pointer p-2 hover:bg-light_blue-A700 rounded-md mt-2">{submenuItems.title}</li>
                              ))}
                            </ul>
                          )
                          :""
                         }
                            </>)
                          }
                          </ul> */}
                          <div className="flex self-stretch items-center gap-3 p-[11px] bg-light_blue-A700_14">
                            <Img src="images/img_file.svg" alt="file_one" className="h-[16px] ml-[65px]" />
                            <div className="flex">
                              <Heading as="h4" className="!text-light_blue-A700 !font-bold">
                                Example File 1
                              </Heading>
                            </div>
                          </div>
                          <div className="flex flex-col items-start ml-[76px] gap-5 md:ml-0">
                            <div className="flex items-center gap-3">
                              <Img src="images/img_file_gray_500.svg" alt="file_three" className="h-[16px]" />
                              <div className="flex">
                                <Text as="p">Example File 2</Text>
                              </div>
                            </div>
                            <div className="flex items-center gap-3">
                              <Img src="images/img_file_gray_500.svg" alt="file_five" className="h-[16px]" />
                              <div className="flex">
                                <Text as="p">Example File 321</Text>
                              </div>
                            </div>
                          </div>
                          <div className="flex flex-col items-start w-[53%] md:w-full ml-9 gap-5 md:ml-0">
                            <div className="flex flex-col md:flex-row w-[87%] md:w-full gap-5">
                              <div className="flex items-center gap-3">
                                <Img src="images/img_user_gray_500.svg" alt="sample_folder" className="h-[10px]" />
                                <Img src="images/img_folder_gray_500.svg" alt="sample_folder" className="h-[14px]" />
                                <div className="flex">
                                  <Text as="p">Sample Folder</Text>
                                </div>
                              </div>
                              <div className="flex items-center gap-3">
                                <Img src="images/img_user_gray_500.svg" alt="user_one" className="h-[10px]" />
                                <Img src="images/img_folder_gray_500.svg" alt="folder_one" className="h-[14px]" />
                                <div className="flex">
                                  <Text as="p">Folder 123</Text>
                                </div>
                              </div>
                            </div>
                            <div className="flex self-center items-center gap-3">
                              <Img src="images/img_file_gray_500.svg" alt="file_seven" className="h-[16px]" />
                              <div className="flex">
                                <Text as="p">Example File 2</Text>
                              </div>
                            </div>
                            <div className="flex self-end items-center gap-3">
                              <Img src="images/img_file_gray_500.svg" alt="file_nine" className="h-[16px]" />
                              <div className="flex">
                                <Text as="p">Example File 321</Text>
                              </div>
                            </div>
                          </div>
                        </div>:""
}
                      </div>
                      <div 
                      className={`flex md:flex-col items-center ${
                        bothClosed ? "w-[100%]" : open && open_1 ? "w-[53%]" : open ? "w-[75%]" : open_1 ? "w-[76%]" : "w-[100%]"
                      }  md:w-full `}
                      
                      >
                        <Button
                          size="xs"
                          shape="round"
                          className="self-end w-[20px] mb-4 z-[1] rotate-[-180deg] !rounded-sm"
                          onClick={()=>setOpen(!open)}
                        >
                          <Img src="images/img_arrow_down.svg" />
                        </Button>
                        <div  className={`flex md:flex-col items-center md:self-stretch ml-[-12px] md:ml-0 relative flex-1  ${
                           bothClosed ? "mt-[-30px]" : open && open_1 ? "mt-[-90px]" : open ? "mt-[-90px]" : open_1 ? "mt-[-50px]" : "mt-[0px]"
                        } `}>
                          <div className=" w-[100%]flex flex-col items-start md:self-stretch gap-5  flex-1 rounded">
                            {/* <div className="flex self-stretch rounded-tl rounded-tr bg-gray-900_02"> */}
                              {/* <div className="flex sm:flex-col items-center gap-6">
                                <Button size="lg" className="sm:pr-5 rounded-tl rounded-tr font-semibold min-w-[150px]">
                                  Example File 1
                                </Button>
                                <div className="flex items-center gap-4">
                                  <div className="flex">
                                    <Text as="p" className="!text-blue_gray-600">
                                      Example Folder
                                    </Text>
                                  </div>
                                  <div className="flex flex-col self-end mb-1 pt-px">
                                    <Img src="images/img_close.png" alt="close_one" className="h-[7px] object-cover" />
                                  </div>
                                </div>
                                <Img
                                  src="images/img_separator_line.svg"
                                  alt="separator_one"
                                  className="h-[40px] sm:w-full"
                                />
                                <div className="flex items-center gap-4">
                                  <div className="flex pt-px">
                                    <Text as="p" className="!text-blue_gray-600">
                                      File 123
                                    </Text>
                                  </div>
                                  <div className="flex flex-col self-end mb-1 pt-px">
                                    <Img
                                      src="images/img_close.png"
                                      alt="close_three"
                                      className="h-[7px] object-cover"
                                    />
                                  </div>
                                </div>
                                <Img
                                  src="images/img_separator_line.svg"
                                  alt="separator_three"
                                  className="h-[40px] sm:w-full"
                                />
                                <div className="flex items-center gap-4">
                                  <div className="flex">
                                    <Text as="p" className="!text-blue_gray-600">
                                      Sample File
                                    </Text>
                                  </div>
                                  <div className="flex flex-col self-end mb-1 pt-px">
                                    <Img src="images/img_close.png" alt="close_five" className="h-[7px] object-cover" />
                                  </div>
                                </div>
                                <Img
                                  src="images/img_separator_line.svg"
                                  alt="separator_five"
                                  className="h-[40px] sm:w-full"
                                />
                              </div> */}
                              <Tabs
                        className="flex flex-col items-start md:self-stretch p-3  rounded relative"
                        selectedTabClassName="!text-white-A700 bg-light_blue-A700 rounded-[4px] flex justify-center w-[150px] h-[40px] items-center"
                        selectedTabPanelClassName="tab-panel--selected"
                        selectedIndex={selectedTab} onSelect={handleTabSelect}
                      >
                       
                      
                        <TabList className="flex self-stretch justify-start items-center mt-5  p-[0px] md:gap-5 bg-gray-900_02 flex-wrap rounded-[3px]">
                          <Tab className="self-end ml-0  flex justify-center w-[150px] h-[40px] items-center md:mr-0 text-blue_gray-600 text-center text-sm font-medium border-x-2 border-x-slate-500">
                          Example File 1
                            {selectedTab !== 0 && ( // Render X icon only if the tab is not selected
            <IoClose className="ml-2 w-4 h-4 text-gray-400" />
          )}
                          </Tab>
                          <Tab className="self-end ml-2  flex justify-center w-[150px] h-[40px] items-center md:mr-0 text-blue_gray-600 text-center text-sm font-medium border-x-1 border-x-slate-500" >
                          Example Folder
                            {selectedTab !== 1 && ( // Render X icon only if the tab is not selected
            <IoClose className="ml-2 w-4 h-4 text-gray-400" />
          )}
                          </Tab>
                          <Tab className="self-end ml-2 flex justify-center w-[150px] h-[40px] items-center md:mr-0 text-blue_gray-600 text-center text-sm font-medium border-x-[0.5px] border-x-slate-500" >
                          File 123
                            {selectedTab !== 2 && ( // Render X icon only if the tab is not selected
            <IoClose className="ml-2 w-4 h-4 text-gray-400" />
          )}
                          </Tab>
                        </TabList>
                        <TabPanel>
                          <div className={`${bothClosed ? "w-[1340px] flex items-center justify-center" : open && open_1 ?'w-[700px]' : open ? "w-[1000px]" : open_1 ? "w-[1000px]" : ""}`} style={{ height:'600px'}}>
                        <Editor theme="vs-dark" height="100%" width="100%" defaultLanguage="javascript" defaultValue="function test(name,by,cy){
  const age = cy-by;
  const r = name+ return r" />
  </div>
                        </TabPanel>
                        <TabPanel>
                        <div className={`${bothClosed ? "w-[1340px] flex items-center justify-center" : open && open_1 ?'w-[700px]' : open ? "w-[1000px]" : open_1 ? "w-[1000px]" : ""}`} style={{ height:'600px'}}>
                        <Editor theme="vs-dark"  height="100%" width="100%" defaultLanguage="javascript" defaultValue="function test(name,by,cy){
  const age = cy-by;
  const r = name+ return r" />
  </div>
                        </TabPanel>
                        <TabPanel>
                        <div className={`${bothClosed ? "w-[1340px] flex items-center justify-center" : open && open_1 ?'w-[700px]' : open ? "w-[1000px]" : open_1 ? "w-[1000px]" : ""}`} style={{ height:'600px'}}>
                        <Editor theme="vs-dark"  height="100%" width="100%" defaultLanguage="javascript" defaultValue="function test(name,by,cy){
  const age = cy-by;
  const r = name+ return r" />
  </div>
                        </TabPanel>
                        </Tabs>
                            {/* </div> */}
                            {/* <Img src="images/img_line.svg" alt="line_one" className="h-[584px] ml-11 md:ml-0" /> */}
                          </div>
                        
                        </div>
                        <Button
                            size="xs"
                            shape="round"
                            className="self-end w-[20px]  mb-4 ml-[-12px] md:ml-0 rotate-[-180deg] relative !rounded-sm "
                            onClick={()=>setOPen_1(!open_1)}
                          >
                            <Img src="images/img_arrow_left.svg" />
                          </Button>
                      </div>
                    {open_1 && checked===false? 
                     <Tabs
                        className="flex flex-col items-start md:self-stretch p-3 border-black-900_0a border border-solid bg-gray-900 flex-1 rounded relative"
                        selectedTabClassName="!text-white-A700 bg-light_blue-A700  rounded-[4px] flex justify-center w-[130px] h-[35px] items-center"
                        selectedTabPanelClassName="tab-panel--selected"
                      >
                        <div className="flex ml-1 md:ml-0">
                          <Text as="p" className="!font-medium">
                            Count of Issues
                          </Text>
                        </div>
                        <Img
                          src="images/img_separator_line_white_a700.svg"
                          alt="separatorline"
                          className="h-px w-full mt-2.5"
                        />
                        <TabList className="flex self-stretch justify-between items-center    p-[7px] md:gap-5 bg-gray-900_02 flex-wrap rounded-[3px]">
                          <Tab className="ml-[0px] md:ml-0 text-white-A700 text-center text-sm font-bold">
                            Current File
                          </Tab>
                          <Tab className=" mr-4 md:mr-0 text-blue_gray-600 text-center text-sm font-medium ">
                            Full Project
                          </Tab>
                        </TabList>
                        <TabPanel>
                        <div className="flex flex-col self-stretch mt-5 mb-[50px] gap-6 w-[333px]">
                          <div className="flex flex-col gap-2">
                            <div className="flex justify-between items-center gap-5 p-2.5 border-black-900_0a border border-solid bg-gray-900_01 rounded">
                              <div className="flex justify-center items-center w-[73%] ml-2.5 md:ml-0">
                                <div className="h-[10px] w-[10px] bg-blue-A200 rounded-[5px]" />
                                <div className="flex ml-2.5">
                                  <Heading size="md" as="h5" className="self-end tracking-[1.40px]">
                                    446
                                  </Heading>
                                </div>
                                <Img
                                  src="images/img_separator_line.svg"
                                  alt="separatorline"
                                  className="h-[40px] ml-7"
                                />
                                <Text as="p" className="w-[53%] ml-4 !text-gray-500 !font-medium leading-[18px]">
                                  <>
                                    Total Issues
                                    <br />
                                    Found
                                  </>
                                </Text>
                              </div>
                              <Img
                                src="images/img_arrow_right.svg"
                                alt="arrowright_one"
                                className="h-[14px] mr-2.5 md:mr-0"
                              />
                            </div>
                            <div className="flex justify-center items-center p-2.5 border-black-900_0a border border-solid bg-gray-900_01 rounded">
                              <div className="h-[10px] w-[10px] bg-red-A200 rounded-[5px]" />
                              <div className="flex ml-2.5">
                                <Heading size="md" as="h6" className="tracking-[1.40px]">
                                  108
                                </Heading>
                              </div>
                              <Img src="images/img_separator_line.svg" alt="separatorline" className="h-[40px] ml-7" />
                              <Text as="p" className="w-[48%] ml-4 !text-gray-500 !font-medium leading-[18px]">
                                <>
                                  High Severity
                                  <br />
                                  Issues
                                </>
                              </Text>
                              <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-[14px] ml-[50px]" />
                            </div>
                            <div className="flex justify-center items-center p-2.5 border-black-900_0a border border-solid bg-gray-900_01 rounded">
                              <div className="h-[10px] w-[10px] bg-amber-300 rounded-[5px]" />
                              <div className="flex ml-2.5">
                                <Heading size="md" as="h3" className="tracking-[1.40px]">
                                  143
                                </Heading>
                              </div>
                              <Img src="images/img_separator_line.svg" alt="separatorline" className="h-[40px] ml-7" />
                              <Text as="p" className="w-[54%] ml-4 !text-gray-500 !font-medium leading-[18px]">
                                <>
                                  Medium Severity
                                  <br />
                                  Issues
                                </>
                              </Text>
                              <Img src="images/img_arrow_right.svg" alt="arrowright_five" className="h-[14px] ml-7" />
                            </div>
                            <div className="flex justify-center items-center p-2.5 border-black-900_0a border border-solid bg-gray-900_01 rounded">
                              <div className="h-[10px] w-[10px] bg-teal-A700 rounded-[5px]" />
                              <div className="flex flex-col justify-center ml-2.5 py-px">
                                <Heading size="md" as="h3" className="h-[34px] tracking-[1.40px]">
                                  00
                                </Heading>
                              </div>
                              <Img
                                src="images/img_separator_line.svg"
                                alt="separatorline"
                                className="h-[40px] ml-[46px]"
                              />
                              <Text as="p" className="w-[53%] ml-4 !text-gray-500 !font-medium leading-[18px]">
                                <>
                                  Low Severity
                                  <br />
                                  Issues
                                </>
                              </Text>
                              <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-[14px] ml-[53px]" />
                            </div>
                            <div className="flex justify-center items-center p-2.5 border-black-900_0a border border-solid bg-gray-900_01 rounded">
                              <div className="h-[10px] w-[10px] bg-purple-A100 rounded-[5px]" />
                              <div className="flex flex-col justify-center ml-2.5 py-px">
                                <Heading size="md" as="h3" className="h-[34px] tracking-[1.40px]">
                                  68
                                </Heading>
                              </div>
                              <Img
                                src="images/img_separator_line.svg"
                                alt="separatorline"
                                className="h-[40px] ml-[46px]"
                              />
                              <Text as="p" className="w-[54%] ml-4 !text-gray-500 !font-medium leading-[18px]">
                                <>
                                  Informational
                                  <br />
                                  Issues
                                </>
                              </Text>
                              <Img
                                src="images/img_arrow_right.svg"
                                alt="arrowright_nine"
                                className="h-[14px] ml-[50px]"
                              />
                            </div>
                            <div className="flex justify-center items-center p-2.5 border-black-900_0a border border-solid bg-gray-900_01 rounded">
                              <div className="h-[10px] w-[10px] bg-cyan-200 rounded-[5px]" />
                              <div className="flex ml-2.5">
                                <Heading size="md" as="h3" className="tracking-[1.40px]">
                                  127
                                </Heading>
                              </div>
                              <Img src="images/img_separator_line.svg" alt="separatorline" className="h-[40px] ml-7" />
                              <Text as="p" className="w-[48%] ml-4 !text-gray-500 !font-medium leading-[18px]">
                                <>
                                  Optimisation
                                  <br />
                                  Issues
                                </>
                              </Text>
                              <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-[14px] ml-[52px]" />
                            </div>
                          </div>
                          <div className="flex justify-between w-[57%] md:w-full ml-1 gap-5 md:ml-0">                          
                            <div className="flex">
                            <input style={{marginRight:"3px",cursor:'pointer'}} value = "test" type = "checkbox" onChange = {handleCheckChange} />
                              <Heading as="p">Exclude Dependencies</Heading>
                            </div>
                          </div>
                        </div>
                        </TabPanel>
                      </Tabs>:""
}
{/* //chek issue and questioner */}
{
 open_1 && checked===true && open_2===true?
  <Tabs
  className="flex flex-col items-start md:self-stretch p-3 border-black-900_0a border border-solid bg-gray-900 flex-1 rounded relative"
  selectedTabClassName="!text-white-A700 bg-light_blue-A700  rounded-[4px] flex justify-center w-[130px] h-[35px] items-center"
  selectedTabPanelClassName="tab-panel--selected"
>
  <div  className="flex ml-1 md:ml-0">
    <Text as="p" className="!font-medium">
      <span  onClick={(e)=>setChecked(!checked)} className="text-blue_gray-600 mr-2 cursor-pointer" >Count of Issues</span>/ High Severity Issues 
    </Text>
  </div>
  <TabList className="flex self-stretch justify-between items-center mt-4    p-[1px] md:gap-5 bg-gray-900_02 flex-wrap rounded-[3px]">
  </TabList>
  <TabPanel>
  <div className="flex flex-col self-stretch mt-5 mb-[0px] gap-6 w-[333px]">
    <div className="flex flex-col gap-2">

      <div  onClick={()=>setOpen_2(!open_2)} className="flex cursor-pointer justify-center items-center p-2.5 border-black-900_0a border border-solid bg-gray-900_01 rounded">
        <div className="h-[10px] w-[10px] bg-red-A200 rounded-[5px]" />
        <div className="flex ml-2.5">
          <Heading size="md" as="h6" className="tracking-[1.40px]">
            108
          </Heading>
        </div>
        <Img src="images/img_separator_line.svg" alt="separatorline" className="h-[40px] ml-7" />
        <div style={{ height:"2px"}}></div>
        <Text as="p" className="w-[48%] ml-4 !text-gray-500 !font-medium leading-[18px]">
          <>
            High Severity
            {/* <br /> */}
            Issues
          </>
        </Text>
        <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-[14px] ml-[50px]" />
      </div>
      <div className="flex ml-1 md:ml-0">
    <Text as="p" className="!font-medium">
     List of Issues
    </Text>

  </div>
    <TabList className="flex self-stretch justify-between items-center    p-[1px] md:gap-5 bg-gray-900_02 flex-wrap rounded-[3px]">
  </TabList>
  <div className="flex justify-center mb-2 items-center p-1 border-black-900_0a border border-solid bg-gray-900_01 rounded">
        <div className="flex w-[100%] ">
        <Text as="p" className="w-[100%] ml-4 !text-gray-500 !font-medium leading-[18px]">
          <>
          #1. Lorem ipsum dolor sit ame
          </>
        </Text>
        </div>
        <Img src="images/img_separator_line.svg" alt="separatorline" className="h-[40px] ml-7" />
        <div style={{ height:"2px"}}></div>
        <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-[14px] ml-[50px] mr-[20px] cursor-pointer" onClick={()=>setOpen_2(!open_2)} />
      </div>
      <div className="flex justify-center mb-2 items-center p-1 border-black-900_0a border border-solid bg-gray-900_01 rounded">
        <div className="flex w-[100%] ">
        <Text as="p" className="w-[100%] ml-4 !text-gray-500 !font-medium leading-[18px]">
          <>
          #1. Lorem ipsum dolor sit ame
          </>
        </Text>
        </div>
        <Img src="images/img_separator_line.svg" alt="separatorline" className="h-[40px] ml-7" />
        <div style={{ height:"2px"}}></div>
        <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-[14px] ml-[50px] mr-[20px]" />
      </div>
      <div className="flex justify-center mb-2 items-center p-1 border-black-900_0a border border-solid bg-gray-900_01 rounded">
        <div className="flex w-[100%] ">
        <Text as="p" className="w-[100%] ml-4 !text-gray-500 !font-medium leading-[18px]">
          <>
          #1. Lorem ipsum dolor sit ame
          </>
        </Text>
        </div>
        <Img src="images/img_separator_line.svg" alt="separatorline" className="h-[40px] ml-7" />
        <div style={{ height:"2px"}}></div>
        <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-[14px] ml-[50px] mr-[20px]" />
      </div>
      <div className="flex justify-center mb-2 items-center p-1 border-black-900_0a border border-solid bg-gray-900_01 rounded">
        <div className="flex w-[100%] ">
        <Text as="p" className="w-[100%] ml-4 !text-gray-500 !font-medium leading-[18px]">
          <>
          #1. Lorem ipsum dolor sit ame
          </>
        </Text>
        </div>
        <Img src="images/img_separator_line.svg" alt="separatorline" className="h-[40px] ml-7" />
        <div style={{ height:"2px"}}></div>
        <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-[14px] ml-[50px] mr-[20px]" />
      </div>
      <div className="flex justify-center mb-2 items-center p-1 border-black-900_0a border border-solid bg-gray-900_01 rounded">
        <div className="flex w-[100%] ">
        <Text as="p" className="w-[100%] ml-4 !text-gray-500 !font-medium leading-[18px]">
          <>
          #1. Lorem ipsum dolor sit ame
          </>
        </Text>
        </div>
        <Img src="images/img_separator_line.svg" alt="separatorline" className="h-[40px] ml-7" />
        <div style={{ height:"2px"}}></div>
        <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-[14px] ml-[50px] mr-[20px]" />
      </div>
      <div className="flex justify-center mb-2 items-center p-1 border-black-900_0a border border-solid bg-gray-900_01 rounded">
        <div className="flex w-[100%] ">
        <Text as="p" className="w-[100%] ml-4 !text-gray-500 !font-medium leading-[18px]">
          <>
          #1. Lorem ipsum dolor sit ame
          </>
        </Text>
        </div>
        <Img src="images/img_separator_line.svg" alt="separatorline" className="h-[40px] ml-7" />
        <div style={{ height:"2px"}}></div>
        <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-[14px] ml-[50px] mr-[20px]" />
      </div>
      <div className="flex justify-center mb-2 items-center p-1 border-black-900_0a border border-solid bg-gray-900_01 rounded">
        <div className="flex w-[100%] ">
        <Text as="p" className="w-[100%] ml-4 !text-gray-500 !font-medium leading-[18px]">
          <>
          #1. Lorem ipsum dolor sit ame
          </>
        </Text>
        </div>
        <Img src="images/img_separator_line.svg" alt="separatorline" className="h-[40px] ml-7" />
        <div style={{ height:"2px"}}></div>
        <Img src="images/img_arrow_right.svg" alt="arrowright" className="h-[14px] ml-[50px] mr-[20px]" />
      </div>
    
    </div>
    <div className="flex justify-between w-[57%] md:w-full ml-1 gap-5 md:ml-0">                          
      <div className="flex">
      <input style={{marginRight:"3px",cursor:'pointer'}} value = "test" checked={checked} type = "checkbox" onChange = {handleCheckChange}  />
        <Heading as="p">Exclude Dependencies</Heading>
      </div>
    </div>
  </div>
  </TabPanel>
</Tabs>:""
}
{/* //text and describtion */}
{
 open_2===false? 
 <>
 {open_1===true?
 <div className="flex flex-col items-start justify-center w-[31%] md:w-full p-3 border-black-900_0a border border-solid bg-gray-900 rounded">
  <div className="flex ml-1 gap-1.5 md:ml-0">
    <div className="flex">
      <Text size="xs" as="p" className="!text-blue_gray-400 flex items-center">
        Count of Issues / <div style={{cursor:'pointer'}} onClick={()=>setOpen_2(!open_2)}>High Severity Issues </div> /
      </Text>
    </div>
    <div className="flex pt-px">
      <Text size="xs" as="p" className="!text-gray-200">
        Issue #1
      </Text>
    </div>
  </div>
  <Img
    src="images/img_separator_line_white_a700.svg"
    alt="separatorline"
    className="h-px w-full mt-3"
  />
  <div className="flex self-stretch items-center mt-5 gap-2.5 p-3.5 border-black-900_0a border border-solid bg-gray-900_01 rounded">
    <div className="h-[8px] w-[8px] bg-red-A200 rounded" />
    <div className="flex" onClick={()=>setOpen_2(!open_2)}>
      <Text as="p">#1. Lorem ipsum dolor sit ame</Text>
    </div>
  </div>
  <div className="flex flex-col self-stretch items-end justify-end h-[480px] md:h-auto mt-4 gap-4 p-3 bg-[url(/public/images/img_issue_info.svg)] bg-cover bg-no-repeat">
    <Img
      src="images/img_separator_line_white_a700.svg"
      alt="separatorline"
      className="h-px w-full mt-[400px]"
    />
    <div className="flex mb-1 gap-3">
      <Button shape="round" className="sm:px-5 font-bold min-w-[153px]">
        Auto Fix Code
      </Button>
      <Button
        color="red_A200"
        size="sm"
        variant="outline"
        shape="round"
        className="w-[36px] !rounded"
      >
        <Img src="images/img_maximize.svg" />
      </Button>
    </div>
  </div>
  <div className="flex items-center mt-3.5 mb-1 ml-1 gap-1.5 md:ml-0">
    <Img src="images/img_inbox.svg" alt="inbox_one" className="self-end h-[12px] w-[12px]" />
    <div className="flex">
      <Text size="xs" as="p" className="self-end !text-gray-200">
        Changes done in the code can be undone.
      </Text>
    </div>
  </div>
</div>:""}</>:""
}


                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
