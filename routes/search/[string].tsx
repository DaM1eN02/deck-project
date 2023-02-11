import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return <div class="font-mono select-none">Hello {props.params.string}</div>;
}
