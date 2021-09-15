import React from "react"
import { useForm } from "react-hook-form"

type FormType = {
	email: string
	senha: string
}

const Home = () => {
	const { register, handleSubmit } = useForm()

	const submit = (e: FormType) => {
		alert("Se fudeu kkkkkkkk")
		//TODO: Dar um susto
	}

	return (
		<div className="flex justify-center items-center flex-col h-screen bg-gray-600">
			<img
				src="https://logosmarcas.net/wp-content/uploads/2020/12/Discord-Logo.png"
				alt="teste"
				className="w-1/3"
			/>
			<form className="flex flex-col gap-5 mt-10 items-center w-1/3 text-white" onSubmit={handleSubmit(submit)}>
				<input
					{...register("email")}
					type="email"
					placeholder="Email"
					className="ml-2 px-4 py-1 rounded-2xl bg-gray-500 focus:outline-none w-full"
					required
				/>

				<input
					{...register("senha")}
					type="password"
					placeholder="Senha"
					className="ml-2 px-4 py-1 rounded-2xl bg-gray-500 focus:outline-none w-full"
					required
				/>

				<input
					type="submit"
					value="Gerar Nitro"
					className="bg-gray-700 text-white font-bold py-3 px-14 w-min rounded-3xl"
				/>
			</form>
		</div>
	)
}

export default Home
