import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { addPremiumSubscription } from "../newsSlices";
import { INews } from "../types";
import { ButtonSuscribe } from "./styled";

const SuscribeButton: FC<{ news: INews }> = ({ news }) => {
  const dispatch = useAppDispatch();
  const { premiumIdList } = useAppSelector((state) => state.news);

  const onClickSubscribe = () => {
    dispatch(addPremiumSubscription(news.id));
    setTimeout(() => {
      alert("Suscripto!");
    }, 1000);
  };

  return (
    <>
      {!premiumIdList.some((id) => id === news.id) && (
        <ButtonSuscribe aria-label="suscribe-button" onClick={onClickSubscribe}>
          Suscríbete
        </ButtonSuscribe>
      )}
    </>
  );
};

export default SuscribeButton;
