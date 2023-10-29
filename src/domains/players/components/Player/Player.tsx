import { IPlayer } from "../../players.model";

const Player: React.FC<IPlayer> = ({
  id,
  firstname,
  lastname,
  shortname,
  sex,
}) => (
  <>
    <div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
      <div className="md:flex">
        <div className="md:flex-shrink-0">
          <img
            className="h-48 w-full object-cover md:h-full md:w-48"
            src="your-image-url.jpg"
            alt="Card image"
          />
        </div>
        <div className="p-8">
          <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">
            Category
          </div>
          <a
            href="#"
            className="block mt-1 text-lg leading-tight font-medium text-black hover:underline"
          >
            Card Title
          </a>
          <p className="mt-2 text-gray-500">
            Some description or additional information about the card content.
          </p>
        </div>
      </div>
      <div className="p-6 border-t border-gray-200">
        <div className="flex items-center">
          <img
            className="h-10 w-10 rounded-full"
            src="your-avatar-image.jpg"
            alt="Avatar"
          />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-900">Author Name</p>
            <p className="text-sm text-gray-500">Date</p>
          </div>
        </div>
      </div>
    </div>
    <div>
      {id} {firstname} {lastname} {shortname} {sex}
    </div>
  </>
);

export default Player;
