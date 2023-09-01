import style from "./MenuContent.module.scss";
import { AsideMenu } from "../AsideMenu/AsideMenu";
import { Container } from "../../shared/Container/Container";
import { BeerPreview } from "../BeerPreview/BeerPreview";

export const MenuContent = () => {
  return (
    <section className={style.section}>
      <Container>
        <div className={style.sectionWrapper}>
          <AsideMenu />
          <BeerPreview />
        </div>
      </Container>
    </section>
  );
};
