import React from "react";
import { Image, Card } from "@nextui-org/react";

const Screenshots = [
  {
    imageUrl: "https://play-lh.googleusercontent.com/5dCSsxuMcxvnY81Vx15u2jTcM0VQNBc1V_Xe4hQ5Iv9bVREB-0aI-NshZHpmdmfQT1jr=w526-h296-rw"
  },
  {
    imageUrl: "https://play-lh.googleusercontent.com/HAvgVVrib-QVQJBPz_qKVzZwY5OBrK156cZIYWENBD8q_wfuuwGxpllyDCCXiYWJkA=w526-h296-rw"
  },
  {
    imageUrl: "https://play-lh.googleusercontent.com/mRcR-sUJLDYI-NXTUmfUB9KxUy44_kzVo6gPK1KLeT6lz0fUq1vkHNIFZvY_gBDG1NE=w526-h296-rw"
  },
  {
    imageUrl: "https://play-lh.googleusercontent.com/YqpDtst9E18SLbx7vtohXJrBEQ_U57X0rJiHQoG9TRGAwwOazTlIRR7MGX3RigaeF3I=w526-h296-rw"
  },
  {
    imageUrl: "https://play-lh.googleusercontent.com/XcS0JkmXbrPLTWKWmi6Qcka2NxF5tnec-HuYOWIxGxRwLAwZvjzJohQaCaU09FWZRg=w526-h296-rw"
  },
  {
    imageUrl: "https://play-lh.googleusercontent.com/Lz8Jw1g3Mokqdp3NUedbcI4K8v607sN6XwDYzErJy_qTtCafOkFUYgUfmR8GqMoABek=w526-h296-rw"
  }
];

export default function AppScreenshots() {
  return (
    <>
      <div className="scroll-x">
      <div className="flex space-x-3">
        {Screenshots.map((shots, index) => (
            <div className="mobile-card-container" key={index}>
          <Card
            className="border-none scroll-content"   
          >

            <Image
              isBlurred
              alt={`Image for App`}
              className="object-cover"
              height={200}
              src={shots.imageUrl}
              width={200}
            />
            </Card>
          </div>
        ))}
      </div>
      </div>
    </>
  );
}
