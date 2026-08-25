export const projects = [
    {
        id: "course-certificate-generation-system",
        name: "Course Certificate Generation System",
        description:
            "A web application designed to automate the generation, signing using " +
            ".pk12 certificates, and email distribution of course completion certificates, " +
            "featuring role-based access control (RBAC) and a built-in editor allowing " +
            "users to customize their own course certificates.",
        technologies: [
            "TypeScript",
            "Node.js",
            "Express.js",
            "Ejs",
            "HTML5",
            "CSS3",
            "MySQL"
        ],
        github: "https://github.com/vampxlia/Course-Certificate-Generation-System",
        featured: true,
        media: ["certificate-generator-demo"]
    },

    {
        id: "ant-colony",
        name: "Ant Colony and Pheromone Simulator",
        description:
            "A Simulation of an ant colony, showcasing emergent behavior through modeling" +
            " how ants locate food and establish routes using trails of pheromones, eventually" +
            " converging on the most efficient path.",
        technologies: [
            "Java",
            "Processing"
        ],
        github: "https://github.com/vampxlia/Ant-Colony-and-Pheromone-Simulation",
        featured: true,
        media: ["ant-colony-demo"]
    },

    {
        id: "arduino-gyroscope",
        name: "Arduino Gyroscope",
        description:
            "A program for the Arduino Nano, that uses the built-in accelerometer sensor to read " +
            "tilt on the x, y and z axis, display these values on a 16 bit LCD and transmit them " +
            "to a connected device through a USB connection.",
        technologies: [
            "Arduino",
            "C++"
        ],
        github: "https://github.com/vampxlia/Arduino-Gyroscope",
        featured: true,
        media: ["arduino-gyroscope-img"]
    },

    {
        id: "flappy-kitten",
        name: "Flappy Kitten",
        description:
            "A desktop game inspired by Flappy Bird, made with LibGDX.",
        technologies: [
            "Java",
            "Gradle",
            "LibGDX",
            "xml"
        ],
        github: "https://github.com/vampxlia/Flappy-Kitten",
        featured: true,
        media: ["flappy-kitten-demo"]
    }
];