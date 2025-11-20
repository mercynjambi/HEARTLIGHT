const Team = () => {
  return (
    <div className="flex flex-col items-center text-center mb-10">
      <h1 className="text-4xl font-bold max-w-[740px] mb-[72px]">
        Trusted by <span className="text-secondary">10,000+</span> families & communities
      </h1>

      <div className="flex flex-wrap items-center justify-center gap-4">
        
        {/* Member 1 */}
        <div className="flex flex-col items-center bg-white px-3 py-8 rounded-lg border border-gray-300/80 max-w-[272px] text-sm text-center text-gray-500">
          <div className="relative mb-4">
            <img
              className="h-16 w-16 rounded-full"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage1.png"
              alt="team-member-1"
            />
            <svg
              className="absolute top-0 -right-2"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10.5" cy="10.5" r="8.5" fill="#E7A53D" />
              <path
                d="m11.584 13.872 1.752-3.288 1.104-.288a2.7 2.7 0 0 1-.432.576.76.76 0 0 1-.552.24q-.672 0-1.248-.576t-.576-1.464q0-.936.624-1.584.648-.672 1.584-.672.888 0 1.536.672.672.648.672 1.584 0 .384-.168.912-.144.504-.576 1.296l-1.92 3.552zm-5.4 0 1.752-3.288 1.08-.288a2.2 2.2 0 0 1-.408.576.76.76 0 0 1-.552.24q-.696 0-1.272-.576t-.576-1.464q0-.936.624-1.584.648-.672 1.584-.672.888 0 1.536.672.672.648.672 1.584 0 .384-.144.912-.144.504-.576 1.296L7.96 14.832z"
                fill="#fff"
              />
            </svg>
          </div>

          <p>
            “HeartLight stood with us during our toughest moment. Their support
            and compassion gave our family strength when we needed it most.”
          </p>
          <p className="text-lg text-gray-800 font-medium mt-5">
            Mary Wanjiku
          </p>
          <p className="text-xs">Beneficiary Family</p>
        </div>

        {/* Member 2 */}
        <div className="flex flex-col items-center bg-white px-3 py-8 rounded-lg border border-gray-300/80 max-w-[272px] text-sm text-center text-gray-500">
          <div className="relative mb-4">
            <img
              className="h-16 w-16 rounded-full"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage2.png"
              alt="team-member-2"
            />
            <svg
              className="absolute top-0 -right-2"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10.5" cy="10.5" r="8.5" fill="#E7A53D" />
              <path
                d="m11.584 13.872 1.752-3.288 1.104-.288a2.7 2.7 0 0 1-.432.576.76.76 0 0 1-.552.24q-.672 0-1.248-.576t-.576-1.464q0-.936.624-1.584.648-.672 1.584-.672.888 0 1.536.672.672.648.672 1.584 0 .384-.168.912-.144.504-.576 1.296l-1.92 3.552zm-5.4 0 1.752-3.288 1.08-.288a2.2 2.2 0 0 1-.408.576.76.76 0 0 1-.552.24q-.696 0-1.272-.576t-.576-1.464q0-.936.624-1.584.648-.672 1.584-.672.888 0 1.536.672.672.648.672 1.584 0 .384-.144.912-.144.504-.576 1.296L7.96 14.832z"
                fill="#fff"
              />
            </svg>
          </div>

          <p>
            “Their funeral support program allowed us to give our loved one a
            peaceful, dignified send-off without financial strain.”
          </p>
          <p className="text-lg text-gray-800 font-medium mt-5">
            David Otieno
          </p>
          <p className="text-xs">HeartLight Member</p>
        </div>

        {/* Member 3 */}
        <div className="flex flex-col items-center bg-white px-3 py-8 rounded-lg border border-gray-300/80 max-w-[272px] text-sm text-center text-gray-500">
          <div className="relative mb-4">
            <img
              className="h-16 w-16 rounded-full"
              src="https://raw.githubusercontent.com/prebuiltui/prebuiltui/main/assets/userImage/userImage3.png"
              alt="team-member-3"
            />
            <svg
              className="absolute top-0 -right-2"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle cx="10.5" cy="10.5" r="8.5" fill="#E7A53D" />
              <path
                d="m11.584 13.872 1.752-3.288 1.104-.288a2.7 2.7 0 0 1-.432.576.76.76 0 0 1-.552.24q-.672 0-1.248-.576t-.576-1.464q0-.936.624-1.584.648-.672 1.584-.672.888 0 1.536.672.672.648.672 1.584 0 .384-.168.912-.144.504-.576 1.296l-1.92 3.552zm-5.4 0 1.752-3.288 1.08-.288a2.2 2.2 0 0 1-.408.576.76.76 0 0 1-.552.24q-.696 0-1.272-.576t-.576-1.464q0-.936.624-1.584.648-.672 1.584-.672.888 0 1.536.672.672.648.672 1.584 0 .384-.144.912-.144.504-.576 1.296L7.96 14.832z"
                fill="#fff"
              />
            </svg>
          </div>

          <p>
            “HeartLight’s team guided us with love and understanding. Their
            welfare support truly softened the burden of loss.”
          </p>
          <p className="text-lg text-gray-800 font-medium mt-5">
            Sarah Mwangi
          </p>
          <p className="text-xs">Community Volunteer</p>
        </div>

      </div>
    </div>
  );
};

export default Team;
