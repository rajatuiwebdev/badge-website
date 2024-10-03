
import { Header } from './Header'
import { Greeting } from './Greeting'
export const Landing = () => {
    return (
        <div className="mx-5">
            <Header />
            <Greeting />
            <div className=""></div>
            <div className="border-4 border-red-400 rounded-lg p-4 text-center mb-5">
                <div className="flex justify-center mb-4">
                    <img className="border-2 rounded-md p-5 w-526 h-56" src="https://ai.mlsc-amity.tech/dist/imgdb/newcomer.png" alt="Postman API Fundamentals Student Expert Badge" />
                </div>
                <h2 className="text-3xl font-semibold m-2">
                    Season of AI | Beginner AI Learner
                </h2>
                <h2 className="text-xl text-gray-600">Awarded to: <span className="text-yellow-600">
                    hello.rajat.rajput@gmail.com
                </span>
                </h2>
                <h2 className="text-xl text-gray-600">Issued on: <span className="text-yellow-600">
                    Jul 28, 2024 at 1:11 AM
                </span>
                </h2>
            </div>

            <div className="border-4 border-orange-400 rounded-lg p-4 text-center b-5">
                <div className="flex justify-center mb-4">
                    <img className="border-2 rounded-md p-5 w-526 h-56" src="https://ai.mlsc-amity.tech/dist/imgdb/newcomer.png" alt="Postman API Fundamentals Student Expert Badge" />
                </div>
                <h2 className="text-3xl font-semibold m-2">
                    Season of AI | Beginner AI Learner
                </h2>
                <h2 className="text-xl text-gray-600">Awarded to: <span className="text-yellow-600">
                    hello.rajat.rajput@gmail.com
                </span>
                </h2>
                <h2 className="text-xl text-gray-600">Issued on: <span className="text-yellow-600">
                    Jul 28, 2024 at 1:11 AM
                </span>
                </h2>
            </div>

        </div>
    )
}