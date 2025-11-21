"use client"
import Image from "next/image"
import ButtonLink from "../ButtonLink"
import { useEffect, useState } from "react"
import { AnimatePresence, motion } from "framer-motion"
import CloseLineIcon from "remixicon-react/CloseLineIcon"

function CertificateCard({ cert }) {
  const { title, image, url } = cert
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onKey = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <div className="overflow-hidden">
      <div
        className="group relative w-full md:aspect-video aspect-3/2 overflow-hidden sm:rounded-4xl rounded-2xl cursor-zoom-in"
        onClick={() => setOpen(true)}
        aria-label="عرض الصورة بالحجم الكامل"
      >
        <Image
          src={image}
          alt={title}
          quality={70}
          fill
          className="object-contain scale-[1.06] rotate-1 transition-transform duration-500 ease-out group-hover:scale-[1.08] group-hover:rotate-2"
          sizes="(max-width: 1280px) 100vw, 1280px"
        />
      </div>
      <div className="p-4 flex items-center justify-between gap-3">
        <p className="md:text-xl sm:text-lg text-base font-semibold">{title}</p>
        {url && (
          <ButtonLink href={url} target="_blank"
            rel="noopener noreferrer" className="btn-secondary">View</ButtonLink>
        )}
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.98, y: 10 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.98, y: 10 }}
              transition={{ duration: 0.2, ease: "easeOut" }}
              className="relative max-w-5xl w-[92vw] mx-auto sm:mt-[8vh] mt-[12vh]"
              onClick={(e) => e.stopPropagation()}
              role="dialog"
              aria-modal="true"
            >
              <button
                type="button"
                onMouseDown={(e) => { e.stopPropagation(); setOpen(false) }}
                aria-label="إغلاق الموديل"
                className="absolute top-4 right-4 inline-flex items-center justify-center w-9 h-9 rounded-full bg-black/60 text-white hover:bg-black/70 transition z-10"
              >
                <CloseLineIcon />
              </button>

              <div className="relative w-full h-[70vh] sm:h-[80vh] overflow-hidden sm:rounded-3xl rounded-2xl">
                <Image
                  src={image}
                  alt={title}
                  fill
                  className="object-contain"
                  sizes="100vw"
                  priority
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default CertificateCard