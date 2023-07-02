import { useEffect } from "react";
import styles from "./modal.module.css";

interface ModalProps {
  isOpen: any;
  setModalOpen: any;
  children: any;
  linkSite: any;
  linkGithub: any;
  imagem: any;
  title: any;
  data: any;
}

export default function Modal({
  isOpen,
  setModalOpen,
  children,
  linkSite,
  linkGithub,
  imagem,
  title,
  data
}: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add(styles.disableScroll);
    } else {
      document.body.classList.remove(styles.disableScroll);
    }
  }, [isOpen]);

  if (isOpen) {
    return (
      <>
        <div className={styles.BACKGROUND_STYLE}>
          <div className={styles.MODAL_STYLE}>
            <div
              className={styles.botaoFechar}
              style={{ cursor: "pointer" }}
              onClick={setModalOpen}
            >
              <span className={`${styles.spamFechar} material-symbols-outlined`}>close</span>
            </div>
            <div className={styles.cardModal} >
              <div className={styles.modalLeft}>
                <img className={styles.imagemModal} src={imagem} alt={title} />
                <div className={styles.botoesModal}>
                  <a className={styles.botaoModal} href={linkSite} target="_blank">
                    Site
                  </a>
                  <a className={styles.botaoModal} href={linkGithub} target="_blank">
                    Github
                  </a>
                </div>
              </div>
              <div className={styles.modalRight}>
                <h1 className={styles.titleModal}>{title}</h1>
                <div className={styles.textModal} >
                  {children}
                </div>
                <p className={styles.dataModal}>{data}</p>
              </div>
              <div className={styles.botoesModal2}>
                <a className={styles.botaoModal2} href={linkSite} target="_blank">
                  Site
                </a>
                <a className={styles.botaoModal2} href={linkGithub} target="_blank">
                  Github
                </a>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }

  return null;
}
