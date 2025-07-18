import { default as cn } from "classnames";

interface GlassProps {
    children: React.ReactNode;
    className?: string;
}

function Glass({ children, className }: GlassProps) {
    return (
        <div
            className={cn(
                "flex flex-col items-center justify-center border border-white/40 rounded-4xl py-4 px-8 bg-neutral-900 shadow-[inset_0_0_12px_2px_rgba(255,255,255,0.75)]",
                className
            )}
        >
            {children}
        </div>
    );
}

export default Glass;
