import styles from "./sobremim.module.css";
import { useRef } from "react";
import { useInView } from "framer-motion";

function Sobremim() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section
      ref={ref}
      style={{
        transform: isInView ? "none" : "translateX(-200px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
      }}
      id="sobremim"
      className={styles.sectionSobremim}
    >
      <div className={styles.divSobremim}>
        <h2 className={styles.titleS}>Sobre mim</h2>
        <p className={styles.pSobre}>
          Desenvolvedor Full Stack com experiência em <span>TypeScript</span>,{" "}
          <span>JavaScript</span>, <span>React</span>, <span>HTML</span>,{" "}
          <span>CSS</span> e <span>Python</span>. Apaixonado pelo
          desenvolvimento de componentes reutilizáveis. Também possui
          experiência em projetos gerenciados por Metodologias Ágeis. Estudando
          Análise e Desenvolvimento de Sistemas pela FIAP.
        </p>
      </div>
    </section>
  );
}

export default Sobremim;
