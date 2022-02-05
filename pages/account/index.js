import Table from "../../components/table";

export default function Account() {
  return (
    <div>
      <div className="py-3 md:py-7 md:px-4  bg-indigo-100  flex justify-between  lg:px-12">
        <div className="cursor-pointer flex items-center">
          <div>
            <svg
              className="w-10 text-indigo-500"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 225 225"
              // style="enable-background:new 0 0 225 225;"
            >
              <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                <g>
                  <path
                    id="Layer0_0_1_STROKES"
                    className="st0"
                    d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"
                  />
                </g>
              </g>
            </svg>
          </div>
          <div className="text-2xl  md: hidden text-indigo-800 tracking-wide ml-2 font-semibold">
            Logo
          </div>
        </div>
        <div className="cursor-pointer flex items-center">
          {/* <div>
            <svg
              className="w-10 text-indigo-500"
              id="Layer_1"
              x="0px"
              y="0px"
              viewBox="0 0 225 225"
              // style="enable-background:new 0 0 225 225;"
            >
              <g transform="matrix( 1, 0, 0, 1, 0,0) ">
                <g>
                  <path
                    id="Layer0_0_1_STROKES"
                    className="st0"
                    d="M173.8,151.5l13.6-13.6 M35.4,89.9l29.1-29 M89.4,34.9v1 M137.4,187.9l-0.6-0.4     M36.6,138.7l0.2-0.2 M56.1,169.1l27.7-27.6 M63.8,111.5l74.3-74.4 M87.1,188.1L187.6,87.6 M110.8,114.5l57.8-57.8"
                  />
                </g>
              </g>
            </svg>
          </div> */}
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="w-10"
              fill="#6366f1"
            >
              <path d="M20.822 18.096c-3.439-.794-6.641-1.49-5.09-4.418 4.719-8.912 1.251-13.678-3.732-13.678-5.081 0-8.464 4.949-3.732 13.678 1.597 2.945-1.725 3.641-5.09 4.418-2.979.688-3.178 2.143-3.178 4.663l.005 1.241h10.483l.704-3h1.615l.704 3h10.483l.005-1.241c.001-2.52-.198-3.975-3.177-4.663zm-8.231 1.904h-1.164l-.91-2h2.994l-.92 2z" />
            </svg>
          </div>
          <div className="text-2xl md: hidden text-indigo-800 tracking-wide ml-2 font-semibold">
            Profile
          </div>
        </div>
      </div>
      <div className="lg:p-20">
        <Table />
      </div>
    </div>
  );
}
