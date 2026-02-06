import { motion } from 'framer-motion';

const Hero = () => {
      return (
                <section className="relative h-[80vh] flex items-center justify-center bg-background border-b border-accent/10">
                            <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
                                            <motion.p
                                                                  initial={{ opacity: 0 }}
                                                                  animate={{ opacity: 1 }}
                                                                  transition={{ duration: 0.8 }}
                                                                  className="text-accent font-heading tracking-[0.4em] uppercase text-xs mb-8"
                                                              >
                                                                Lakewood's Premiere Local
                                            </motion.p>motion.p>
                            
                                            <motion.h1
                                                                  initial={{ opacity: 0 }}
                                                                  animate={{ opacity: 1 }}
                                                                  transition={{ duration: 1, delay: 0.2 }}
                                                                  className="text-5xl md:text-7xl font-heading mb-8 leading-tight tracking-tight"
                                                              >
                                                                The Neighborhood's <br /> Living Room
                                            </motion.h1>motion.h1>
                            
                                            <motion.p
                                                                  initial={{ opacity: 0 }}
                                                                  animate={{ opacity: 1 }}
                                                                  transition={{ duration: 1, delay: 0.4 }}
                                                                  className="text-base md:text-lg font-body text-gray-400 mb-12 max-w-xl mx-auto font-light"
                                                              >
                                                                Proper pints, iconic pizza, and the best patio in Lakewood.
                                            </motion.p>motion.p>
                            
                                            <motion.div
                                                                  initial={{ opacity: 0 }}
                                                                  animate={{ opacity: 1 }}
                                                                  transition={{ duration: 0.5, delay: 0.6 }}
                                                              >
                                                                <a
                                                                                          href="#menu"
                                                                                          className="inline-block px-12 py-4 border border-accent text-accent font-heading tracking-widest btn-glow transition-all duration-300"
                                                                                      >
                                                                                        VIEW MENU
                                                                </a>a>
                                            </motion.div>motion.div>
                            </div>div>
                </section>section>
            );
};

export default Hero;</section>
