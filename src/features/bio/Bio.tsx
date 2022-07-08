import { useState } from "react";
import { NombresSimpsons, INFO_SIMPSONS } from "./constants";
import {
  BioDescripcion,
  BioImagen,
  BioNombre,
  BotonBio,
  ContainerBio,
  ContainerBotones,
} from "./styles";

const Bio = () => {
  const [bioActiva, setBioActiva] = useState(
    INFO_SIMPSONS[NombresSimpsons.BART]
  );

  const onClick: (nombre: NombresSimpsons) => void = (nombre) =>
    setBioActiva(INFO_SIMPSONS[nombre]);

  const crearBotones = () => {
    return Object.keys(INFO_SIMPSONS).map((nombre: string) => (
      <BotonBio
        isActive={(bioActiva.id === nombre) as boolean}
        key={nombre as string}
        onClick={() => onClick(nombre as NombresSimpsons)}
      >
        {nombre}
      </BotonBio>
    ));
  };

  return (
    <ContainerBio>
      <ContainerBotones>{crearBotones()}</ContainerBotones>
      <div>
        <div>
          {/* <img
            src={bioActiva.image}
            alt={bioActiva.nombre}
            className={styles.bioImagen}
          /> */}
          <BioImagen src={bioActiva.image} alt={bioActiva.nombre} />
        </div>
        <div>
          <BioNombre>{bioActiva.nombre}</BioNombre>
          <BioDescripcion>{bioActiva.descripcion}</BioDescripcion>
        </div>
      </div>
    </ContainerBio>
  );
};

export default Bio;
