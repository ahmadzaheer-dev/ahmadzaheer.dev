import Image from "next/image";
import { useMDXComponent } from "next-contentlayer/hooks";
import { Code } from "bright";

const components = {
  Image,
  pre: Code,
};

interface MdxProps {
  code: string;
}

function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code);

  return <Component components={components} />;
}

export default Mdx;
