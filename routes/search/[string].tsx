import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return <div class="select-none">Hello {props.params.string}</div>;
}
