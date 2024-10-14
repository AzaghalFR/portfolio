import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { Button } from "@mui/material";
import { useState } from "react";
import AboutMeTitle from "../../assets/img/aboutmeTitle.webp";
import AboutMePhoto from "../../assets/img/aboutme.webp";
import frise from "../../assets/img/frise.webp";
import BackgroundImage from "../../assets/img/poisson.webp";

export const AboutMe = () => {
  const [displayMore, setDisplayMore] = useState<boolean>(false);

  return (
    <div
      id="aboutme"
      style={{
        minHeight: "100vh",
        backgroundImage: `url(${BackgroundImage})`,
        backgroundAttachment: "fixed",
        backgroundPositionX: "center",
        backgroundPositionY: "20%",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        paddingBottom: "40vh",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          alignItems: "center",
          flexWrap: "wrap",
          flexDirection: "row",
          minHeight: "100vh",
          backgroundColor:"white"
        }}
      >
        <img
          alt="drawing of myself"
          style={{ marginBlock: 40 }}
          src={AboutMePhoto}
          width={
            window.innerHeight < window.innerWidth
              ? window.innerWidth * 0.4
              : window.innerWidth * 0.8
          }
        />

        <div
          style={{
            position: "relative",
            marginBlock: 40,
            padding: 20,
            maxWidth:
              window.innerHeight < window.innerWidth
                ? window.innerWidth * 0.3
                : window.innerWidth * 0.8,
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            alt="about me"
            src={AboutMeTitle}
            width={
              window.innerHeight < window.innerWidth
                ? window.innerWidth * 0.3
                : window.innerWidth * 0.6
            }
          />

          <div
            style={{
              alignSelf: "center",
              overflowWrap: "break-word",
              fontSize: window.innerHeight > window.innerWidth ? 17 : 20,
            }}
          >
            <p>Bienvenue dans mon portfolio!</p>
            <p>
              Je m'appelle Adèle Fontanaud, et je suis diplômée d'un Bachelor en communication, obtenu à Angoulême en septembre 2024.
            </p>
            <p>
              Cette formation m’a permis d’acquérir des compétences variées, 
              telles que la maîtrise des logiciels de la suite Adobe, 
              ainsi que des connaissances en marketing. J’ai 
              également eu la chance de mettre en pratique mes 
              acquis lors de mon alternance, que je poursuis actuellement 
              en Master au sein du groupe Vinci Énergie. Cette expérience 
              m’a permis de me former à WordPress et de développer des 
              compétences dans des domaines tels que l’événementiel, 
              la création de contenu sur LinkedIn, et la création visuelle.
            </p>
            {/* <p>
              Après avoir validé ce diplôme, j'ai passé une année en tant
              qu’animatrice en service civique au sein d’un EHPAD. Je souhaite
              dorénavant trouver un travail dans lequel je pourrai m'épanouir.
            </p> */}
            <p>
            Ce que j’aime le plus, c’est exprimer ma créativité à travers des projets divers, qu’ils soient professionnels ou personnels.
            </p>
            <div style={{width: "100%", display:"flex", justifyContent:"center"}}>
            <Button
              variant="outlined"
              aria-label="Me contacter"
              style={{ color: "pink", borderColor: "#8C685E"}}
              onClick={() => {
                const anchor = document.getElementById("contact");
                if (anchor) {
                  window.scrollTo({ top: anchor.offsetTop - window.innerHeight/10, behavior: "smooth" });
                }}}
            >
          N'hésitez pas à me contacter
        </Button>
        </div>
          </div>
        </div>

        {/* Frise chronologique */}
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              width: window.innerWidth * 0.8,
            }}
          >
            <p
              style={{ margin: 0, marginTop: 20, fontSize: 20, width: "100%" }}
            >
              Pour en savoir un peu plus sur mes expériences professionelles :
            </p>
            <img
              alt="Frise chronologique expérience"
              style={{ marginBottom: 40 }}
              src={frise}
              width={
                window.innerHeight < window.innerWidth
                  ? window.innerWidth * 0.6
                  : window.innerWidth * 0.8
              }
            />

            {displayMore && (
              <div
                style={{
                  position: "relative",
                  marginBlock: 30,
                  width: "100%",
                  display: "flex",
                  justifyContent: "space-evenly",
                  alignItems: "flex-start",
                  flexDirection: "row",
                  flexWrap: "wrap",
                }}
              >
                {/* DUT MMI */}
                <div
                  className="shadow-portfolio"
                  style={{
                    border: "2px solid #8C685E",
                    width:
                      window.innerHeight > window.innerWidth ? "90%" : "20%",
                    overflowWrap: "break-word",
                    margin: 20,
                  }}
                >
                  <p
                    style={{
                      borderBottom: "3px solid white",
                      paddingBlock: 15,
                      fontSize: 20,
                      fontWeight: "bold",
                      top: 0,
                      width: "100%",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    DUT MMI
                  </p>
                  <div style={{ paddingInline: 20, paddingBlock: 10 }}>
                    <p>
                      Pour ma dernière année à l'IUT je me suis spécialisée dans
                      l'option Communication et Presse Numérique.
                    </p>
                    <p>
                      Dans ce cadre j'ai eu l'opportunité d'être chargée de
                      communication digitale stagiaire pour Le Potager D'à Côté
                      pour une durée de deux mois.
                    </p>
                    <p>
                      J'ai aussi effectué des missions en tant que graphiste
                      stagiaire chez Atelier Graphic en 2019 pendant une durée
                      de trois semaines.
                    </p>
                  </div>
                </div>

                {/* Service Civique */}
                {/* <div
                  className="shadow-portfolio"
                  style={{
                    border: "2px solid #8C685E",
                    width:
                      window.innerHeight > window.innerWidth ? "90%" : "20%",
                    overflowWrap: "break-word",
                    margin: 20,
                  }}
                >
                  <p
                    style={{
                      borderBottom: "3px solid white",
                      fontSize: 20,
                      fontWeight: "bold",
                      paddingBlock: 15,
                      top: 0,
                      width: "100%",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    Service Civique
                  </p>
                  <div style={{ padding: 20 }}>
                    <p>
                      {" "}
                      J'ai effectué un service civique dans un EHPAD pour une
                      durée de 8 mois.
                    </p>
                    <p>
                      {" "}
                      En charge de personnes âgées et/ou en situation de
                      handicap, afin de m'assurer de leur bien-être et de les
                      aider dans leurs quotidiens.
                    </p>
                    <p>
                      {" "}
                      J'ai aussi pu effectuer differentes tâches, tel que
                      l'accueil des familles ou encore la création de supports
                      visuels.{" "}
                    </p>
                    <p>
                      {" "}
                      Cela m'a permis d'améliorer mon travail en équipe et mon
                      aisance auprès de nombreux publics.{" "}
                    </p>
                  </div>
                </div> */}

                {/* Garde d'enfant */}
                {/* <div
                  className="shadow-portfolio"
                  style={{
                    border: "2px solid #8C685E",
                    width:
                      window.innerHeight > window.innerWidth ? "90%" : "20%",
                    overflowWrap: "break-word",
                    margin: 20,
                  }}
                >
                  <p
                    style={{
                      borderBottom: "3px solid white",
                      paddingBlock: 15,
                      fontSize: 20,
                      fontWeight: "bold",
                      top: 0,
                      width: "100%",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    {" "}
                    Garde d'enfants{" "}
                  </p>
                  <div style={{ padding: 20 }}>
                    <p>
                      Après mon service civique j'ai encore découvert un autre
                      domaine d'activité.
                    </p>
                    <p>
                      J'ai acquis de nombreuses compétences en m'occupant de
                      différents enfants pendant maintenant bientôt une année.
                    </p>
                    <p>
                      Aux côtés des enfants, il faut savoir gérer les situations
                      de stress, les situations conflictuelles et les imprévus.
                    </p>
                    <p>
                      J'ai beaucoup aimé les voir s'épanouir à mes côtés et
                      créer du lien avec eux, cela m'a entre autres permis de
                      gagner confiance en moi.
                    </p>
                  </div>
                </div> */}

                {/* Bachelor 3 communication */}
                <div
                  className="shadow-portfolio"
                  style={{
                    border: "2px solid #8C685E",
                    width:
                      window.innerHeight > window.innerWidth ? "90%" : "20%",
                    overflowWrap: "break-word",
                    margin: 20,
                  }}
                >
                  <p
                    style={{
                      borderBottom: "3px solid white",
                      fontSize: 20,
                      fontWeight: "bold",
                      paddingBlock: 15,
                      top: 0,
                      width: "100%",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    Bachelor 3 communication
                  </p>
                  <div style={{ paddingInline: 20, paddingBlock: 10 }}>
                    <p>
                      {" "}
                      J'ai eu l'opportunité d'intégrer la MediaSchool d'Angoulême pour y suivre un Bachelor 3 en communication durant l'année 2023-2024.
                    </p>
                    <p>
                      {" "}
                      Cette expérience m'a permis d'approfondir certaines connaissances et de découvrir de nouvelles techniques.
                    </p>
                    <p>
                      {" "}
                      J'ai notamment eu l'occasion de travailler sur de nombreux projets de groupe, en réalisant des analyses de marché et en mettant en place des actions de communication concrètes.{" "}
                    </p>
                  </div>
                </div>

                {/* VINCI Energies (alternance) */}
                <div
                  className="shadow-portfolio"
                  style={{
                    border: "2px solid #8C685E",
                    width:
                      window.innerHeight > window.innerWidth ? "90%" : "20%",
                    overflowWrap: "break-word",
                    margin: 20,
                  }}
                >
                  <p
                    style={{
                      borderBottom: "3px solid white",
                      fontSize: 20,
                      fontWeight: "bold",
                      paddingTop: 15,
                      top: 0,
                      width: "100%",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    VINCI Energies<br/>(alternance)
                  </p>
                  <div style={{ paddingInline: 20, paddingBottom: 10 }}>
                    <p>
                      J'ai eu l'opportunité de réaliser mon alternance au sein du groupe Vinci Énergie, où j'étais en charge de la communication de 9 entreprises au sein de la direction régionale.
                    </p>
                    <p>
                      Mon rôle était d'analyser les besoins spécifiques de chaque entité afin de définir les actions à mener pour améliorer leur visibilité.
                    </p>
                    <p>
                      J'ai notamment créé des plaquettes commerciales, refait plusieurs sites internet, et pris en charge l'organisation d'événements tels que des inaugurations et des fêtes.
                    </p>
                  </div>
                </div>

                {/* Master 2 communication */}
                <div
                  className="shadow-portfolio"
                  style={{
                    border: "2px solid #8C685E",
                    width:
                      window.innerHeight > window.innerWidth ? "90%" : "20%",
                    overflowWrap: "break-word",
                    margin: 20,
                  }}
                >
                  <p
                    style={{
                      borderBottom: "3px solid white",
                      fontSize: 20,
                      fontWeight: "bold",
                      paddingBlock: 15,
                      top: 0,
                      width: "100%",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    Master 2 communication
                  </p>
                  <div style={{ paddingInline: 20, paddingBlock: 10 }}>
                    <p>
                      J'ai l'opportunité de poursuivre en Master avec la même alternance, afin d'approfondir toutes mes connaissances et de continuer à apporter mon aide aux entreprises du groupe Vinci Énergie
                    </p>
                  </div>
                </div>

                {/* Et maintenant ? */}
                {/* <div
                  className="shadow-portfolio"
                  style={{
                    border: "2px solid #8C685E",
                    width:
                      window.innerHeight > window.innerWidth ? "90%" : "20%",
                    overflowWrap: "break-word",
                    margin: 20,
                  }}
                >
                  <p
                    style={{
                      borderBottom: "3px solid white",
                      paddingBlock: 15,
                      fontSize: 20,
                      fontWeight: "bold",
                      top: 0,
                      width: "100%",
                      textAlign: "center",
                      margin: 0,
                    }}
                  >
                    {" "}
                    Et maintenant ?{" "}
                  </p>
                  <div style={{ padding: 20 }}>
                    <p>
                      À l'heure actuelle, malgré les bons moments que je passe
                      aux côtés des enfants, j'aimerais trouver un travail qui
                      met en action toutes mes compétences et mes centres
                      d'intérêt.
                    </p>
                    <p>
                      Un travail dans lequel je pourrais m'épanouir et découvrir
                      de nouvelles perspectives d'avenir.{" "}
                    </p>
                    <p>
                      C'est pour cela que je postule aujourd'hui à des offres
                      d'emploi, qui peuvent me correspondre.
                    </p>
                  </div>
                </div> */}
              </div>
            )}
            <Button
              variant="outlined"
              aria-label="agrandir l'image"
              style={{
                color: "pink",
                borderColor: "#8C685E",
                marginBottom: 20,
              }}
              endIcon={
                displayMore ? (
                  <ExpandLessIcon style={{ color: "pink" }} />
                ) : (
                  <ExpandMoreIcon style={{ color: "pink" }} />
                )
              }
              onClick={() => setDisplayMore(!displayMore)}
            >
              {!displayMore ? "Voir plus" : "Voir moins"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
