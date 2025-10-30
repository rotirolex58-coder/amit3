import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { MasonryGrid } from "@/components/ui/image-testimonial-grid";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";

const TransformationImage = ({ src, alt }: { src: string; alt: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="glass-intense rounded-2xl overflow-hidden group cursor-pointer"
    >
      <div className="relative overflow-hidden">
        <img
          src={src}
          alt={alt}
          loading="lazy"
          className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
    </motion.div>
  );
};

const Transformations = () => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [columns, setColumns] = useState(3);

  const transformationImages = [
    {
      src: "https://ik.imagekit.io/sxktlshdn/SnapInsta.to_503475218_18481511803068461_6957674887002282534_n.jpg?updatedAt=1761803213650",
      alt: "Transformation Result 1"
    },
    {
      src: "https://ik.imagekit.io/sxktlshdn/SnapInsta.to_503387343_18481511800068461_8518795141208715230_n.jpg?updatedAt=1761803214503",
      alt: "Transformation Result 2"
    },
    {
      src: "https://ik.imagekit.io/sxktlshdn/SnapInsta.to_503372284_18481511794068461_2347062922455599600_n.jpg?updatedAt=1761803215324",
      alt: "Transformation Result 3"
    },
    {
      src: "https://ik.imagekit.io/sxktlshdn/SnapInsta.to_503343452_18481511758068461_8183293268416937856_n.jpg?updatedAt=1761803215382",
      alt: "Transformation Result 4"
    },
    {
      src: "https://ik.imagekit.io/sxktlshdn/SnapInsta.to_503385813_18481511785068461_6793275724048128873_n.jpg?updatedAt=1761803215367",
      alt: "Transformation Result 5"
    },
    {
      src: "https://ik.imagekit.io/sxktlshdn/SnapInsta.to_503982829_18481511695068461_1725159230096031982_n.jpg?updatedAt=1761803215446",
      alt: "Transformation Result 6"
    },
    {
      src: "https://ik.imagekit.io/sxktlshdn/SnapInsta.to_503358942_18481511713068461_7776521191716216921_n.jpg?updatedAt=1761803215474",
      alt: "Transformation Result 7"
    },
    {
      src: "https://ik.imagekit.io/sxktlshdn/SnapInsta.to_503278078_18481511692068461_7523830053483918272_n.jpg?updatedAt=1761803215474",
      alt: "Transformation Result 8"
    },
    {
      src: "https://ik.imagekit.io/sxktlshdn/SnapInsta.to_503181360_18481511749068461_7341025526988042870_n.jpg?updatedAt=1761803215483",
      alt: "Transformation Result 9"
    },
    {
      src: "https://ik.imagekit.io/sxktlshdn/SnapInsta.to_503946464_18481511662068461_9123074913033177021_n.jpg?updatedAt=1761803215489",
      alt: "Transformation Result 10"
    },
    {
      src: "https://ik.imagekit.io/sxktlshdn/SnapInsta.to_503743237_18481511701068461_7059219700768473374_n.jpg?updatedAt=1761803215536",
      alt: "Transformation Result 11"
    },
    {
      src: "https://ik.imagekit.io/sxktlshdn/SnapInsta.to_503166074_18481511698068461_3097913700248999885_n.jpg?updatedAt=1761803215547",
      alt: "Transformation Result 12"
    },
    {
      src: "https://ik.imagekit.io/sxktlshdn/SnapInsta.to_503626702_18481511647068461_8278944993284126609_n.jpg?updatedAt=1761803215532",
      alt: "Transformation Result 13"
    },
    {
      src: "https://ik.imagekit.io/sxktlshdn/SnapInsta.to_503406258_18481511677068461_4759041479797289948_n.jpg?updatedAt=1761803215604",
      alt: "Transformation Result 14"
    },
  ];

  const getColumns = (width: number) => {
    if (width < 640) return 1;
    if (width < 1024) return 2;
    if (width < 1280) return 3;
    return 3;
  };

  useEffect(() => {
    const handleResize = () => setColumns(getColumns(window.innerWidth));
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);


  return (
    <div className="min-h-screen bg-background relative overflow-hidden">
      <ParticleBackground />
      
      <div className="relative z-10">
        <Navigation />
        
        <section className="py-32 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[150px]" />

          <div className="container mx-auto px-4 relative z-10" ref={ref}>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <div className="inline-block glass px-6 py-3 rounded-full mb-6">
                <p className="text-primary font-semibold text-sm tracking-wider">
                  SUCCESS STORIES
                </p>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold mb-6">
                All <span className="gradient-text">Transformations</span>
              </h1>
              <p className="text-xl text-foreground/70 max-w-3xl mx-auto">
                Discover how IT professionals have transformed their lives and achieved their fitness goals
              </p>
            </motion.div>

            <MasonryGrid columns={columns} gap={4}>
              {transformationImages.map((image, index) => (
                <TransformationImage key={index} src={image.src} alt={image.alt} />
              ))}
            </MasonryGrid>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20 max-w-5xl mx-auto"
            >
              {[
                { value: "200+", label: "Lives Changed" },
                { value: "92%", label: "Success Rate" },
                { value: "15-25kg", label: "Avg. Fat Loss" },
                { value: "4.9★", label: "Client Rating" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  className="glass-intense p-6 rounded-2xl text-center"
                >
                  <div className="text-3xl md:text-4xl font-bold gradient-text mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-foreground/60">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Transformations;
