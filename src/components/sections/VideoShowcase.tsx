import { useState } from "react";
import { Play } from "lucide-react";
import { Reveal } from "@/components/Reveal";

type Video = {
  id: string;
  title: string;
};

const mainVideo: Video = { id: "qEwoJWbXSTs", title: "Virtual tour — Heaven Furniture Mart" };
const shorts: Video[] = [
  { id: "95QrFvVcLXI", title: "Heaven Furniture Mart — showroom moment" },
  { id: "h-Idu5_85WA", title: "Heaven Furniture Mart — showroom moment" },
];

function VideoCard({ video }: { video: Video }) {
  const [playing, setPlaying] = useState(false);

  return (
    <div className={`bg-charcoal group relative w-full overflow-hidden rounded-sm aspect-video`}>
      {playing ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube.com/embed/${video.id}?si=5RBtdu1U_AOKA9dd&autoplay=1`}
          title={video.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => setPlaying(true)}
          className="absolute inset-0 size-full cursor-pointer"
          aria-label={`Play video: ${video.title}`}
        >
          <img
            src={`https://i.ytimg.com/vi/${video.id}/hqdefault.jpg`}
            alt={video.title}
            className="size-full object-cover opacity-90 transition-opacity duration-300 group-hover:opacity-100"
            loading="lazy"
          />
          <span className="absolute inset-0 bg-black/25 transition-colors duration-300 group-hover:bg-black/10" />
          <span className="bg-gold/95 text-accent-foreground absolute top-1/2 left-1/2 flex size-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full shadow-lg transition-transform duration-300 ease-out group-hover:scale-110">
            <Play className="ml-0.5 size-6" fill="currentColor" aria-hidden />
          </span>
        </button>
      )}
    </div>
  );
}

export function VideoShowcase() {
  return (
    <section className="section-y bg-secondary/60">
      <div className="container-hfm">
        <Reveal className="max-w-2xl">
          <p className="eyebrow">Watch</p>
          <h2 className="display-lg mt-4">See the showroom in motion</h2>
          <span className="rule-gold mt-6" />
        </Reveal>
        <div className="mt-12 grid grid-cols-1 gap-4 lg:grid-cols-3">
          {([mainVideo, ...shorts] as Video[]).map((video, i) => (
            <Reveal key={video.id} delay={i * 80}>
              <VideoCard video={video} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
