import Image, { StaticImageData } from "next/image"
import Link from "next/link"
import {useTranslations} from 'next-intl';

export function FullBanner(props) { 
  const t = useTranslations('Games');
  return (
    <div>
      <h3 className="font font-light text-5xl mt-3 mb-1"><i>{t(`${props.title}.title`)}</i></h3>
        <div className="flex flex-col items-center">
          <Link href={props.href} className="block relative w-screen">
          <div className="relative mt-1 mb-2 h-52 bg-slate-300">
              <Image 
                  src={props.backgroundImg as StaticImageData} 
                  alt="Tenjin Dash Background"
                  fill
                  className="w-full h-full object-cover blur-[2px]"
              ></Image>
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ">
              {props.logo}                                    
              </div>
            </div>
          </Link>             
          <h4 className="prose prose-gray text-center mb-4">{t.rich(`${props.title}.desc`, {i: (chunks) => <i>{chunks}</i>})}</h4>
        </div>                                 
    </div>
  )
}