import { useEffect, useState } from "react";
import "./BootScreen.css";

const BOOT_STEPS = [
    {
        type: "system",
        text: "Arch Linux 6.15.x-arch1-1 (tty1)",
    },
    {
        type: "login",
        text: "vampxlia login:",
        value: "vampxlia",
    },
    {
        type: "password",
        text: "Password:",
        value: "••••••••••••",
    },
    {
        type: "system",
        text: "Authentication successful.",
    },
    {
        type: "system",
        text: "",
    },
    {
        type: "system",
        text: "Last login: Mon Aug 17 15:42:03 on tty1",
    },
    {
        type: "system",
        text: "",
    },
    {
        type: "system",
        text: "Welcome to vampxlia@arch.",
    },
    {
        type: "system",
        text: "Starting portfolio shell...",
    },
];

function BootScreen({ onComplete }) {
    const [visibleSteps, setVisibleSteps] = useState([]);
    const [skipped, setSkipped] = useState(false);

    useEffect(() => {
        if (skipped) {
            onComplete();
            return;
        }

        let currentStep = 0;

        const interval = setInterval(() => {
            currentStep += 1;

            setVisibleSteps(BOOT_STEPS.slice(0, currentStep));

            if (currentStep >= BOOT_STEPS.length) {
                clearInterval(interval);

                setTimeout(() => {
                    onComplete();
                }, 900);
            }
        }, 350);

        return () => clearInterval(interval);
    }, [onComplete, skipped]);

    useEffect(() => {
        const handleSkip = () => {
            setSkipped(true);
        };

        window.addEventListener("keydown", handleSkip);
        window.addEventListener("click", handleSkip);

        return () => {
            window.removeEventListener("keydown", handleSkip);
            window.removeEventListener("click", handleSkip);
        };
    }, []);

    return (
        <main className="boot-screen">
            <div className="boot-terminal">
                {visibleSteps.map((step, index) => (
                    <div
                        className={`boot-line boot-line--${step.type}`}
                        key={index}
                    >
                        <span>{step.text}</span>

                        {step.value && (
                            <span className="boot-value">
                                {step.value}
                            </span>
                        )}
                    </div>
                ))}

                {!skipped && visibleSteps.length > 0 && (
                    <span className="boot-cursor">█</span>
                )}
            </div>

            {!skipped && (
                <div className="boot-skip">
                    Press any key to skip
                </div>
            )}
        </main>
    );
}

export default BootScreen;