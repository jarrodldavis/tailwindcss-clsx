import clsx from "clsx";

export default function Component() {
  return <div className={clsx({ "class-a": true, "class-b": false }, { "class-c": true, "class-d": false })}></div>;
}
