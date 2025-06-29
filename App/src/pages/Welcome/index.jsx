import Welcomeimg from '../../imgs/Welcome.svg'



export const Welcome = () => {

return(

<div className="w-full h-full bg-gradient-to-r from-[#0535a3] to-[#508be9] relative">

    <div className='flex absolute justify-center items-center w-full  flex-col p-8'>

        <h1 className='text-3xl font-bold text-amber-500 '>📄RedaMIL</h1>
        <p className='text-amber-50 p-2'>Obtenha a melhor análise de sua redação!</p>
    </div>

<div className="flex absolute flex-col justify-center items-center min-h-screen w-full gap-3.5">
<img src={Welcomeimg} alt="Welcome" className='w-57' />
<h1 className="text-amber-50 text-3xl font-semibold">Seja bem vindo ao <span className="text-amber-500">RedaMil!</span>📑</h1>
<p className="text-2xl text-amber-50">Para prosseguir com a análise da sua redação é só seguir para a nossa Avaliadora IA</p>
<button className='bg-blue-950 p-3 rounded-2xl text-amber-50 text-2xl cursor-pointer  '>Acessar IA🧠</button>
</div>

</div>

)


}