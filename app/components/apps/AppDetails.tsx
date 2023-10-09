import React from "react";
import {Link, Button} from "@nextui-org/react";
import RatingStars from "./components/RatingStars";
export default function AppDetails() {
  return (
    <div className="p-2">
      <Link isBlock showAnchorIcon href="#" size="lg" className="font-bold" color="foreground">
        About this App 
      </Link>
      <p className="p-1 text-gray-500">
      Spotify offers an extensive library of free music to explore. With lots<br /> of different music genres to curate the best playlists full of your favourite songs, Spotify<br /> is like a huge music store but absolutely free!
      </p>
      <p className="font-bold p-1 mt-3">
      Updated on</p>
      <p className="p-1">
        4 Oct 2023
      </p>
      <div className="flex flex-wrap gap-4 items-center mt-5">
       
      <Button color="primary" variant="bordered">
        #1 top free music & audio
      </Button> 
      <Button color="primary" variant="bordered">
        Music & Audio
      </Button>  
       
    </div>
      <div className="mt-5">
      
      <Link isBlock showAnchorIcon href="#" size="lg" className="font-bold mb-3" color="foreground">
       Rating and reviews
      </Link>
      <div className="flex items-center mb-2">
        {[1, 2, 3, 4, 5].map((rating) => (
          <svg
            key={rating}
            className="w-4 h-4 text-yellow-300 mr-1"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 22 20"
          >
            <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z"/>
          </svg>
        ))}
        <p className="ml-2 text-sm font-medium text-gray-900 dark:text-white">4.95 out of 5</p>
      </div>
      <p className="text-sm font-medium text-gray-500 dark:text-gray-400">1,745 global ratings</p>
      {/* Example for each star rating */}
      <RatingStars rating={5} percentage={70} />
      <RatingStars rating={4} percentage={17} />
      <RatingStars rating={3} percentage={8} />
      <RatingStars rating={2} percentage={4} />
      <RatingStars rating={1} percentage={1} />
    </div>
    </div>
  );
}
