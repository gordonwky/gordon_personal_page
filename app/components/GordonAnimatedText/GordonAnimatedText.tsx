import { motion } from "framer-motion"

export function GordonAnimatedText({ sentence, className }: { sentence: string, className?: string, }) {
    // const sentence = "I do code and make content about it!";
    if (typeof sentence !== "string") {
        console.error("GordonAnimatedText: sentence must be a string");
        return null;
    }
    // split the sentence into two part by '\n'
    const parts = sentence.split("\n");
    // if the sentence has more than 2 parts, take the first two
    if (parts.length > 2) {
        console.warn("GordonAnimatedText: sentence has more than 2 parts, taking the first two");
        parts.slice(0, 2)
    }
    if (parts.length < 2) { parts.push("") } // if the sentence has only one part, add a new line at the end
    // if the sentence has only one part, add a new line at the end
    return (
        <div className="flex ">
            <motion.h1
                className={`text-5xl text-white font-black flex flex-wrap word-break-normal`}
                initial="hidden"
                animate="visible"
                variants={{
                    visible: {
                        transition: {
                            staggerChildren: 0.05,
                        },
                    },
                }}
            >
                {sentence.split(" ").map((text, index) => (
                    <motion.span
                        key={index}
                        variants={{
                            hidden: { opacity: 0, y: 20 },
                            visible: { opacity: 1, y: 0 },
                        }}
                        className={`mx-1 ${className}`}
                        // className="mx-1 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent"

                        transition={{ duration: 1.6, ease: "easeOut" }}
                    >
                        {text}
                    </motion.span>
                ))}
            </motion.h1>
        </div>
    );
}
