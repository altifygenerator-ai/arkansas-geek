type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  text?: string;
  align?: "left" | "center";
};

export default function SectionHeading({
  eyebrow,
  title,
  text,
  align = "left",
}: SectionHeadingProps) {
  return (
    <div
      className={
        align === "center"
          ? "mx-auto max-w-3xl text-center"
          : "max-w-3xl"
      }
    >
      {eyebrow ? <div className="eyebrow">{eyebrow}</div> : null}

      <h2 className="section-title mt-5">{title}</h2>

      {text ? <p className="lead mt-6">{text}</p> : null}
    </div>
  );
}