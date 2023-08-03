import Image from 'next/image'
import coffeePic from '../coffee.jpg'

export default async function StaticPage() {

    return (
        <main className="min-h-screen grid place-content-center">

            <div className="w-[400px] rounded-2xl overflow-hidden">
                <Image
                    src={coffeePic}
                    alt="Coffee"
                    width={4016}
                    height={6016}
                    sizes="400px"
                    placeholder='blur'
                    priority
                />
            </div>

        </main>
    )
}
