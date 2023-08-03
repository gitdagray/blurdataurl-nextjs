import Image from 'next/image'
import getBase64 from '@/lib/getLocalBase64'

export default async function DynamicPage() {

    const myBlurDataUrl = await getBase64('http://localhost:3000/coffee.jpg')

    return (
        <main className="min-h-screen grid place-content-center">

            <div className="w-[400px] rounded-2xl overflow-hidden">
                <Image
                    src='/coffee.jpg'
                    alt="Coffee"
                    width={4016}
                    height={6016}
                    sizes="400px"
                    placeholder='blur'
                    blurDataURL={myBlurDataUrl}
                    priority
                />
            </div>

        </main>
    )
}
