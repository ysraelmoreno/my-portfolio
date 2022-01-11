import { useEffect } from "react";
import { useEasterEggs } from "../../context/EasterEggsContext";
import R2 from "./R2";
import { EasterEggContainer } from "./styles";
import XWing from "./XWing";

function EasterEgg() {
  const { easterEgg, isShowingEgg, setIsShowingEgg } = useEasterEggs();

  useEffect(() => {
    if (isShowingEgg) {
      setTimeout(() => {
        setIsShowingEgg(false);
      }, 3000);
    }
  }, [isShowingEgg]);

  return (
    <EasterEggContainer>
      {easterEgg === "xWing" && <XWing />}
      {easterEgg === "R2" && <R2 />}
    </EasterEggContainer>
  );
}

export default EasterEgg;
