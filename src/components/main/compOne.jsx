import React, { Fragment } from "react";
import Slider from "./Slider";
 import Editor from '../../assets/editor.png';
 import Map from '../../assets/WorldMap.png';
 import Mapo from '../../assets/Wmap.svg';

export default function compOne() {
  return (
    <Fragment>
      <div className="max-w-[1300px] mx-auto ">
        <div className=" mx-auto flex overflow-visible justify-between items-center flex-col xl:flex-row sm:mt-48 mt-10  ">
          <div className="  sm:w-1/2 mt-10 overflow-visible sm:scale-75  w-full scale-50 ">
            {" "}
            <Slider />
          </div>
          <div className=" ml-12  className=max-w-[624px]  mt-10 sm:mt-0 xl:mt-12 px-4 sm:px-0 text-[#ffffff]  ">
            <h1 className=" text-3xl sm:text-5xl  font-bold ">
              Loved By Industy Leaders
            </h1>
            <p className=" mt-6 text-base sm:text-xl text-[#A3A3A3] ">
            The proposed web application manages many controllers, one of them is user controller which manages user login, password changing process, and adding new user by the system administrator. The other controller that website could handle is the table controller which manages all things about viewing data in the database. There are many different types of data tables that can be viewed by website GUI, such as air temperature and humidity, soil temperature and moisture, pH level, and the light intensity. </p>
            <p className=" text-[#A3A3A3] mt-6 text-base">
            We propose an Internet of Things (IoT) to enhancing the experience of personal gardening as a method of therapy for mental-health patients, given a belief in its role in a person’s mood and general positivity, The proposed (IoT) prototype continuously senses and monitors the state of an indoor plant through different sensors. .{" "}
            </p>
          </div>
        </div>
      </div>

      <div className=" max-w-[1280px] mx-auto ">
        <div className="sm:mt-28 mt-20 px-4 sm:px-8 ">
          <div className="mx-auto w-fit ">
            <div className="relative">
              <h1 className="bg-clip-text tracking-[-0.03em] md:text-5xl text-2xl font-bold text-neutral-50 ">
                What’s Inside
              </h1>
            </div>
          </div>
          <div className=" flex justify-between flex-col md:flex-row sm:mt-20 mt-10 md:items-start items-center gap-10 md:gap-0 ">
            <div className="  md:w-1/2 w-11/12 sm:ml-3  ">
              <h className="text-4xl font-bold text-[#4ADE80] ">Design</h>
              <p className=" mt-2 text-xl text-[#ffffff] ">
                {" "}
                interactive & responsive prototypes
              </p>
              <p className=" mt-4 text-sm text-[#A3A3A3]">
              One common problems faced by farmers is to identify the diseases in plants. Just relying on naked eyes to detect diseases is very difficult. We propose the development of a cost-effective and affordable smart farming prototype that can detect plant diseases in advance and notify farmers so that remedial actions could be taken. Also, a web-based system has been developed to allow the farmers to monitor the status of their plants in the greenhouse.
              </p>
            </div>
            <div className=" flex w-fit sm:w-1/2 justify-center px-4    ">
              <img src={Editor} />
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row sm:mt-20 mt-10 md:items-start items-center gap-10 md:gap-0 ">
            <div className=" flex w-fit sm:w-1/2 justify-center px-4 ">
              <img src={Editor} />
            </div>
            <div className="   md:w-1/2 w-11/12 sm:ml-3 ">
              <h className="text-4xl font-bold text-[#4ADE80] ">Code</h>
              <p className=" mt-2 text-xl text-[#ffffff] ">
                {" "}
                quickly with developer-friendly code
              </p>
              <p className=" mt-4 text-sm text-[#A3A3A3]">
              Some web designers spend days on end addressing small issues with Internet Explorer and leave their mobile users as second-hand visitors. This is a foolish approach.ESP-32, ESP-266 NoideMCU,  which is the IoT computer that will control the devices through internet.
Languages: HTML , Css , Java script , Tailwind Css , React js
Database: MySQL           	
Tools: Arduino, Visual Studio,           

              </p>
            </div>
          </div>
          <div className="flex justify-between flex-col md:flex-row sm:mt-20 mt-10 md:items-start items-center gap-10 md:gap-0 ">
            <div className="  md:w-1/2 w-11/12 sm:ml-3  ">
              <h className="text-4xl font-bold text-[#4ADE80] ">Mobile Responsice</h>
              <p className=" mt-2 text-xl text-[#ffffff] ">
                {" "}
                The Responsive Web Design Approach

              </p>
              <p className=" mt-4 text-sm text-[#A3A3A3]">
              What’s commonly glossed over about RWD is that it’s not just about adjusting the appearance of your webpages; instead, the focus should be on logically adapting your site for usage across different devices. For example: using the mouse does not provide the same user experience as, say, the touchscreen. Don’t you agree? Your responsive mobile vs. desktop layouts should reflect these differences.
              </p>
            </div>
            <div className=" flex w-fit sm:w-1/2 justify-center  px-4 ">
              <img src={Editor} />
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-[1280px] mx-auto ">
        <div className="mt-14 px-4 xl:px-8 pb-20 pt-10">
          <h1 className=" mt-20 text-5xl text-center text-[#ffffff] font-bold">
            Frequently Asked Questions
          </h1>
          <div className="flex flex-col sm:flex-row   sm:px-20 px-4 mt-14 gap-10 faaq ">
            <div className="sm:w-1/2  group ">
              <h1 className="text-[#ffffff] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l from-[#4ADE80] to-[#6EE7B7] text-xl sm:text-2xl font-bold  ">
              What do you monitor a plant with?
              </h1>
              <p className=" text-xs sm:text-sm text-[#A3A3A3] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[#ffffff] ">
              Using IOT sensor plants soil moisture levels, air temperature, soil temperature, fertilizer levels, and ambient light levels are monitored.
              </p>
            </div>
            <div className="sm:w-1/2  group">
              <h1 className="text-[#ffffff] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l from-[#4ADE80] to-[#6EE7B7] text-xl sm:text-2xl font-bold  ">
                {" "}
                Is there a way I can talk to someone if I get stuck?
              </h1>
              <p className=" text-xs sm:text-sm text-[#A3A3A3] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[#ffffff] ">
               Yes we are available 24/7, We are here to help you and work easy for you.
              </p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row   sm:px-20 px-4 mt-8 gap-10 faaq ">
            <div className="sm:w-1/2 w-fit group">
              <h1 className="text-[#ffffff] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l from-[#4ADE80] to-[#6EE7B7] text-xl sm:text-2xl font-bold  ">
              How much of the percentage growth we will gain using this system?
              </h1>
              <p className=" text-xs sm:text-sm text-[#A3A3A3] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[#ffffff] ">
              One can gain maximum growth results using this system as it keeps an eye on plants needs such as plants soil moisture levels, air temperature, soil temperature, fertilizer levels, and ambient light levels.   </p>
            </div>
            <div className="sm:w-1/2 w-fit group">
              <h1 className="text-[#ffffff] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-l from-[#4ADE80] to-[#6EE7B7] text-xl sm:text-2xl font-bold  ">
                {" "}
                What is smart irrigation system using IoT?     </h1>
              <p className=" text-xs sm:text-sm text-[#A3A3A3] group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-[#ffffff] ">
              The Smart Irrigation System is an IoT based device which is capable of automating the irrigation process by analyzing the moisture of soil and the climate condition (like raining).Also the data of sensors will be displayed in graphical form on BOLT cloud page.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className=" max-w-[1280px] mx-auto ">
        <div
          className=" bg-center h-[500px] sm:h-[705px] flex flex-col px-8 lg:px-0 items-center justify-center bg-no-repeat mb-11  "
           style={{ backgroundImage: `url(${Mapo})` }}
        >
          <h1 className="  text-[#ffffff] text-center text-5xl font-bold">
          CONNECT WITH US
          </h1>

          <p className=" mt-6 px-4 sm:px-24 text-xl text-[#A3A3A3] sm:w-full text-center ">
          Connect us through email to keep yourself updated about innovations, offers and packages we provide. </p>

          <div className=" bg-gradient-to-r p-[3px] from-[#4ADE80] to-[#6EE7B7] mt-10   rounded  ">
            <div className="  w-full    bg-[#6b7280] rounded-sm  flex flex-col  sm:flex-row  justify-between items-center mx-auto  gap-4 sm:mx-auto  sm:w-[600px] h-[28px] sm:h-[56px]">
              <div>
                {" "}
                <input
                  className="bg-[#6B7280] sm:text-[16px] text-xs sm:px-8  text-[#E5E5E5]  leading-4 outline-none  sm:py-4  "
                  type={"email"}
                  placeholder={" Enter your email"}
                />
              </div>
              <div>
                <button className="font-medium sm:rounded-none rounded-md py-4 sm:py-0 md:text-base text-sm leading-4 text-white gap-3 hover:to-[#15803D] hover:from-[#34D399] sm:h-[56px] bg-gradient-to-r px-[29px] from-[#15803D] to-[#34D399] flex items-center justify-center ">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[2px] bg-gradient-to-r from-[#4ADE80] to-[#6EE7B7] "></div>
      <div className=" bg-[#262626] ">
        <div className=" max-w-[1280px] mx-auto  ">
          <div className="flex flex-wrap sm:flex-row bg-[#262626] pb-4 px-4 gap-10 sm:gap-4 lg:gap-[80px] w-full md:w-fit justify-between text-[#ffffff] ">
            <div className="  sm:w-1/4 mt-10  ">
              <h1 className="hover:cursor-pointer font-medium text-[18px] mb-2">
                Logo
              </h1>
              <p className="text-[#A3A3A3]">
              We are now going to make IoT Sensor Plant Monitoring system whose data will be displayed on the your screen.{" "}
              </p>
            </div>
            <div className=" flex flex-col mt-10  ">
              <ul className="  space-y-2 ">
                <li className="hover:cursor-pointer font-medium text-[18px] mb-2">
                  Product
                </li>
                <li className=" text-[#A3A3A3] hover:cursor-pointer">Proin.</li>
                <li className=" text-[#A3A3A3] hover:cursor-pointer">Proin.</li>
                <li className=" text-[#A3A3A3] hover:cursor-pointer">Proin.</li>
                <li className=" text-[#A3A3A3] hover:cursor-pointer">
                  Documents
                </li>
              </ul>
            </div>
            <div className="flex flex-col mt-10">
              <ul className=" space-y-2 ">
                <li className="hover:cursor-pointer font-medium text-[18px] mb-2">
                  Plan
                </li>
                <li className=" text-[#A3A3A3] hover:cursor-pointer">
                  Roadmap
                </li>
                <li className=" text-[#A3A3A3] hover:cursor-pointer">Blog</li>
                <li className=" text-[#A3A3A3] hover:cursor-pointer">Blog</li>
                <li className=" text-[#A3A3A3] hover:cursor-pointer">Blog</li>
                <li className=" text-[#A3A3A3] hover:cursor-pointer">Blog</li>
              </ul>
            </div>

            <div className=" flex flex-col mt-10  ">
              <ul className="  space-y-2 ">
                <li className="hover:cursor-pointer font-medium text-[18px] mb-2 ">
                  {" "}
                  Serviced
                </li>
                <li className=" text-[#A3A3A3] hover:cursor-pointer">Proin.</li>
                <li className=" text-[#A3A3A3] hover:cursor-pointer">Proin.</li>
                <li className=" text-[#A3A3A3] hover:cursor-pointer">Proin.</li>
                <li className=" text-[#A3A3A3] hover:cursor-pointer">
                  Documents
                </li>
                <li className=" text-[#A3A3A3] hover:cursor-pointer">Blog</li>
                <li className=" text-[#A3A3A3] hover:cursor-pointer">Blog</li>
              </ul>
            </div>
            <div className="flex flex-col mt-10 justify-start ">
              <button className="hover:cursor-pointer font-medium text-[18px] mb-2">
                Follow me
              </button>
              <div className="flex items-center gap-6 justify-start ">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="#404040" />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M23 16.0425C23 12.1769 19.8656 9.04248 16 9.04248C12.1344 9.04248 9 12.1769 9 16.0425C9 19.5362 11.5594 22.4322 14.9062 22.9578V18.0665H13.1284V16.0425H14.9062V14.5003C14.9062 12.7462 15.9516 11.7765 17.5503 11.7765C18.3162 11.7765 19.1175 11.9134 19.1175 11.9134V13.6362H18.2344C17.3653 13.6362 17.0934 14.1756 17.0934 14.73V16.0425H19.0347L18.7247 18.0665H17.0938V22.9584C20.4406 22.4331 23 19.5372 23 16.0425Z"
                    fill="#FAFAFA"
                  />
                </svg>

                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="#404040" />
                  <g clipPath="url(#clip0_215_2243)">
                    <path
                      d="M23.8947 12.6497C23.8947 11.2434 22.8603 10.1122 21.5822 10.1122C19.851 10.0312 18.0853 10 16.281 10H15.7185C13.9185 10 12.1497 10.0312 10.4185 10.1125C9.14345 10.1125 8.10908 11.25 8.10908 12.6562C8.03095 13.7684 7.99783 14.8809 7.9997 15.9934C7.99658 17.1059 8.03199 18.2195 8.10595 19.3341C8.10595 20.7403 9.14033 21.8809 10.4153 21.8809C12.2341 21.9653 14.0997 22.0028 15.9966 21.9997C17.8966 22.0059 19.757 21.9664 21.5778 21.8809C22.856 21.8809 23.8903 20.7403 23.8903 19.3341C23.9653 18.2184 23.9997 17.1059 23.9966 15.9903C24.0037 14.8778 23.9697 13.7643 23.8947 12.6497ZM14.4685 19.0591V12.9184L18.9997 15.9872L14.4685 19.0591Z"
                      fill="#FAFAFA"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_215_2243">
                      <rect
                        width="16"
                        height="16"
                        fill="white"
                        transform="translate(8 8)"
                      />
                    </clipPath>
                  </defs>
                </svg>

                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="#404040" />
                  <path
                    d="M19.7915 13.0835C19.6184 13.0835 19.4493 13.0322 19.3054 12.936C19.1615 12.8399 19.0493 12.7032 18.9831 12.5433C18.9169 12.3835 18.8996 12.2075 18.9333 12.0378C18.9671 11.8681 19.0504 11.7121 19.1728 11.5898C19.2952 11.4674 19.4511 11.3841 19.6208 11.3503C19.7905 11.3165 19.9665 11.3339 20.1264 11.4001C20.2862 11.4663 20.4229 11.5785 20.519 11.7224C20.6152 11.8663 20.6665 12.0354 20.6665 12.2085C20.6668 12.3235 20.6443 12.4374 20.6004 12.5436C20.5565 12.6499 20.4921 12.7465 20.4108 12.8278C20.3295 12.9091 20.2329 12.9735 20.1266 13.0174C20.0204 13.0613 19.9065 13.0837 19.7915 13.0835Z"
                    fill="#FAFAFA"
                  />
                  <path
                    d="M18.9166 10.1666C19.6895 10.1689 20.43 10.4769 20.9766 11.0234C21.5231 11.57 21.8311 12.3105 21.8334 13.0834V18.9166C21.8311 19.6895 21.5231 20.43 20.9766 20.9766C20.43 21.5231 19.6895 21.8311 18.9166 21.8334H13.0834C12.3105 21.8311 11.57 21.5231 11.0234 20.9766C10.4769 20.43 10.1689 19.6895 10.1666 18.9166V13.0834C10.1689 12.3105 10.4769 11.57 11.0234 11.0234C11.57 10.4769 12.3105 10.1689 13.0834 10.1666H18.9166ZM18.9166 9H13.0834C10.8375 9 9 10.8375 9 13.0834V18.9166C9 21.1625 10.8375 23 13.0834 23H18.9166C21.1625 23 23 21.1625 23 18.9166V13.0834C23 10.8375 21.1625 9 18.9166 9Z"
                    fill="#FAFAFA"
                  />
                  <path
                    d="M16 13.6666C16.4615 13.6666 16.9127 13.8034 17.2964 14.0598C17.6801 14.3162 17.9792 14.6807 18.1558 15.107C18.3324 15.5334 18.3786 16.0026 18.2886 16.4552C18.1986 16.9079 17.9763 17.3237 17.65 17.65C17.3236 17.9763 16.9079 18.1986 16.4552 18.2886C16.0026 18.3786 15.5334 18.3324 15.107 18.1558C14.6807 17.9792 14.3162 17.6801 14.0598 17.2964C13.8034 16.9127 13.6666 16.4615 13.6666 16C13.6672 15.3813 13.9133 14.7882 14.3507 14.3507C14.7882 13.9133 15.3813 13.6672 16 13.6666ZM16 12.5C15.3078 12.5 14.6311 12.7053 14.0555 13.0899C13.4799 13.4744 13.0313 14.0211 12.7664 14.6606C12.5015 15.3001 12.4322 16.0039 12.5673 16.6828C12.7023 17.3618 13.0356 17.9854 13.5251 18.4749C14.0146 18.9644 14.6382 19.2977 15.3172 19.4327C15.9961 19.5678 16.6998 19.4985 17.3394 19.2336C17.9789 18.9687 18.5256 18.5201 18.9101 17.9445C19.2947 17.3689 19.5 16.6922 19.5 16C19.5 15.0717 19.1312 14.1815 18.4749 13.5251C17.8185 12.8687 16.9283 12.5 16 12.5Z"
                    fill="#FAFAFA"
                  />
                </svg>

                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="16" cy="16" r="16" fill="#404040" />
                  <path
                    d="M21.8803 9H10.1962C9.55781 9 9 9.45937 9 10.0903V21.8003C9 22.4347 9.55781 23 10.1962 23H21.8769C22.5187 23 23 22.4309 23 21.8003V10.0903C23.0037 9.45937 22.5188 9 21.8803 9ZM13.3397 20.6697H11.3341V14.4338H13.3397V20.6697ZM12.4062 13.4856H12.3919C11.75 13.4856 11.3344 13.0078 11.3344 12.4097C11.3344 11.8006 11.7609 11.3341 12.4172 11.3341C13.0734 11.3341 13.475 11.7972 13.4894 12.4097C13.4891 13.0078 13.0734 13.4856 12.4062 13.4856ZM20.6697 20.6697H18.6641V17.26C18.6641 16.4431 18.3722 15.885 17.6466 15.885C17.0922 15.885 16.7641 16.26 16.6181 16.6253C16.5634 16.7566 16.5487 16.9353 16.5487 17.1178V20.6697H14.5431V14.4338H16.5487V15.3016C16.8406 14.8859 17.2966 14.2878 18.3575 14.2878C19.6741 14.2878 20.67 15.1556 20.67 17.0266L20.6697 20.6697Z"
                    fill="#FAFAFA"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
}
