import { useState } from "react";

export default function Page() {
  const [noCount, setNoCount] = useState(0);
  const [yesPressed, setYesPressed] = useState(false);
  const yesButtonSize = noCount * 20 + 16;

  const handleNoClick = () => {
    setNoCount(noCount + 1);
  };

  const getNoButtonText = () => {
    const spanishPhrases = [
      "No",
      "¿Estás segura?",
      "¿De verdad?",
      "¡Piénsalo de nuevo!",
      "¡Última oportunidad!",
      "¿Segura que no?",
      "¡Podrías arrepentirte!",
      "¡Vuelve a pensarlo!",
      "¿Estás absolutamente segura?",
      "¡Podría ser un error!",
      "¡Ten corazón!",
      "¡No seas tan fría!",
      "¿Cambias de opinión?",
      "¿No lo reconsiderarías?",
      "¿Esa es tu respuesta final?",
      "Me estás rompiendo el corazón ;(",
      "¿Esa es tu respuesta final?",
      "Me estás rompiendo el corazón ;(",
      "Por favor? :( Me estás rompiendo el corazón",
    ];

    return spanishPhrases[Math.min(noCount, spanishPhrases.length - 1)];
  };

  return (
    <div className="overflow-hidden flex flex-col items-center justify-center pt-4 h-screen -mt-16 selection:bg-rose-600 selection:text-white text-zinc-900">
      {yesPressed ? (
        <>
          <img src="https://media.tenor.com/gUiu1zyxfzYAAAAi/bear-kiss-bear-kisses.gif" />
          <div className="text-4xl md:text-6xl font-bold my-4">
            Wujuuuuuuu!!!
          </div>
          <div className="text-4xl md:text-6xl font-bold my-4" style={{ color: "#E30B5C" }}>
            Nos vemos el viernes 14! Te quiero!!!
          </div>
        </>
      ) : (
        <>
        <h1 className="text-4xl md:text-6xl my-4 text-center" style={{ color: "#E30B5C" }}>
            Kenia Eunice Solis Rodriguez
          </h1>
          <img
            className="h-[230px] rounded-lg shadow-lg"
            src="https://gifdb.com/images/high/cute-Love-bear-roses-ou7zho5oosxnpo6k.gif"
          />
          <h1 className="text-4xl md:text-6xl my-4 text-center">
            Quieres ser mi Valentine?
          </h1>
          <div className="flex flex-wrap justify-center gap-2 items-center">
            <button
              className={`bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg mr-4`}
              style={{ fontSize: yesButtonSize }}
              onClick={() => setYesPressed(true)}
            >
              Si
            </button>
            <button
              onClick={handleNoClick}
              className=" bg-rose-500 hover:bg-rose-600 rounded-lg text-white font-bold py-2 px-4"
            >
              {noCount === 0 ? "No" : getNoButtonText()}
            </button>
          </div>
        </>
      )}
      <Footer />
    </div>
  );
}

const Footer = () => {
  return (
    <a></a>
  );
};