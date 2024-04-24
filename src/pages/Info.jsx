import foto from "../assets/foto_hv.jpeg";

const Info = () => {
  return (
    <div className="bg-indigo-100 m-10">
      <div className="flex justify-center p-3">
        <img src={foto} alt="foto" width={150} height={150} />
      </div>
      <div>
        <h1 className="flex justify-center font-bold">
          Dianella Restrepo Chaverra
        </h1>
        <p className="flex justify-center text-center">
          Ingeniera de Sistemas de la universidad de Medellin con 22 años,
          apasionada por la tecnología y el desarrollo de software.
        </p>
        <p className="flez justify-center text-center">
          Hago parte del grupo de organizadores de la comunidad de MedellinJS y
          JUMI (Juventud de mujeres en ciencia e ingenieria) de la Universidad
          de Medellin. Me gusta compartir el conocimiento, aprender y mostrarle
          a los demas lo que se puede lograr con la tecnologia.
        </p>
        <a href="https://github.com/chzdiane" target="_blank" rel="noreferrer" className="flex justify-center">
          <button className="flex justify-center text-center font-bold m-3 bg-slate-50 p-1 rounded">Github</button>
        </a>
        <a href="https://www.linkedin.com/in/dianellarestrepochaverra/" target="_blank" rel="noreferrer" className="flex justify-center">
          <button className="flex justify-center text-center font-bold m-3 bg-slate-50 p-1 rounded">LinkeIn</button>
        </a>
      </div>
    </div>
  );
};

export default Info;
