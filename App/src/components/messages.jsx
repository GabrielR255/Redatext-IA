const Messages = ({ messagestxt}) => {
  const isBot = messagestxt.assistent === 'Valéria';

  // Divide o texto em parágrafos, considerando \n\n ou \n
  const paragrafos = messagestxt.text.split(/\n\n|\n/);

  return (
    <div className={`flex ${isBot ? 'justify-start' : 'justify-end'} p-5`}>
      <div
        className={`max-w-5xl lg:max-w-md px-5 py-5 rounded-2xl shadow-2xl hover:shadow-xl cursor-pointer ${
          isBot
            ? 'bg-amber-50 text-black rounded-bl-none border border-gray-700'
            : 'bg-gradient-to-r from-[#006e99] via-[rgb(57,168,233)] to-[#469ae9] text-white rounded-br-none'
        }`}
      >
        {/* Renderiza cada parágrafo dentro de um <p>, adicionando espaçamento */}
        {paragrafos.map((paragrafo, index) => (
          <p key={index} className="text-sm mb-3 whitespace-pre-wrap">
            {paragrafo.trim()}
          </p>
        ))}
      </div>
    </div>
  );
};

export default Messages;
