import style from "./MenuContent.module.scss";
import { Container } from "../../shared/Container/Container";

import { AsideMenu } from "../../Menu";
import { BeerPreview } from "../../Menu";

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
